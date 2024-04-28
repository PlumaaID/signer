import { SmartAccountSigner } from "permissionless/_types/accounts";
import { md, pki, util } from "node-forge";
import {
  Hex,
  SignableMessage,
  Hash,
  TypedDataDefinition,
  TypedData,
  concat,
  getContract,
  Client,
} from "viem";
import { with0x, without0x } from "./utils";
import { TypedDataDomain, TypedDataEncoder, TypedDataField } from "ethers";
import RSASignerFactoryABI from "./abi/RSASignerFactory";

// Universal RSASigner factory contract address
const factory = "0x0884D00bC0a7f86632b80bccFa43ec872a9961D3";

/**
 * @class RSASHA256Signer
 * @implements {SmartAccountSigner}
 * @description A smart account signer that uses RSA keys with SHA256 hashing algorithm.
 */
class RSASHA256Signer implements SmartAccountSigner {
  constructor(
    private readonly keypair: pki.rsa.KeyPair,
    public address: SmartAccountSigner["address"]
  ) {}

  static async from<TClient extends Client>(
    keypair: pki.rsa.KeyPair,
    viemClient: TClient
  ): Promise<RSASHA256Signer> {
    const contract = getContract({
      address: factory,
      abi: RSASignerFactoryABI,
      client: viemClient,
    });
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

  get source(): SmartAccountSigner["source"] {
    return "custom";
  }

  get type(): SmartAccountSigner["type"] {
    return "local";
  }

  async signMessage({ message }: { message: SignableMessage }): Promise<Hex> {
    const digest = md.sha256.create();

    if (typeof message === "string") {
      digest.update(message, "utf8");
    } else if ("raw" in message) {
      if (typeof message.raw === "string") {
        digest.update(util.hexToBytes(without0x(message.raw)), "raw");
      } else {
        digest.update(util.createBuffer(message.raw).bytes(), "raw");
      }
    }

    const signature = this.keypair.privateKey.sign(digest);
    return with0x(util.bytesToHex(signature));
  }

  async signTypedData<
    typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | "EIP712Domain" = keyof typedData
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>
  ): Promise<Hash> {
    const encodedTypedData = TypedDataEncoder.encode(
      typedDataDefinition.domain as TypedDataDomain,
      typedDataDefinition.types as Record<string, TypedDataField[]>,
      typedDataDefinition.message as TypedData
    );

    const digest = md.sha256
      .create()
      .update(util.hexToBytes(without0x(encodedTypedData)), "raw");

    const signature = this.keypair.privateKey.sign(digest);
    return with0x(util.bytesToHex(signature));
  }
}

export { RSASHA256Signer };
