export default {
  abi: [
    { type: "constructor", inputs: [], stateMutability: "nonpayable" },
    {
      type: "function",
      name: "initialize",
      inputs: [
        {
          name: "owner",
          type: "tuple",
          internalType: "struct RSASigner.PublicKey",
          components: [
            { name: "exponent", type: "bytes", internalType: "bytes" },
            { name: "modulus", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "isValidSignature",
      inputs: [
        { name: "digest", type: "bytes32", internalType: "bytes32" },
        { name: "signature", type: "bytes", internalType: "bytes" },
      ],
      outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isValidSignature",
      inputs: [
        { name: "_data", type: "bytes", internalType: "bytes" },
        { name: "_signature", type: "bytes", internalType: "bytes" },
      ],
      outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "publicKey",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct RSASigner.PublicKey",
          components: [
            { name: "exponent", type: "bytes", internalType: "bytes" },
            { name: "modulus", type: "bytes", internalType: "bytes" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "Initialized",
      inputs: [
        {
          name: "version",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
      ],
      anonymous: false,
    },
    { type: "error", name: "InvalidInitialization", inputs: [] },
    { type: "error", name: "NotInitializing", inputs: [] },
  ],
  bytecode: {
    object:
      "0x608080604052346100b8577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c166100a957506001600160401b036002600160401b031982821601610064575b6040516112cc90816100be8239f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1388080610055565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081630b53b9e81461005a575080631626ba7e1461005557806320c13b0b14610050576363ffab311461004b57600080fd5b6106ca565b61050f565b6103b2565b34610288577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126102845760043567ffffffffffffffff9182821161028057604090823603011261027c577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549160ff8360401c1615921680159081610274575b600114908161026a575b159081610261575b5061023757610158908261014b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b6101db575b600401610a9b565b61015f5780f35b6101ab7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a180f35b6102327ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b610150565b7ff92ee8a90000000000000000000000000000000000000000000000000000000060805260046080fd5b905015846100f2565b303b1591506100ea565b8391506100e0565b8280fd5b8380fd5b5080fd5b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176102d657604052565b61028b565b6020810190811067ffffffffffffffff8211176102d657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176102d657604052565b81601f820112156103ad5780359067ffffffffffffffff82116102d6576040519261038b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601856102f7565b828452602083830101116103ad57816000926020809301838601378301015290565b600080fd5b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5760043560243567ffffffffffffffff81116103ad57610404903690600401610338565b819061040e610d4d565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f8284010151910182526104bf575b61045493506020825192015192610e80565b156104b5576104b17f20c13b0b000000000000000000000000000000000000000000000000000000005b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b6104b1600061047e565b91509160006104f06020926040518481019182528481526104df816102ba565b604051928392839251928391610664565b8101039060025afa1561050a576104549160005191610442565b610c3a565b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5767ffffffffffffffff6004358181116103ad5761055f903690600401610338565b906024359081116103ad576105c69161057e6020923690600401610338565b9082815191012060405193849283927f1626ba7e0000000000000000000000000000000000000000000000000000000084526004840152604060248401526044830190610687565b0381305afa90811561050a57600091610607575b6040517fffffffff0000000000000000000000000000000000000000000000000000000083168152602090f35b6020813d60201161065c575b81610620602093836102f7565b8101031261028457517fffffffff00000000000000000000000000000000000000000000000000000000811681036102845790506104b16105da565b3d9150610613565b60005b8381106106775750506000910152565b8181015183820152602001610667565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936106c381518092818752878088019101610664565b0116010190565b346103ad5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad576104b1610704610d4d565b60405191829160208352602061072582516040838701526060860190610687565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152610687565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156103ad570180359067ffffffffffffffff82116103ad576020019181360383136103ad57565b90600182811c921680156107f1575b60208310146107c257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f16916107b7565b601f8111610807575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906020601f850160051c83019410610882575b601f0160051c01915b82811061087757505050565b81815560010161086b565b9092508290610862565b601f8111610898575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e75906020601f850160051c83019410610913575b601f0160051c01915b82811061090857505050565b8181556001016108fc565b90925082906108f3565b919067ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b501906109638161095e84546107a8565b61088c565b6000601f82116001146109c15781906109b29394956000926109b6575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b9055565b013590503880610980565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216947f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e7591805b878110610a83575083600195969710610a4b575b505050811b019055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610a41565b90926020600181928686013581550194019101610a2d565b610aa58180610757565b67ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50091610ae982610ae485546107a8565b6107fb565b600090601f8311600114610b545782610b529593610b4c9593610b3f936000926109b65750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b90555b6020810190610757565b9061091d565b565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08416815b818110610c225750926001928592610b529896610b4c989610610bea575b505050811b019055610b42565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610bdd565b91936020600181928787013581550195019201610bbf565b6040513d6000823e3d90fd5b604051906000827fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50191825492610c7b846107a8565b80845293602091600191828116908115610d085750600114610ca7575b505050610b52925003836102f7565b60009081527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e759590935091905b828410610cf05750610b52945050508101602001388080610c98565b85548885018301529485019487945092810192610cd4565b91505060209350610b529592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101388080610c98565b604051610d59816102ba565b60608152606060208092015260405190610d72826102ba565b6040516000817fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b500918254610da5816107a8565b9384845260019187600182169182600014610e3f575050600114610de3575b5050610dd2925003826102f7565b8252610ddc610c46565b9082015290565b8692506000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906000915b858310610e27575050610dd293508201013880610dc4565b80548388018501528694508793909201918101610e0f565b91509350610dd29592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880610dc4565b9192805193604085108015611187575b61117d57610e9d92611192565b929015611175576000818401917fff00000000000000000000000000000000000000000000000000000000000000917f310000000000000000000000000000000000000000000000000000000000000083610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8701517fff000000000000000000000000000000000000000000000000000000000000001690565b16036110ac57506034917e3031300d060960864801650304020105000420000000000000000000000000927fffffffffffffffffffffffffffffffffffffffff000000000000000000000000925b039060025b82811061103a575050610feb610fc660208801517fffff0000000000000000000000000000000000000000000000000000000000001690565b7fffff0000000000000000000000000000000000000000000000000000000000001690565b7e01000000000000000000000000000000000000000000000000000000000000149586611028575b505050508261102157505090565b5114919050565b01602001511614925038808080611013565b8161109261106d6020848c0101517fff000000000000000000000000000000000000000000000000000000000000001690565b7fff000000000000000000000000000000000000000000000000000000000000001690565b0361109f57600101610f8d565b5050505050505050600090565b7f2f000000000000000000000000000000000000000000000000000000000000008361111a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08701517fff000000000000000000000000000000000000000000000000000000000000001690565b160361116c57506032917e302f300b060960864801650304020104200000000000000000000000000000927fffffffffffffffffffffffffffffffffffff000000000000000000000000000092610f88565b94505050505090565b505050600090565b5050505050600090565b508251851415610e90565b929061119d83611246565b611226576020906112116080855192875196815191604051998a938885019a8b5260408501528660608501526111db815180928a8888019101610664565b83016111ef825180938a8885019101610664565b0161120282518093898785019101610664565b010360608101885201866102f7565b80859486518160055afa948181520101604052565b5091505060405190611237826102db565b60008252600036813760009190565b6000805b825181101561128e577fff0000000000000000000000000000000000000000000000000000000000000060208285010151166112885760010161124a565b50905090565b50505060019056fea2646970667358221220f7aee8c72c73b1898fa519dfbcecd53b3ab7dfe55e1301abd08acef723ca118d64736f6c63430008180033",
    sourceMap:
      "751:4527:0:-:0;;;;;;;8837:64:32;751:4527:0;;;;;;;;;7896:76:32;;-1:-1:-1;;;;;;;;;;;;751:4527:0;;;7985:34:32;7981:146;;-1:-1:-1;751:4527:0;;;;;;;;;7981:146:32;-1:-1:-1;;;;;;751:4527:0;;;;;;;;;;;;;8087:29:32;;751:4527:0;;8087:29:32;7981:146;;;;;7896:76;-1:-1:-1;;;7938:23:32;;;;;751:4527:0;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052600436101561001257600080fd5b6000803560e01c9081630b53b9e81461005a575080631626ba7e1461005557806320c13b0b14610050576363ffab311461004b57600080fd5b6106ca565b61050f565b6103b2565b34610288577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126102845760043567ffffffffffffffff9182821161028057604090823603011261027c577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549160ff8360401c1615921680159081610274575b600114908161026a575b159081610261575b5061023757610158908261014b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b6101db575b600401610a9b565b61015f5780f35b6101ab7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a180f35b6102327ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b610150565b7ff92ee8a90000000000000000000000000000000000000000000000000000000060805260046080fd5b905015846100f2565b303b1591506100ea565b8391506100e0565b8280fd5b8380fd5b5080fd5b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176102d657604052565b61028b565b6020810190811067ffffffffffffffff8211176102d657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176102d657604052565b81601f820112156103ad5780359067ffffffffffffffff82116102d6576040519261038b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601856102f7565b828452602083830101116103ad57816000926020809301838601378301015290565b600080fd5b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5760043560243567ffffffffffffffff81116103ad57610404903690600401610338565b819061040e610d4d565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f8284010151910182526104bf575b61045493506020825192015192610e80565b156104b5576104b17f20c13b0b000000000000000000000000000000000000000000000000000000005b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b6104b1600061047e565b91509160006104f06020926040518481019182528481526104df816102ba565b604051928392839251928391610664565b8101039060025afa1561050a576104549160005191610442565b610c3a565b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5767ffffffffffffffff6004358181116103ad5761055f903690600401610338565b906024359081116103ad576105c69161057e6020923690600401610338565b9082815191012060405193849283927f1626ba7e0000000000000000000000000000000000000000000000000000000084526004840152604060248401526044830190610687565b0381305afa90811561050a57600091610607575b6040517fffffffff0000000000000000000000000000000000000000000000000000000083168152602090f35b6020813d60201161065c575b81610620602093836102f7565b8101031261028457517fffffffff00000000000000000000000000000000000000000000000000000000811681036102845790506104b16105da565b3d9150610613565b60005b8381106106775750506000910152565b8181015183820152602001610667565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936106c381518092818752878088019101610664565b0116010190565b346103ad5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad576104b1610704610d4d565b60405191829160208352602061072582516040838701526060860190610687565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152610687565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156103ad570180359067ffffffffffffffff82116103ad576020019181360383136103ad57565b90600182811c921680156107f1575b60208310146107c257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f16916107b7565b601f8111610807575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906020601f850160051c83019410610882575b601f0160051c01915b82811061087757505050565b81815560010161086b565b9092508290610862565b601f8111610898575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e75906020601f850160051c83019410610913575b601f0160051c01915b82811061090857505050565b8181556001016108fc565b90925082906108f3565b919067ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b501906109638161095e84546107a8565b61088c565b6000601f82116001146109c15781906109b29394956000926109b6575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b9055565b013590503880610980565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216947f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e7591805b878110610a83575083600195969710610a4b575b505050811b019055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610a41565b90926020600181928686013581550194019101610a2d565b610aa58180610757565b67ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50091610ae982610ae485546107a8565b6107fb565b600090601f8311600114610b545782610b529593610b4c9593610b3f936000926109b65750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b90555b6020810190610757565b9061091d565b565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08416815b818110610c225750926001928592610b529896610b4c989610610bea575b505050811b019055610b42565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610bdd565b91936020600181928787013581550195019201610bbf565b6040513d6000823e3d90fd5b604051906000827fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50191825492610c7b846107a8565b80845293602091600191828116908115610d085750600114610ca7575b505050610b52925003836102f7565b60009081527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e759590935091905b828410610cf05750610b52945050508101602001388080610c98565b85548885018301529485019487945092810192610cd4565b91505060209350610b529592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101388080610c98565b604051610d59816102ba565b60608152606060208092015260405190610d72826102ba565b6040516000817fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b500918254610da5816107a8565b9384845260019187600182169182600014610e3f575050600114610de3575b5050610dd2925003826102f7565b8252610ddc610c46565b9082015290565b8692506000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906000915b858310610e27575050610dd293508201013880610dc4565b80548388018501528694508793909201918101610e0f565b91509350610dd29592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880610dc4565b9192805193604085108015611187575b61117d57610e9d92611192565b929015611175576000818401917fff00000000000000000000000000000000000000000000000000000000000000917f310000000000000000000000000000000000000000000000000000000000000083610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8701517fff000000000000000000000000000000000000000000000000000000000000001690565b16036110ac57506034917e3031300d060960864801650304020105000420000000000000000000000000927fffffffffffffffffffffffffffffffffffffffff000000000000000000000000925b039060025b82811061103a575050610feb610fc660208801517fffff0000000000000000000000000000000000000000000000000000000000001690565b7fffff0000000000000000000000000000000000000000000000000000000000001690565b7e01000000000000000000000000000000000000000000000000000000000000149586611028575b505050508261102157505090565b5114919050565b01602001511614925038808080611013565b8161109261106d6020848c0101517fff000000000000000000000000000000000000000000000000000000000000001690565b7fff000000000000000000000000000000000000000000000000000000000000001690565b0361109f57600101610f8d565b5050505050505050600090565b7f2f000000000000000000000000000000000000000000000000000000000000008361111a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08701517fff000000000000000000000000000000000000000000000000000000000000001690565b160361116c57506032917e302f300b060960864801650304020104200000000000000000000000000000927fffffffffffffffffffffffffffffffffffff000000000000000000000000000092610f88565b94505050505090565b505050600090565b5050505050600090565b508251851415610e90565b929061119d83611246565b611226576020906112116080855192875196815191604051998a938885019a8b5260408501528660608501526111db815180928a8888019101610664565b83016111ef825180938a8885019101610664565b0161120282518093898785019101610664565b010360608101885201866102f7565b80859486518160055afa948181520101604052565b5091505060405190611237826102db565b60008252600036813760009190565b6000805b825181101561128e577fff0000000000000000000000000000000000000000000000000000000000000060208285010151166112885760010161124a565b50905090565b50505060019056fea2646970667358221220f7aee8c72c73b1898fa519dfbcecd53b3ab7dfe55e1301abd08acef723ca118d64736f6c63430008180033",
    sourceMap:
      "751:4527:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8837:64:32;751:4527:0;;;;;;;4301:16:32;751:4527:0;;4726:16:32;;:34;;;;751:4527:0;4805:1:32;4790:16;:50;;;;751:4527:0;4855:13:32;:30;;;;751:4527:0;4851:91:32;;;5055:1;4951:18;;;8837:64;751:4527:0;;;;;;;;;4951:18:32;4979:67;;751:4527:0;;;5055:1:32;:::i;:::-;5066:101;;751:4527:0;;5066:101:32;5100:23;8837:64;751:4527:0;;;;;;;5100:23:32;751:4527:0;;4805:1:32;751:4527:0;;5142:14:32;;751:4527:0;;5142:14:32;751:4527:0;;4979:67:32;5013:22;8837:64;751:4527:0;;;;;;;;;5013:22:32;4979:67;;4851:91;4908:23;751:4527:0;4908:23:32;751:4527:0;;4908:23:32;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:32;;4726:34;;;-1:-1:-1;4726:34:32;;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3138:34;3984:11;;;:::i;:::-;4772:498;;;;;;;;;;;;;;4119:75;;751:4527;4223:135;4297:15;;751:4527;4297:15;;4330:14;;;4223:135;;:::i;:::-;3138:100;;;751:4527;;3138:100;751:4527;;;;;;;;;;;;;;;;;;;;3138:100;751:4527;-1:-1:-1;3138:100:0;;4119:75;751:4527;;;-1:-1:-1;751:4527:0;;;;;4164:18;;;751:4527;;;4164:18;;;;;;:::i;:::-;751:4527;;;;;;;;;;;;:::i;:::-;;;4157:26;;;;;;;;4223:135;4157:26;-1:-1:-1;4157:26:0;4119:75;;;4157:26;;:::i;751:4527::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;3572:16;751:4527;;3550:51;;;;;751:4527;3550:51;;751:4527;3550:51;;751:4527;;;;;;;;;;;:::i;:::-;3550:51;:4;;:51;;;;;;;-1:-1:-1;3550:51:0;;;751:4527;;;;;;;;;;;3550:51;751:4527;3550:51;;751:4527;3550:51;;;;;;751:4527;3550:51;;;:::i;:::-;;;751:4527;;;;;;;;;;;;3550:51;-1:-1:-1;751:4527:0;3550:51;;;;;-1:-1:-1;3550:51:0;;751:4527;;;;;;;;-1:-1:-1;;751:4527:0;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::o;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;751:4527:0;4528:86;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;:::o;:::-;-1:-1:-1;751:4527:0;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1569:124;751:4527;;;;:::i;:::-;;;;;;4528:86;751:4527;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::i;:::-;1569:124::o;751:4527::-;4528:86;751:4527;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;751:4527:0;;;;;-1:-1:-1;;;751:4527:0;;;;;;;;-1:-1:-1;751:4527:0;;-1:-1:-1;;;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1747:116;751:4527;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;-1:-1:-1;4528:86:0;;751:4527;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;1747:116;:::o;751:4527::-;;;;-1:-1:-1;751:4527:0;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3875:2813:2;;;751:4527:0;;4150:13:2;4159:4;4150:13;;:37;;;;3875:2813;4146:88;;4286:29;;;:::i;:::-;4333:8;;;4329:59;;-1:-1:-1;6828:79:2;;;751:4527:0;;6828:79:2;751:4527:0;6828:79:2;7051:41;6828:79;;;;751:4527:0;;;;7051:41:2;751:4527:0;5160:46:2;751:4527:0;;5266:13:2;5275:4;5297:75;5306:66;5390:73;5397:66;5156:728;;751:4527:0;6168:13:2;6180:1;6183:14;;;;;;6828:79;;6476:49;7237:41;6828:79;;;;751:4527:0;;;;7237:41:2;751:4527:0;;;;6476:49:2;751:4527:0;6476:49:2;:124;;;;6163:168;6476:195;;;;;;;6453:218;;3875:2813;:::o;6476:195::-;6828:79;6620:51;;3875:2813;-1:-1:-1;3875:2813:2:o;6476:124::-;6828:79;;;;6555:45;6545:55;;-1:-1:-1;6476:124:2;;;;;;6199:3;6828:79;6226:36;7051:41;6828:79;;;;;;751:4527:0;;;;7051:41:2;751:4527:0;;;;6226:36:2;;6222:95;;751:4527:0;;6168:13:2;;6222:95;6286:12;;;;;;;;-1:-1:-1;6286:12:2;:::o;5156:728::-;751:4527:0;6828:79:2;7051:41;6828:79;;;;751:4527:0;;;;7051:41:2;751:4527:0;5488:46:2;751:4527:0;;5594:13:2;5195:2;5625:75;5634:66;5718:73;5725:66;5484:400;5156:728;;5484:400;5857:12;;;;;;;:::o;4329:59::-;4361:12;;;4368:5;4361:12;:::o;4146:88::-;4207:12;;;;;4214:5;4207:12;:::o;4150:37::-;751:4527:0;;;4167:20:2;;;4150:37;;1667:1063;;;1836:13;;;:::i;:::-;1832:47;;2004:51;751:4527:0;2004:51:2;751:4527:0;;;;;;;;;;;;2004:51:2;;;;;;751:4527:0;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;2004:51:2;751:4527:0;2004:51:2;;;;;;;:::i;:::-;1995:60;;2109:615;;;;;;;;;;;;;751:4527:0;2109:615:2;1667:1063::o;1832:47::-;751:4527:0;;;;;;;;;;:::i;:::-;1859:5:2;751:4527:0;;1859:5:2;751:4527:0;;;1859:5:2;1851:28;;:::o;2813:248::-;2912:1;;2937:3;751:4527:0;;2915:20:2;;;;;751:4527:0;;;;;;;;2956:68:2;;751:4527:0;;2900:13:2;;2956:68;2997:12;;;;:::o;2915:20::-;;;;751:4527:0;2813:248:2;:::o",
    linkReferences: {},
  },
  methodIdentifiers: {
    "initialize((bytes,bytes))": "0b53b9e8",
    "isValidSignature(bytes,bytes)": "20c13b0b",
    "isValidSignature(bytes32,bytes)": "1626ba7e",
    "publicKey()": "63ffab31",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicKey","outputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}],"devdoc":{"errors":{"InvalidInitialization()":[{"details":"The contract is already initialized."}],"NotInitializing()":[{"details":"The contract is not initializing."}]},"events":{"Initialized(uint64)":{"details":"Triggered when the contract has been initialized or reinitialized."}},"kind":"dev","methods":{"constructor":{"custom:oz-upgrades-unsafe-allow":"constructor"},"initialize((bytes,bytes))":{"params":{"owner":"The RSA public key of the owner"}}},"title":"Plumaa - An RSA SHA256 PKCS1.5 enabler contract. It allows an RSA public key to have an Ethereum address and sign operations. A notable example of RSA signatures in real-world applications are the government-issued digital certificates. Useful for setting this contract as the owner of a multisig, among other things. NOTE: This contract uses a custom signature format with a suffix flag for normalization of keccak256 digests. See `isValidSignature`.","version":1},"userdoc":{"kind":"user","methods":{"initialize((bytes,bytes))":{"notice":"Initializes the contract with an RSA owner"},"isValidSignature(bytes,bytes)":{"notice":"Legacy EIP1271 method to validate a signature. Assumes signature corresponds to the keccak256 digest of the data."},"isValidSignature(bytes32,bytes)":{"notice":"Checks if the provided signature is valid for the sha256 hash. Given the popularity of keccak256 in EVM contracts, most calls to this function will send a keccak256 digest. A custom signature format is used to allow for normalizing the digest before verifying it. Normalizing the digest means that it\'s hashed again with sha256 so it\'s compatible with RSA PKCS1.5 validation. Off-chain signers are not adapted for non-standard digests, so they can be adapted by passing the keccak256 as the message to sign. The custom format is `SSSSSSSSS...SSSSSSSSSSSSSN`, where: - `S` is the PKCS1.5 SHA256 signature (0x01 - 0x..) - `N` is the normalization boolean byte (0x00) (if true, the digest is hashed again with sha256) The setup is cryptographically secure assuming both keccak256 and sha256 are secure cryptographic hashing functions, which is a reasonable assumption given their trust in the Ethereum community for keccak256 and the standardization of sha256 in government certificates."},"publicKey()":{"notice":"Returns the signer\'s public key"}},"version":1}},"settings":{"compilationTarget":{"contracts/src/RSASigner.sol":"RSASigner"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts-upgradeable/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":createx/=lib/createx/src/",":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/createx/lib/openzeppelin-contracts/contracts/",":solady/=lib/createx/lib/solady/",":~/=contracts/src/"],"viaIR":true},"sources":{"contracts/src/RSASigner.sol":{"keccak256":"0x37a4a0b3ad271b19c6265b3f78961ff5bedcccd96355b9b981f228910e7e670c","license":"MIT","urls":["bzz-raw://b21465a5f236e44245261cebe3e2b5d99ba5d06b9b7c659ae7b855c96e25bd75","dweb:/ipfs/QmbehEVMH4d1u2JAgAKapKu7oVSu6Esw2nvbQsL5bBmcLg"]},"contracts/src/unreleased/RSA.sol":{"keccak256":"0xdb126a879c865fdbdc6b78a8fe7c239a8953b9c4d8064ae7274d31bd6bfd9dc3","license":"MIT","urls":["bzz-raw://ba56b353f453c7ae0a18ec81e07900c754affeebdd2ac6eaae5e3c154e2a6668","dweb:/ipfs/QmYeDoXasswhHgPH5ZErmWtsxA49enaXNwsaXcyV2EUXdg"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol":{"keccak256":"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39","license":"MIT","urls":["bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743","dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"]},"lib/openzeppelin-contracts/contracts/proxy/utils/Initializable.sol":{"keccak256":"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b","license":"MIT","urls":["bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609","dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.24+commit.e11b9ed9" },
    language: "Solidity",
    output: {
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], type: "error", name: "InvalidInitialization" },
        { inputs: [], type: "error", name: "NotInitializing" },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "version",
              type: "uint64",
              indexed: false,
            },
          ],
          type: "event",
          name: "Initialized",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "struct RSASigner.PublicKey",
              name: "owner",
              type: "tuple",
              components: [
                { internalType: "bytes", name: "exponent", type: "bytes" },
                { internalType: "bytes", name: "modulus", type: "bytes" },
              ],
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "initialize",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "digest", type: "bytes32" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          stateMutability: "view",
          type: "function",
          name: "isValidSignature",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
        },
        {
          inputs: [
            { internalType: "bytes", name: "_data", type: "bytes" },
            { internalType: "bytes", name: "_signature", type: "bytes" },
          ],
          stateMutability: "view",
          type: "function",
          name: "isValidSignature",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "publicKey",
          outputs: [
            {
              internalType: "struct RSASigner.PublicKey",
              name: "",
              type: "tuple",
              components: [
                { internalType: "bytes", name: "exponent", type: "bytes" },
                { internalType: "bytes", name: "modulus", type: "bytes" },
              ],
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          constructor: { "custom:oz-upgrades-unsafe-allow": "constructor" },
          "initialize((bytes,bytes))": {
            params: { owner: "The RSA public key of the owner" },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "initialize((bytes,bytes))": {
            notice: "Initializes the contract with an RSA owner",
          },
          "isValidSignature(bytes,bytes)": {
            notice:
              "Legacy EIP1271 method to validate a signature. Assumes signature corresponds to the keccak256 digest of the data.",
          },
          "isValidSignature(bytes32,bytes)": {
            notice:
              "Checks if the provided signature is valid for the sha256 hash. Given the popularity of keccak256 in EVM contracts, most calls to this function will send a keccak256 digest. A custom signature format is used to allow for normalizing the digest before verifying it. Normalizing the digest means that it's hashed again with sha256 so it's compatible with RSA PKCS1.5 validation. Off-chain signers are not adapted for non-standard digests, so they can be adapted by passing the keccak256 as the message to sign. The custom format is `SSSSSSSSS...SSSSSSSSSSSSSN`, where: - `S` is the PKCS1.5 SHA256 signature (0x01 - 0x..) - `N` is the normalization boolean byte (0x00) (if true, the digest is hashed again with sha256) The setup is cryptographically secure assuming both keccak256 and sha256 are secure cryptographic hashing functions, which is a reasonable assumption given their trust in the Ethereum community for keccak256 and the standardization of sha256 in government certificates.",
          },
          "publicKey()": { notice: "Returns the signer's public key" },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts-upgradeable/",
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "createx/=lib/createx/src/",
        "ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/createx/lib/openzeppelin-contracts/contracts/",
        "solady/=lib/createx/lib/solady/",
        "~/=contracts/src/",
      ],
      optimizer: { enabled: true, runs: 10000000 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "contracts/src/RSASigner.sol": "RSASigner" },
      evmVersion: "paris",
      libraries: {},
      viaIR: true,
    },
    sources: {
      "contracts/src/RSASigner.sol": {
        keccak256:
          "0x37a4a0b3ad271b19c6265b3f78961ff5bedcccd96355b9b981f228910e7e670c",
        urls: [
          "bzz-raw://b21465a5f236e44245261cebe3e2b5d99ba5d06b9b7c659ae7b855c96e25bd75",
          "dweb:/ipfs/QmbehEVMH4d1u2JAgAKapKu7oVSu6Esw2nvbQsL5bBmcLg",
        ],
        license: "MIT",
      },
      "contracts/src/unreleased/RSA.sol": {
        keccak256:
          "0xdb126a879c865fdbdc6b78a8fe7c239a8953b9c4d8064ae7274d31bd6bfd9dc3",
        urls: [
          "bzz-raw://ba56b353f453c7ae0a18ec81e07900c754affeebdd2ac6eaae5e3c154e2a6668",
          "dweb:/ipfs/QmYeDoXasswhHgPH5ZErmWtsxA49enaXNwsaXcyV2EUXdg",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol": {
        keccak256:
          "0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39",
        urls: [
          "bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743",
          "dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/proxy/utils/Initializable.sol": {
        keccak256:
          "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        urls: [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 0,
} as const;
