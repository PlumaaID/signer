export default [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createDeterministic",
    inputs: [
      {
        name: "owner",
        type: "tuple",
        internalType: "struct RSASigner.PublicKey",
        components: [
          {
            name: "exponent",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "modulus",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "predictDeterministicAddress",
    inputs: [
      {
        name: "owner",
        type: "tuple",
        internalType: "struct RSASigner.PublicKey",
        components: [
          {
            name: "exponent",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "modulus",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "deployer",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "RSASignerCreated",
    inputs: [
      {
        name: "owner",
        type: "tuple",
        indexed: true,
        internalType: "struct RSASigner.PublicKey",
        components: [
          {
            name: "exponent",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "modulus",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "signer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC1167FailedCreateClone",
    inputs: [],
  },
] as const;
