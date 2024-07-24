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
        { name: "salt", type: "bytes32", internalType: "bytes32" },
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
        { name: "salt", type: "bytes32", internalType: "bytes32" },
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
  ],
  bytecode: {
    object:
      "0x60a08060405234607557610afa8181016001600160401b03811183821017605f5782916106ab833903906000f08015605357608052604051610630908161007b82396080518181816103d601526104b70152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806368f588ee146100b25763a3bce2021461003257600080fd5b346100ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ad5760043567ffffffffffffffff81116100ad5761008f6100866020923690600401610217565b6024359061044f565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b600080fd5b346100ad5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ad5760043567ffffffffffffffff81116100ad57610101903690600401610217565b6044359073ffffffffffffffffffffffffffffffffffffffff821682036100ad5760209161008f9160243590610345565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761017357604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156100ad5780359067ffffffffffffffff821161017357604051926101f560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610132565b828452602083830101116100ad57816000926020809301838601378301015290565b91906040838203126100ad57604051906040820182811067ffffffffffffffff821117610173576040528193803567ffffffffffffffff81116100ad57826102609183016101a2565b835260208101359167ffffffffffffffff83116100ad5760209261028492016101a2565b910152565b60005b83811061029c5750506000910152565b818101518382015260200161028c565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936102e881518092818752878088019101610289565b0116010190565b906103429160208152602061030f835160408385015260608401906102ac565b9201519060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828503019101526102ac565b90565b61038a61035e91939293604051928391602083016102ef565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610132565b6040519080519061ffd282113d3d3e60005b8281106104395750506037600c916e5af43d82803e903d91602b57fd5bf3602385015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660148501528060881b7361002d3d81600a3d39f3363d3d373d3d3d363d730184520191012060ff60005360355260601b6001526015526055600020600060355290565b806020809284010151604382870101520161039c565b61045a308383610345565b91823b6105f557604051600b60208201916104798161035e87866102ef565b6040519051809381604384019160045afa506e5af43d82803e903d91602b57fd5bf3602382015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660148201528260881b74fe61002d3d81600a3d39f3363d3d373d3d3d363d7301815261ffd360378401931001016000f59081156105e75773ffffffffffffffffffffffffffffffffffffffff83811692168290036105b85760207fa908d537697a6fe8b02e8102cd20b68071a741fcabf7a3fd0ee036b5a0bd092491604051817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f856105a7818484826105948a9b518b815193849201610289565b0116870195015185815193849201610289565b01160103902092604051908152a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b63301164256000526004601cfd5b50509056fea2646970667358221220831536bf65e6400935540b53b5e7f909e96699c77686de43f8e5ee6c0a444cd364736f6c634300081a003360808060405234601557610adf908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80631626ba7e1461023d57806320c13b0b146100d3576363ffab311461003d57600080fd5b346100ce5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce576100ca610077610540565b604051918291602083526020610098825160408387015260608601906104b8565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526104b8565b0390f35b600080fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043567ffffffffffffffff81116100ce5761012290369060040161044e565b60243567ffffffffffffffff81116100ce5761019091610148602092369060040161044e565b9082815191012060405193849283927f1626ba7e00000000000000000000000000000000000000000000000000000000845260048401526040602484015260448301906104b8565b0381305afa908115610231576000916101d1575b6020827fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b6020813d602011610229575b816101ea602093836103d3565b8101031261022557517fffffffff000000000000000000000000000000000000000000000000000000008116810361022557905060206101a4565b5080fd5b3d91506101dd565b6040513d6000823e3d90fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043560243567ffffffffffffffff81116100ce5761028f90369060040161044e565b8190610299610540565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f82840101519101825261033b575b6102df93506020825192015192610644565b156103325760207f20c13b0b000000000000000000000000000000000000000000000000000000005b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b60206000610308565b915091600061036e60209260405184810191825284815261035d6040826103d3565b604051928392839251928391610495565b8101039060025afa15610231576102df91600051916102cd565b6040810190811067ffffffffffffffff8211176103a457604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103a457604052565b67ffffffffffffffff81116103a457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156100ce5780359061046582610414565b9261047360405194856103d3565b828452602083830101116100ce57816000926020809301838601378301015290565b60005b8381106104a85750506000910152565b8181015183820152602001610498565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936104f481518092818752878088019101610495565b0116010190565b81601f820112156100ce57805161051181610414565b9261051f60405194856103d3565b818452602082840101116100ce5761053d9160208085019101610495565b90565b6060602060405161055081610388565b8281520152604051303b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd3820181527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3602082019201602d83303c8080510190604082019283604052815182019160208301916020828503126100ce575167ffffffffffffffff81116100ce570191604090839003126100ce576105f484610388565b602082015167ffffffffffffffff81116100ce57816020610617928501016104fb565b845260408201519067ffffffffffffffff82116100ce57602061063e9260609401016104fb565b91015290565b919092805191604083108015610954575b61094a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083019460005b8481106108fd575b506106959394955061095f565b9190156108ea57600090808301917f31000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee850151161460001461082757506034907e3031300d060960864801650304020105000420000000000000000000000000917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000919594955b0360025b8181106107df57507fffff0000000000000000000000000000000000000000000000000000000000006020870151167e010000000000000000000000000000000000000000000000000000000000001495866107cd575b50505050826107c657505090565b5114919050565b016020015116149250388080806107b8565b7fff00000000000000000000000000000000000000000000000000000000000000806020838a999a010151160361081b57600101959495610761565b50505050505050600090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08301517fff00000000000000000000000000000000000000000000000000000000000000167f2f00000000000000000000000000000000000000000000000000000000000000036108e257506032907e302f300b060960864801650304020104200000000000000000000000000000917fffffffffffffffffffffffffffffffffffff00000000000000000000000000009195949561075d565b935050505090565b634e487b7160005260126020526024601cfd5b86811087821802871860208184010151602082870101519081811060001461092757505050610688565b119088908215610940575b505061081b57602001610680565b1490508738610932565b5050505050600090565b508451831415610655565b929061096a83610a58565b610a11576020906109fc845191838751966109cf60808451946040519b8c968688019c8d5260408801528860608801526109ac8151809288868b019101610495565b86016109c082518093888685019101610495565b01019182815194859201610495565b01037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018752866103d3565b80859486518160055afa948181520101604052565b50604051925090506020610a2581846103d3565b600083527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810190369084013760009190565b60005b8151811015610aa25760007fff000000000000000000000000000000000000000000000000000000000000006020838501015116610a9c5750600101610a5b565b91505090565b505060019056fea264697066735822122023ece99768f64f5539930121b95a3793b2d764f5cc9a24612cc2dcb24953c6b664736f6c634300081a0033",
    sourceMap:
      "285:1746:1:-:0;;;;;;;570:15;;;;-1:-1:-1;;;;;570:15:1;;;;;;;;;;;;;;;;;;;;;543:42;;285:1746;;;;;;;;543:42;285:1746;;;;;;;;;;;570:15;285:1746;;;570:15;285:1746;;;;;570:15;285:1746;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052600436101561001257600080fd5b60003560e01c806368f588ee146100b25763a3bce2021461003257600080fd5b346100ad5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ad5760043567ffffffffffffffff81116100ad5761008f6100866020923690600401610217565b6024359061044f565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b600080fd5b346100ad5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ad5760043567ffffffffffffffff81116100ad57610101903690600401610217565b6044359073ffffffffffffffffffffffffffffffffffffffff821682036100ad5760209161008f9160243590610345565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761017357604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156100ad5780359067ffffffffffffffff821161017357604051926101f560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610132565b828452602083830101116100ad57816000926020809301838601378301015290565b91906040838203126100ad57604051906040820182811067ffffffffffffffff821117610173576040528193803567ffffffffffffffff81116100ad57826102609183016101a2565b835260208101359167ffffffffffffffff83116100ad5760209261028492016101a2565b910152565b60005b83811061029c5750506000910152565b818101518382015260200161028c565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936102e881518092818752878088019101610289565b0116010190565b906103429160208152602061030f835160408385015260608401906102ac565b9201519060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828503019101526102ac565b90565b61038a61035e91939293604051928391602083016102ef565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610132565b6040519080519061ffd282113d3d3e60005b8281106104395750506037600c916e5af43d82803e903d91602b57fd5bf3602385015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660148501528060881b7361002d3d81600a3d39f3363d3d373d3d3d363d730184520191012060ff60005360355260601b6001526015526055600020600060355290565b806020809284010151604382870101520161039c565b61045a308383610345565b91823b6105f557604051600b60208201916104798161035e87866102ef565b6040519051809381604384019160045afa506e5af43d82803e903d91602b57fd5bf3602382015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660148201528260881b74fe61002d3d81600a3d39f3363d3d373d3d3d363d7301815261ffd360378401931001016000f59081156105e75773ffffffffffffffffffffffffffffffffffffffff83811692168290036105b85760207fa908d537697a6fe8b02e8102cd20b68071a741fcabf7a3fd0ee036b5a0bd092491604051817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f856105a7818484826105948a9b518b815193849201610289565b0116870195015185815193849201610289565b01160103902092604051908152a290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b63301164256000526004601cfd5b50509056fea2646970667358221220831536bf65e6400935540b53b5e7f909e96699c77686de43f8e5ee6c0a444cd364736f6c634300081a0033",
    sourceMap:
      "285:1746:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;285:1746:1;;;;;-1:-1:-1;285:1746:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;285:1746:1;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;-1:-1:-1;;285:1746:1;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;:::o;687:432::-;1033:17;;687:432;;;;285:1746;;1033:17;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;285:1746;31565:665:33;;;;;;;;;;;-1:-1:-1;31565:665:33;;;;;;;;;;;;;;;;285:1746:1;893:24;285:1746;31565:665:33;;;;;;;;;;;;;;;105949:366;-1:-1:-1;105949:366:33;;;;;;;;;;-1:-1:-1;105949:366:33;-1:-1:-1;105949:366:33;;687:432:1;:::o;31565:665:33:-;;1033:17:1;31565:665:33;;;;;;;;;;;;;;;1214:619:1;1432:55;1481:4;1432:55;;;:::i;:::-;1501:17;;;1497:84;;285:1746;;29393:693:33;1679:17:1;;;;;;;;;;:::i;:::-;285:1746;29393:693:33;;;;;;;;;;;;;;;;;;;285:1746:1;1381:24;285:1746;29393:693:33;;;;;;;;;;;;;;;;;;;285:1746:1;29393:693:33;;;;;;285:1746:1;;;;;;1741:17;;;285:1746;;1679:17;1774:30;285:1746;;;;1679:17;285:1746;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1774:30;1214:619;:::o;285:1746::-;;;;;29393:693:33;285:1746:1;;;;29393:693:33;;285:1746:1;29393:693:33;;;;1497:84:1;1538:12;;;:::o",
    linkReferences: {},
    immutableReferences: {
      "151": [
        { start: 982, length: 32 },
        { start: 1207, length: 32 },
      ],
    },
  },
  methodIdentifiers: {
    "createDeterministic((bytes,bytes),bytes32)": "a3bce202",
    "predictDeterministicAddress((bytes,bytes),bytes32,address)": "68f588ee",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.26+commit.8a97fa7a"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"indexed":true,"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"},{"indexed":false,"internalType":"address","name":"signer","type":"address"}],"name":"RSASignerCreated","type":"event"},{"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"createDeterministic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"owner","type":"tuple"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"address","name":"deployer","type":"address"}],"name":"predictDeterministicAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Ernesto Garc\\u00eda","kind":"dev","methods":{},"title":"RSASignerFactory - A factory contract to deploy RSASigner clones with immutable public key.","version":1},"userdoc":{"events":{"RSASignerCreated((bytes,bytes),address)":{"notice":"Emitted when a new RSASigner clone is created."}},"kind":"user","methods":{"createDeterministic((bytes,bytes),bytes32)":{"notice":"Idempotently creates a new RSASigner clone using the public key as salt."},"predictDeterministicAddress((bytes,bytes),bytes32,address)":{"notice":"Predicts the address of an RSASigner clone using the public key as salt."}},"version":1}},"settings":{"compilationTarget":{"contracts/src/RSASignerFactory.sol":"RSASignerFactory"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts-upgradeable/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":createx/=lib/createx/src/",":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/createx/lib/openzeppelin-contracts/contracts/",":solady/=lib/solady/src/",":~/=contracts/src/"],"viaIR":true},"sources":{"contracts/src/RSASigner.sol":{"keccak256":"0xa68c53c44acf40ad5ebdb7a3e40042f9be4dd00810c3158c242ad71b7f830136","license":"MIT","urls":["bzz-raw://a706a8142a11e2c7ddaadadb271e74be3c4cabf09e145a1a4b647d6dd81dc592","dweb:/ipfs/QmR3TCvF4jKQ8Mq79s5mLVxrNBgFkH37pCzjgzE99YPDRZ"]},"contracts/src/RSASignerFactory.sol":{"keccak256":"0x8728dd2ce74d990c17a3d186aa0d16e4509f45e1a7feb04add66f2181595fb60","license":"MIT","urls":["bzz-raw://408aea6d5343916e3975abb445bad6fca1a4f4d31e7ea4b5aae9e796563a0d26","dweb:/ipfs/QmVqgqBTVrcaQsiYGXSmxst9Wc1YTEXXgS1zxbqkQUJ7Jo"]},"contracts/src/unreleased/Panic.sol":{"keccak256":"0x8c838a78ba17462409ec8a0c5effa22ececdda96918e1081846b15e80241d49e","license":"MIT","urls":["bzz-raw://ce29360d37da9ac5188aa481e6863a744e3423a6eb084e64a73960ba62a2ea28","dweb:/ipfs/QmSAeB5zdQ7yjVfvprDvyiCrcMULqaHYCKqwy4tdm1ZS4m"]},"contracts/src/unreleased/cryptography/RSA.sol":{"keccak256":"0xd38c7288cd3a3f5367bc3213a6eb2055db731f6465abf0dec56eda4c22f445d2","license":"MIT","urls":["bzz-raw://f676cfd4021f42d4dee8f4fef96296dd1e0cf89565940d58427b9b4e3eb8d274","dweb:/ipfs/QmNnWyTthmW24H4cno5mfCTFyigBZBFtDUppyV7FbXV7TM"]},"contracts/src/unreleased/math/Math.sol":{"keccak256":"0x86e1dcb6c35814c9fd277aef5b5dce84c382003f975fc59bcd654e8e587cba2e","license":"MIT","urls":["bzz-raw://1a713c5c64fe592589faf8fcb060c506b65eec9fd25538e1716bdff0a32f5367","dweb:/ipfs/QmS9tTjdMKvdCZJX5U24ig4AqJVNeQtnEc834ZHQXbasAD"]},"contracts/src/unreleased/math/SafeCast.sol":{"keccak256":"0x592af6bc95467e4f90f8a1496bf89847718086842dc8f597b6c0bdc57e8b5cee","license":"MIT","urls":["bzz-raw://f07fb493ed6ed390a3fe829c8a1ae27504d97693c0772ca79e90657e858c4959","dweb:/ipfs/QmS3jhDuN1RxzNfQGwiDAoYb2n64YzR75wdtWuxLjXQxGu"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol":{"keccak256":"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39","license":"MIT","urls":["bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743","dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"]},"lib/solady/src/utils/LibClone.sol":{"keccak256":"0x87e7107cd0dd0b0a4842f705bde584e8aa5149b678654d3b438e6683b1b90314","license":"MIT","urls":["bzz-raw://f33b424b3d85944e32c9dace9939f9faa4d30ef7f2d2b0b9f8238f956c8ed89d","dweb:/ipfs/QmYpf82Ufq9bEr3vaz7HYSkrjB1pryYYFP4pALqnGbhUgi"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.26+commit.8a97fa7a" },
    language: "Solidity",
    output: {
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
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
            { internalType: "bytes32", name: "salt", type: "bytes32" },
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
            { internalType: "bytes32", name: "salt", type: "bytes32" },
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
          "createDeterministic((bytes,bytes),bytes32)": {
            notice:
              "Idempotently creates a new RSASigner clone using the public key as salt.",
          },
          "predictDeterministicAddress((bytes,bytes),bytes32,address)": {
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
        "solady/=lib/solady/src/",
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
          "0xa68c53c44acf40ad5ebdb7a3e40042f9be4dd00810c3158c242ad71b7f830136",
        urls: [
          "bzz-raw://a706a8142a11e2c7ddaadadb271e74be3c4cabf09e145a1a4b647d6dd81dc592",
          "dweb:/ipfs/QmR3TCvF4jKQ8Mq79s5mLVxrNBgFkH37pCzjgzE99YPDRZ",
        ],
        license: "MIT",
      },
      "contracts/src/RSASignerFactory.sol": {
        keccak256:
          "0x8728dd2ce74d990c17a3d186aa0d16e4509f45e1a7feb04add66f2181595fb60",
        urls: [
          "bzz-raw://408aea6d5343916e3975abb445bad6fca1a4f4d31e7ea4b5aae9e796563a0d26",
          "dweb:/ipfs/QmVqgqBTVrcaQsiYGXSmxst9Wc1YTEXXgS1zxbqkQUJ7Jo",
        ],
        license: "MIT",
      },
      "contracts/src/unreleased/Panic.sol": {
        keccak256:
          "0x8c838a78ba17462409ec8a0c5effa22ececdda96918e1081846b15e80241d49e",
        urls: [
          "bzz-raw://ce29360d37da9ac5188aa481e6863a744e3423a6eb084e64a73960ba62a2ea28",
          "dweb:/ipfs/QmSAeB5zdQ7yjVfvprDvyiCrcMULqaHYCKqwy4tdm1ZS4m",
        ],
        license: "MIT",
      },
      "contracts/src/unreleased/cryptography/RSA.sol": {
        keccak256:
          "0xd38c7288cd3a3f5367bc3213a6eb2055db731f6465abf0dec56eda4c22f445d2",
        urls: [
          "bzz-raw://f676cfd4021f42d4dee8f4fef96296dd1e0cf89565940d58427b9b4e3eb8d274",
          "dweb:/ipfs/QmNnWyTthmW24H4cno5mfCTFyigBZBFtDUppyV7FbXV7TM",
        ],
        license: "MIT",
      },
      "contracts/src/unreleased/math/Math.sol": {
        keccak256:
          "0x86e1dcb6c35814c9fd277aef5b5dce84c382003f975fc59bcd654e8e587cba2e",
        urls: [
          "bzz-raw://1a713c5c64fe592589faf8fcb060c506b65eec9fd25538e1716bdff0a32f5367",
          "dweb:/ipfs/QmS9tTjdMKvdCZJX5U24ig4AqJVNeQtnEc834ZHQXbasAD",
        ],
        license: "MIT",
      },
      "contracts/src/unreleased/math/SafeCast.sol": {
        keccak256:
          "0x592af6bc95467e4f90f8a1496bf89847718086842dc8f597b6c0bdc57e8b5cee",
        urls: [
          "bzz-raw://f07fb493ed6ed390a3fe829c8a1ae27504d97693c0772ca79e90657e858c4959",
          "dweb:/ipfs/QmS3jhDuN1RxzNfQGwiDAoYb2n64YzR75wdtWuxLjXQxGu",
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
      "lib/solady/src/utils/LibClone.sol": {
        keccak256:
          "0x87e7107cd0dd0b0a4842f705bde584e8aa5149b678654d3b438e6683b1b90314",
        urls: [
          "bzz-raw://f33b424b3d85944e32c9dace9939f9faa4d30ef7f2d2b0b9f8238f956c8ed89d",
          "dweb:/ipfs/QmYpf82Ufq9bEr3vaz7HYSkrjB1pryYYFP4pALqnGbhUgi",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 1,
} as const;
