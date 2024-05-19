export default {
  abi: [
    { type: "constructor", inputs: [], stateMutability: "nonpayable" },
    {
      type: "function",
      name: "createDeterministic",
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
      outputs: [{ name: "", type: "address", internalType: "address" }],
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
            { name: "exponent", type: "bytes", internalType: "bytes" },
            { name: "modulus", type: "bytes", internalType: "bytes" },
          ],
        },
        { name: "deployer", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "address", internalType: "address" }],
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
            { name: "exponent", type: "bytes", internalType: "bytes" },
            { name: "modulus", type: "bytes", internalType: "bytes" },
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
    { type: "error", name: "ERC1167FailedCreateClone", inputs: [] },
  ],
  bytecode: {
    object:
      "0x60a080604052346100775761138a8181016001600160401b03811183821017610061578291610688833903906000f080156100555760805260405161060b908161007d8239608051818181609e015261032a0152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c80634c76f8271461028657635d24297e1461003657600080fd5b3461027f57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102835767ffffffffffffffff833581811161027f57610086903690860161046f565b9173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000006e5af43d82803e903d91602b57fd5bf37fffffffffffffffffffffffffffffffffff0000000000000000000000000000006100f78761058e565b92763d602d80600a3d3981f3363d3d373d3d3d363d7300000062ffffff8260881c1617865260781b161788526037600984f51694851561025857853b15610254578451927f0b53b9e800000000000000000000000000000000000000000000000000000000845282848061016d88868301610538565b0381838b5af1801561024a5761020b575b50505050815181601f80876101d781806101a0889951898151938492016104d2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095869101168701950151858151938492016104d2565b0116010390207fa908d537697a6fe8b02e8102cd20b68071a741fcabf7a3fd0ee036b5a0bd0924848351858152a251908152f35b831161021e57505082523880808061017e565b9060416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b86513d85823e3d90fd5b5080fd5b84517fc2f868f4000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b80fd5b50903461027f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027f5780359067ffffffffffffffff8211610381576102d49136910161046f565b916024359273ffffffffffffffffffffffffffffffffffffffff9182851685036102835750604360209461030960559361058e565b85519160388301526f5af43d82803e903d91602b57fd5bf3ff6024830152847f0000000000000000000000000000000000000000000000000000000000000000166014830152733d602d80600a3d3981f3363d3d373d3d3d363d73825260588201526037600c82012060788201520120915191168152f35b8380fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103c657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f8201121561046a5780359067ffffffffffffffff82116103c6576040519261044860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610385565b8284526020838301011161046a57816000926020809301838601378301015290565b600080fd5b91909160408184031261046a57604080519167ffffffffffffffff918301828111848210176103c6576040528294813583811161046a57816104b29184016103f5565b8452602082013592831161046a576020926104cd92016103f5565b910152565b60005b8381106104e55750506000910152565b81810151838201526020016104d5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610531815180928187528780880191016104d2565b0116010190565b9061058b91602081526020610558835160408385015260608401906104f5565b9201519060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828503019101526104f5565b90565b6040516105cf816105a3602082019485610538565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610385565b5190209056fea2646970667358221220ae187b5f7f00be66a9748fcdc709e8e6bebefb822848abcc8dbdf245172fd8e664736f6c63430008180033608080604052346100b8577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c166100a957506001600160401b036002600160401b031982821601610064575b6040516112cc90816100be8239f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1388080610055565b63f92ee8a960e01b8152600490fd5b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081630b53b9e81461005a575080631626ba7e1461005557806320c13b0b14610050576363ffab311461004b57600080fd5b6106ca565b61050f565b6103b2565b34610288577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126102845760043567ffffffffffffffff9182821161028057604090823603011261027c577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549160ff8360401c1615921680159081610274575b600114908161026a575b159081610261575b5061023757610158908261014b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b6101db575b600401610a9b565b61015f5780f35b6101ab7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a180f35b6102327ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b610150565b7ff92ee8a90000000000000000000000000000000000000000000000000000000060805260046080fd5b905015846100f2565b303b1591506100ea565b8391506100e0565b8280fd5b8380fd5b5080fd5b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176102d657604052565b61028b565b6020810190811067ffffffffffffffff8211176102d657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176102d657604052565b81601f820112156103ad5780359067ffffffffffffffff82116102d6576040519261038b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601856102f7565b828452602083830101116103ad57816000926020809301838601378301015290565b600080fd5b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5760043560243567ffffffffffffffff81116103ad57610404903690600401610338565b819061040e610d4d565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f8284010151910182526104bf575b61045493506020825192015192610e80565b156104b5576104b17f20c13b0b000000000000000000000000000000000000000000000000000000005b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b6104b1600061047e565b91509160006104f06020926040518481019182528481526104df816102ba565b604051928392839251928391610664565b8101039060025afa1561050a576104549160005191610442565b610c3a565b346103ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad5767ffffffffffffffff6004358181116103ad5761055f903690600401610338565b906024359081116103ad576105c69161057e6020923690600401610338565b9082815191012060405193849283927f1626ba7e0000000000000000000000000000000000000000000000000000000084526004840152604060248401526044830190610687565b0381305afa90811561050a57600091610607575b6040517fffffffff0000000000000000000000000000000000000000000000000000000083168152602090f35b6020813d60201161065c575b81610620602093836102f7565b8101031261028457517fffffffff00000000000000000000000000000000000000000000000000000000811681036102845790506104b16105da565b3d9150610613565b60005b8381106106775750506000910152565b8181015183820152602001610667565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936106c381518092818752878088019101610664565b0116010190565b346103ad5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103ad576104b1610704610d4d565b60405191829160208352602061072582516040838701526060860190610687565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152610687565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156103ad570180359067ffffffffffffffff82116103ad576020019181360383136103ad57565b90600182811c921680156107f1575b60208310146107c257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f16916107b7565b601f8111610807575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906020601f850160051c83019410610882575b601f0160051c01915b82811061087757505050565b81815560010161086b565b9092508290610862565b601f8111610898575050565b6000907fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e75906020601f850160051c83019410610913575b601f0160051c01915b82811061090857505050565b8181556001016108fc565b90925082906108f3565b919067ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b501906109638161095e84546107a8565b61088c565b6000601f82116001146109c15781906109b29394956000926109b6575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b9055565b013590503880610980565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5016000527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216947f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e7591805b878110610a83575083600195969710610a4b575b505050811b019055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610a41565b90926020600181928686013581550194019101610a2d565b610aa58180610757565b67ffffffffffffffff81116102d6577fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50091610ae982610ae485546107a8565b6107fb565b600090601f8311600114610b545782610b529593610b4c9593610b3f936000926109b65750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b90555b6020810190610757565b9061091d565b565b7fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b5006000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08416815b818110610c225750926001928592610b529896610b4c989610610bea575b505050811b019055610b42565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88560031b161c19910135169055388080610bdd565b91936020600181928787013581550195019201610bbf565b6040513d6000823e3d90fd5b604051906000827fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b50191825492610c7b846107a8565b80845293602091600191828116908115610d085750600114610ca7575b505050610b52925003836102f7565b60009081527f95010b9d677bea39165d631a739c4e6ad38464063bbb4ecf05200eb704176e759590935091905b828410610cf05750610b52945050508101602001388080610c98565b85548885018301529485019487945092810192610cd4565b91505060209350610b529592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101388080610c98565b604051610d59816102ba565b60608152606060208092015260405190610d72826102ba565b6040516000817fb52b4718faac153eeb923f05896f8d2ef89fd6e491bd8ca204d7a6a13bb7b500918254610da5816107a8565b9384845260019187600182169182600014610e3f575050600114610de3575b5050610dd2925003826102f7565b8252610ddc610c46565b9082015290565b8692506000527f4b3f22310c8146f402595c61d7e46f9122553466a95fe4748ed6ac998d831294906000915b858310610e27575050610dd293508201013880610dc4565b80548388018501528694508793909201918101610e0f565b91509350610dd29592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880610dc4565b9192805193604085108015611187575b61117d57610e9d92611192565b929015611175576000818401917fff00000000000000000000000000000000000000000000000000000000000000917f310000000000000000000000000000000000000000000000000000000000000083610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee8701517fff000000000000000000000000000000000000000000000000000000000000001690565b16036110ac57506034917e3031300d060960864801650304020105000420000000000000000000000000927fffffffffffffffffffffffffffffffffffffffff000000000000000000000000925b039060025b82811061103a575050610feb610fc660208801517fffff0000000000000000000000000000000000000000000000000000000000001690565b7fffff0000000000000000000000000000000000000000000000000000000000001690565b7e01000000000000000000000000000000000000000000000000000000000000149586611028575b505050508261102157505090565b5114919050565b01602001511614925038808080611013565b8161109261106d6020848c0101517fff000000000000000000000000000000000000000000000000000000000000001690565b7fff000000000000000000000000000000000000000000000000000000000000001690565b0361109f57600101610f8d565b5050505050505050600090565b7f2f000000000000000000000000000000000000000000000000000000000000008361111a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08701517fff000000000000000000000000000000000000000000000000000000000000001690565b160361116c57506032917e302f300b060960864801650304020104200000000000000000000000000000927fffffffffffffffffffffffffffffffffffff000000000000000000000000000092610f88565b94505050505090565b505050600090565b5050505050600090565b508251851415610e90565b929061119d83611246565b611226576020906112116080855192875196815191604051998a938885019a8b5260408501528660608501526111db815180928a8888019101610664565b83016111ef825180938a8885019101610664565b0161120282518093898785019101610664565b010360608101885201866102f7565b80859486518160055afa948181520101604052565b5091505060405190611237826102db565b60008252600036813760009190565b6000805b825181101561128e577fff0000000000000000000000000000000000000000000000000000000000000060208285010151166112885760010161124a565b50905090565b50505060019056fea2646970667358221220f7aee8c72c73b1898fa519dfbcecd53b3ab7dfe55e1301abd08acef723ca118d64736f6c63430008180033",
    sourceMap:
      "251:1324:1:-:0;;;;;;;536:15;;;;-1:-1:-1;;;;;536:15:1;;;;;;;;;;;;;;;;;;;;;509:42;;251:1324;;;;;;;;509:42;251:1324;;;;;;;;;;;536:15;251:1324;;;536:15;251:1324;;;;;536:15;251:1324;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60406080815260048036101561001457600080fd5b600091823560e01c80634c76f8271461028657635d24297e1461003657600080fd5b3461027f57602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102835767ffffffffffffffff833581811161027f57610086903690860161046f565b9173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000006e5af43d82803e903d91602b57fd5bf37fffffffffffffffffffffffffffffffffff0000000000000000000000000000006100f78761058e565b92763d602d80600a3d3981f3363d3d373d3d3d363d7300000062ffffff8260881c1617865260781b161788526037600984f51694851561025857853b15610254578451927f0b53b9e800000000000000000000000000000000000000000000000000000000845282848061016d88868301610538565b0381838b5af1801561024a5761020b575b50505050815181601f80876101d781806101a0889951898151938492016104d2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095869101168701950151858151938492016104d2565b0116010390207fa908d537697a6fe8b02e8102cd20b68071a741fcabf7a3fd0ee036b5a0bd0924848351858152a251908152f35b831161021e57505082523880808061017e565b9060416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b86513d85823e3d90fd5b5080fd5b84517fc2f868f4000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b80fd5b50903461027f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027f5780359067ffffffffffffffff8211610381576102d49136910161046f565b916024359273ffffffffffffffffffffffffffffffffffffffff9182851685036102835750604360209461030960559361058e565b85519160388301526f5af43d82803e903d91602b57fd5bf3ff6024830152847f0000000000000000000000000000000000000000000000000000000000000000166014830152733d602d80600a3d3981f3363d3d373d3d3d363d73825260588201526037600c82012060788201520120915191168152f35b8380fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103c657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f8201121561046a5780359067ffffffffffffffff82116103c6576040519261044860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610385565b8284526020838301011161046a57816000926020809301838601378301015290565b600080fd5b91909160408184031261046a57604080519167ffffffffffffffff918301828111848210176103c6576040528294813583811161046a57816104b29184016103f5565b8452602082013592831161046a576020926104cd92016103f5565b910152565b60005b8381106104e55750506000910152565b81810151838201526020016104d5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610531815180928187528780880191016104d2565b0116010190565b9061058b91602081526020610558835160408385015260608401906104f5565b9201519060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828503019101526104f5565b90565b6040516105cf816105a3602082019485610538565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610385565b5190209056fea2646970667358221220ae187b5f7f00be66a9748fcdc709e8e6bebefb822848abcc8dbdf245172fd8e664736f6c63430008180033",
    sourceMap:
      "251:1324:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1242:24;251:1324;1242:24;2364:565:31;;1281:12:1;;;:::i;:::-;2364:565:31;;;;;;;;;;;;;;;;;;;;251:1324:1;2942:22:31;;;2938:86;;1313:34:1;;;;;251:1324;;1313:34;251:1324;1313:34;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;251:1324;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;1362:30;251:1324;;;;;;1362:30;251:1324;;;;;1313:34;251:1324;;;;;;;;1313:34;;;;;;251:1324;;;;;;;;;;1313:34;251:1324;;;;;;;;;1313:34;251:1324;;;2938:86:31;251:1324:1;;2987:26:31;;;;251:1324:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;926:12;3358:456:31;251:1324:1;926:12;;3358:456:31;926:12:1;;:::i;:::-;3358:456:31;;;;;;;;251:1324:1;3358:456:31;;;883:24:1;;251:1324;3358:456:31;;;;;;;;;;;;;;;;;;;;;;251:1324:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;251:1324:1;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;251:1324:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;-1:-1:-1;;251:1324:1;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;:::o;1427:146::-;251:1324;;1548:17;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;251:1324;1538:28;;1427:146;:::o",
    linkReferences: {},
    immutableReferences: {
      "184": [
        { start: 158, length: 32 },
        { start: 810, length: 32 },
      ],
    },
  },
  methodIdentifiers: {
    "createDeterministic((bytes,bytes))": "5d24297e",
    "predictDeterministicAddress((bytes,bytes),address)": "4c76f827",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC1167FailedCreateClone","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"indexed":true,"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"},{"indexed":false,"internalType":"address","name":"signer","type":"address"}],"name":"RSASignerCreated","type":"event"},{"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"}],"name":"createDeterministic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"},{"internalType":"address","name":"deployer","type":"address"}],"name":"predictDeterministicAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"errors":{"ERC1167FailedCreateClone()":[{"details":"A clone instance deployment failed."}]},"kind":"dev","methods":{},"title":"RSASignerFactory - A factory contract to deploy RSASigner clones.","version":1},"userdoc":{"events":{"RSASignerCreated((bytes,bytes),address)":{"notice":"Emitted when a new RSASigner clone is created."}},"kind":"user","methods":{"createDeterministic((bytes,bytes))":{"notice":"Creates a new RSASigner clone using the public key as salt."},"predictDeterministicAddress((bytes,bytes),address)":{"notice":"Predicts the address of an RSASigner clone using the public key as salt."}},"version":1}},"settings":{"compilationTarget":{"contracts/src/RSASignerFactory.sol":"RSASignerFactory"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts-upgradeable/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":createx/=lib/createx/src/",":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/createx/lib/openzeppelin-contracts/contracts/",":solady/=lib/createx/lib/solady/",":~/=contracts/src/"],"viaIR":true},"sources":{"contracts/src/RSASigner.sol":{"keccak256":"0x37a4a0b3ad271b19c6265b3f78961ff5bedcccd96355b9b981f228910e7e670c","license":"MIT","urls":["bzz-raw://b21465a5f236e44245261cebe3e2b5d99ba5d06b9b7c659ae7b855c96e25bd75","dweb:/ipfs/QmbehEVMH4d1u2JAgAKapKu7oVSu6Esw2nvbQsL5bBmcLg"]},"contracts/src/RSASignerFactory.sol":{"keccak256":"0xe2c585e0d3e9fe9e977f6c6b54b7d1e839ca871fc36470350e35caf95d1e8f3c","license":"UNLICENSED","urls":["bzz-raw://bfd63e0749d39f0e01661394325b56ca5e41f6b72393e68f1cdda5abd58f3fcd","dweb:/ipfs/QmUvvacZxCWaKbvT8aKSFYwXTFppiWFrK2fBPutez6tdhb"]},"contracts/src/unreleased/RSA.sol":{"keccak256":"0xdb126a879c865fdbdc6b78a8fe7c239a8953b9c4d8064ae7274d31bd6bfd9dc3","license":"MIT","urls":["bzz-raw://ba56b353f453c7ae0a18ec81e07900c754affeebdd2ac6eaae5e3c154e2a6668","dweb:/ipfs/QmYeDoXasswhHgPH5ZErmWtsxA49enaXNwsaXcyV2EUXdg"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol":{"keccak256":"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39","license":"MIT","urls":["bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743","dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"]},"lib/openzeppelin-contracts/contracts/proxy/Clones.sol":{"keccak256":"0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155","license":"MIT","urls":["bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b","dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX"]},"lib/openzeppelin-contracts/contracts/proxy/utils/Initializable.sol":{"keccak256":"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b","license":"MIT","urls":["bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609","dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.24+commit.e11b9ed9" },
    language: "Solidity",
    output: {
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], type: "error", name: "ERC1167FailedCreateClone" },
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
              indexed: true,
            },
            {
              internalType: "address",
              name: "signer",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "RSASignerCreated",
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
          name: "createDeterministic",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
            { internalType: "address", name: "deployer", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
          name: "predictDeterministicAddress",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
      ],
      devdoc: { kind: "dev", methods: {}, version: 1 },
      userdoc: {
        kind: "user",
        methods: {
          "createDeterministic((bytes,bytes))": {
            notice:
              "Creates a new RSASigner clone using the public key as salt.",
          },
          "predictDeterministicAddress((bytes,bytes),address)": {
            notice:
              "Predicts the address of an RSASigner clone using the public key as salt.",
          },
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
      compilationTarget: {
        "contracts/src/RSASignerFactory.sol": "RSASignerFactory",
      },
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
      "contracts/src/RSASignerFactory.sol": {
        keccak256:
          "0xe2c585e0d3e9fe9e977f6c6b54b7d1e839ca871fc36470350e35caf95d1e8f3c",
        urls: [
          "bzz-raw://bfd63e0749d39f0e01661394325b56ca5e41f6b72393e68f1cdda5abd58f3fcd",
          "dweb:/ipfs/QmUvvacZxCWaKbvT8aKSFYwXTFppiWFrK2fBPutez6tdhb",
        ],
        license: "UNLICENSED",
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
      "lib/openzeppelin-contracts/contracts/proxy/Clones.sol": {
        keccak256:
          "0xd18408af8a91bedb3d56343eeb9b30eb852e6dea93a5e2d5c6db9ca4cb905155",
        urls: [
          "bzz-raw://061475b7302a732dc598907790f407417551c2b13e89daa57b3698489ef5484b",
          "dweb:/ipfs/QmdX5qmk3VSniSErFuD4aVawQxUi2MuUbP7spPcHddPfcX",
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
  id: 1,
} as const;
