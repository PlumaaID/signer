// https://github.com/safe-global/safe-core-sdk/blob/98ccbdf73982aaa4e424194bc56fb6e24c0e129c/packages/safe-core-sdk-types/src/types.ts#L47
export interface SafeSignature {
  readonly signer: string;
  readonly data: string;
  readonly isContractSignature: boolean;
  staticPart(dynamicOffset?: string): string;
  dynamicPart(): string;
}

// https://github.com/safe-global/safe-core-sdk/blob/98ccbdf73982aaa4e424194bc56fb6e24c0e129c/packages/protocol-kit/src/utils/signatures/SafeSignature.ts#L3
export class EthSafeSignature implements SafeSignature {
  signer: string;
  data: string;
  isContractSignature: boolean;

  /**
   * Creates an instance of a Safe signature.
   *
   * @param signer - Ethers signer
   * @param signature - The Safe signature
   * @returns The Safe signature instance
   */
  constructor(signer: string, signature: string, isContractSignature = false) {
    this.signer = signer;
    this.data = signature;
    this.isContractSignature = isContractSignature;
  }

  /**
   * Returns the static part of the Safe signature.
   *
   * @returns The static part of the Safe signature
   */
  staticPart(dynamicOffset?: string) {
    if (this.isContractSignature) {
      return `${this.signer.slice(2).padStart(64, "0")}${
        dynamicOffset || ""
      }00`;
    }

    return this.data;
  }

  /**
   * Returns the dynamic part of the Safe signature.
   *
   * @returns The dynamic part of the Safe signature
   */
  dynamicPart() {
    if (this.isContractSignature) {
      const dynamicPartLength = (this.data.slice(2).length / 2)
        .toString(16)
        .padStart(64, "0");
      return `${dynamicPartLength}${this.data.slice(2)}`;
    }

    return "";
  }
}

// https://github.com/safe-global/safe-core-sdk/blob/98ccbdf73982aaa4e424194bc56fb6e24c0e129c/packages/protocol-kit/src/utils/signatures/utils.ts#L152
export const buildSignatureBytes = (signatures: SafeSignature[]): string => {
  const SIGNATURE_LENGTH_BYTES = 65;

  signatures.sort((left, right) =>
    left.signer.toLowerCase().localeCompare(right.signer.toLowerCase())
  );

  let signatureBytes = "0x";
  let dynamicBytes = "";

  for (const signature of signatures) {
    if (signature.isContractSignature) {
      /* 
        A contract signature has a static part of 65 bytes and the dynamic part that needs to be appended 
        at the end of signature bytes.
        The signature format is
        Signature type == 0
        Constant part: 65 bytes
        {32-bytes signature verifier}{32-bytes dynamic data position}{1-byte signature type}
        Dynamic part (solidity bytes): 32 bytes + signature data length
        {32-bytes signature length}{bytes signature data}
      */
      const dynamicPartPosition = (
        signatures.length * SIGNATURE_LENGTH_BYTES +
        dynamicBytes.length / 2
      )
        .toString(16)
        .padStart(64, "0");

      signatureBytes += signature.staticPart(dynamicPartPosition);
      dynamicBytes += signature.dynamicPart();
    } else {
      signatureBytes += signature.data.slice(2);
    }
  }

  return signatureBytes + dynamicBytes;
};
