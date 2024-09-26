import { md, pki, util } from "node-forge";
import {
  Hex,
  SignableMessage,
  Hash,
  TypedDataDefinition,
  TypedData,
  concat,
  toHex,
  hashTypedData,
  hashMessage,
  isHex,
  LocalAccount,
  SerializeTransactionFn,
  TransactionSerializable,
} from "viem";

import { predictRSASignerAddress, with0x, without0x } from "./utils";
import {
  EthSafeSignature,
  buildSignatureBytes,
} from "./vendor/@safe-global/protocol-kit";

/**
 * @class RSASHA256Signer
 * @implements {LocalAccount}
 * @description A smart account signer that uses RSA keys with SHA256 hashing algorithm.
 */
class RSASHA256Signer implements LocalAccount {
  public readonly source: LocalAccount["source"] = "custom";
  public readonly type: LocalAccount["type"] = "local";
  public readonly address: LocalAccount["address"];

  constructor(private readonly keypair: pki.rsa.KeyPair, salt?: Hex) {
    this.address = predictRSASignerAddress(this.rsaPublicKey, salt);
  }

  /**
   * @abstract The public key is the concatenation of the exponent and modulus of the RSA key.
   */
  get publicKey(): LocalAccount["publicKey"] {
    return concat([
      with0x(this.rsaPublicKey.e.toString(16)),
      with0x(this.rsaPublicKey.n.toString(16)),
    ]);
  }

  get rsaPublicKey(): pki.rsa.PublicKey {
    return this.keypair.publicKey;
  }

  signTransaction = <
    serializer extends SerializeTransactionFn<TransactionSerializable> = SerializeTransactionFn<TransactionSerializable>,
    transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]
  >(
    transaction: transaction,
    options?: { serializer?: serializer | undefined } | undefined
  ) => {
    // Silence the linter
    transaction;
    options;
    throw new Error("Method not implemented.");
  };

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
    return this.sign({ hash: hashMessage(raw) });
  };

  signTypedData = async <
    typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | "EIP712Domain" = keyof typedData
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>
  ): Promise<Hash> => {
    return this.sign({ hash: hashTypedData(typedDataDefinition) });
  };

  async sign({ hash }: { hash: Hash }): Promise<Hex> {
    const digest = md.sha256
      .create()
      .update(util.hexToBytes(without0x(hash)), "raw");
    const signature = this.keypair.privateKey.sign(digest);
    // The format follows the normalization model of the RSASigner.sol contract
    return concat([with0x(util.bytesToHex(signature)), "0x01"]);
  }
}

/**
 * @dev Adapter of RSASHA256Signer to support signing messages encoded in the format of a Safe{Wallet}.
 */
class RSASHA256SafeSigner extends RSASHA256Signer {
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

    return this.toSafeEthSignature(await this.sign({ hash: hashMessage(raw) }));
  };

  signTypedData = async <
    typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | "EIP712Domain" = keyof typedData
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>
  ): Promise<Hex> => {
    const signature = await this.sign({
      hash: hashTypedData(typedDataDefinition),
    });

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
