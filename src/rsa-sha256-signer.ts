import { SmartAccountSigner } from "permissionless/_types/accounts";
import { md, pki, util } from "node-forge";
import {
  Hex,
  SignableMessage,
  Hash,
  TypedDataDefinition,
  TypedData,
  concat,
  Client,
  toHex,
  hashTypedData,
  hashMessage,
  isHex,
} from "viem";

import { getRSASignerFactory, with0x, factory, without0x } from "./utils";
import {
  EthSafeSignature,
  buildSignatureBytes,
} from "./vendor/@safe-global/protocol-kit";

/**
 * @class RSASHA256Signer
 * @implements {SmartAccountSigner}
 * @description A smart account signer that uses RSA keys with SHA256 hashing algorithm.
 */
class RSASHA256Signer implements SmartAccountSigner {
  public readonly source: SmartAccountSigner["source"] = "custom";
  public readonly type: SmartAccountSigner["type"] = "local";

  constructor(
    private readonly keypair: pki.rsa.KeyPair,
    public readonly address: SmartAccountSigner["address"]
  ) {}

  static async from<TClient extends Client>(
    keypair: pki.rsa.KeyPair,
    viemClient: TClient
  ): Promise<RSASHA256Signer> {
    const contract = getRSASignerFactory(viemClient);
    const address = await contract.read.predictDeterministicAddress([
      {
        exponent: with0x(keypair.privateKey.e.toString(16)),
        modulus: with0x(keypair.privateKey.n.toString(16)),
      },
      factory,
    ]);
    const signer = new RSASHA256Signer(keypair, address);
    return signer;
  }

  /**
   * @abstract The public key is the concatenation of the exponent and modulus of the RSA key.
   */
  get publicKey(): SmartAccountSigner["publicKey"] {
    return concat([
      with0x(this.rsaPublicKey.e.toString(16)),
      with0x(this.rsaPublicKey.n.toString(16)),
    ]);
  }

  get rsaPublicKey(): pki.rsa.PublicKey {
    return this.keypair.publicKey;
  }

  signMessage = async ({
    message,
  }: {
    message: SignableMessage;
  }): Promise<Hex> => {
    const raw =
      typeof message === "string"
        ? toHex(message)
        : isHex(message.raw)
        ? message.raw
        : toHex(message.raw);
    return this.sign(hashMessage(raw));
  };

  signTypedData = async <
    typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | "EIP712Domain" = keyof typedData
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>
  ): Promise<Hash> => {
    return this.sign(hashTypedData(typedDataDefinition));
  };

  protected async sign(keccak256Digest: Hash): Promise<Hex> {
    const digest = md.sha256
      .create()
      .update(util.hexToBytes(without0x(keccak256Digest)), "raw");
    const signature = this.keypair.privateKey.sign(digest);
    // The format follows the normalization model of the RSASigner.sol contract
    return concat([with0x(util.bytesToHex(signature)), "0x01"]);
  }
}

/**
 * @dev Adapter of RSASHA256Signer to support signing messages encoded in the format of a Safe{Wallet}.
 */
class RSASHA256SafeSigner extends RSASHA256Signer {
  static async from<TClient extends Client>(
    keypair: pki.rsa.KeyPair,
    viemClient: TClient
  ): Promise<RSASHA256Signer> {
    const contract = getRSASignerFactory(viemClient);
    const address = await contract.read.predictDeterministicAddress([
      {
        exponent: with0x(keypair.privateKey.e.toString(16)),
        modulus: with0x(keypair.privateKey.n.toString(16)),
      },
      factory,
    ]);
    const signer = new RSASHA256SafeSigner(keypair, address);
    return signer;
  }

  signMessage = async ({
    message,
  }: {
    message: SignableMessage;
  }): Promise<Hex> => {
    const raw =
      typeof message === "string"
        ? toHex(message)
        : isHex(message.raw)
        ? message.raw
        : toHex(message.raw);

    return this.toSafeEthSignature(await this.sign(hashMessage(raw)));
  };

  signTypedData = async <
    typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | "EIP712Domain" = keyof typedData
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>
  ): Promise<Hex> => {
    const signature = await this.sign(hashTypedData(typedDataDefinition));

    return this.toSafeEthSignature(signature);
  };

  private async toSafeEthSignature(signature: Hex): Promise<Hex> {
    const ethSafeSignature = new EthSafeSignature(
      this.address,
      signature,
      true
    );
    return with0x(buildSignatureBytes([ethSafeSignature]));
  }
}

export { RSASHA256Signer, RSASHA256SafeSigner };
