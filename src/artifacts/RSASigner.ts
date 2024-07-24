export default {
  abi: [
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
  ],
  bytecode: {
    object:
      "0x60808060405234601557610adf908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80631626ba7e1461023d57806320c13b0b146100d3576363ffab311461003d57600080fd5b346100ce5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce576100ca610077610540565b604051918291602083526020610098825160408387015260608601906104b8565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526104b8565b0390f35b600080fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043567ffffffffffffffff81116100ce5761012290369060040161044e565b60243567ffffffffffffffff81116100ce5761019091610148602092369060040161044e565b9082815191012060405193849283927f1626ba7e00000000000000000000000000000000000000000000000000000000845260048401526040602484015260448301906104b8565b0381305afa908115610231576000916101d1575b6020827fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b6020813d602011610229575b816101ea602093836103d3565b8101031261022557517fffffffff000000000000000000000000000000000000000000000000000000008116810361022557905060206101a4565b5080fd5b3d91506101dd565b6040513d6000823e3d90fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043560243567ffffffffffffffff81116100ce5761028f90369060040161044e565b8190610299610540565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f82840101519101825261033b575b6102df93506020825192015192610644565b156103325760207f20c13b0b000000000000000000000000000000000000000000000000000000005b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b60206000610308565b915091600061036e60209260405184810191825284815261035d6040826103d3565b604051928392839251928391610495565b8101039060025afa15610231576102df91600051916102cd565b6040810190811067ffffffffffffffff8211176103a457604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103a457604052565b67ffffffffffffffff81116103a457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156100ce5780359061046582610414565b9261047360405194856103d3565b828452602083830101116100ce57816000926020809301838601378301015290565b60005b8381106104a85750506000910152565b8181015183820152602001610498565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936104f481518092818752878088019101610495565b0116010190565b81601f820112156100ce57805161051181610414565b9261051f60405194856103d3565b818452602082840101116100ce5761053d9160208085019101610495565b90565b6060602060405161055081610388565b8281520152604051303b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd3820181527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3602082019201602d83303c8080510190604082019283604052815182019160208301916020828503126100ce575167ffffffffffffffff81116100ce570191604090839003126100ce576105f484610388565b602082015167ffffffffffffffff81116100ce57816020610617928501016104fb565b845260408201519067ffffffffffffffff82116100ce57602061063e9260609401016104fb565b91015290565b919092805191604083108015610954575b61094a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083019460005b8481106108fd575b506106959394955061095f565b9190156108ea57600090808301917f31000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee850151161460001461082757506034907e3031300d060960864801650304020105000420000000000000000000000000917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000919594955b0360025b8181106107df57507fffff0000000000000000000000000000000000000000000000000000000000006020870151167e010000000000000000000000000000000000000000000000000000000000001495866107cd575b50505050826107c657505090565b5114919050565b016020015116149250388080806107b8565b7fff00000000000000000000000000000000000000000000000000000000000000806020838a999a010151160361081b57600101959495610761565b50505050505050600090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08301517fff00000000000000000000000000000000000000000000000000000000000000167f2f00000000000000000000000000000000000000000000000000000000000000036108e257506032907e302f300b060960864801650304020104200000000000000000000000000000917fffffffffffffffffffffffffffffffffffff00000000000000000000000000009195949561075d565b935050505090565b634e487b7160005260126020526024601cfd5b86811087821802871860208184010151602082870101519081811060001461092757505050610688565b119088908215610940575b505061081b57602001610680565b1490508738610932565b5050505050600090565b508451831415610655565b929061096a83610a58565b610a11576020906109fc845191838751966109cf60808451946040519b8c968688019c8d5260408801528860608801526109ac8151809288868b019101610495565b86016109c082518093888685019101610495565b01019182815194859201610495565b01037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018752866103d3565b80859486518160055afa948181520101604052565b50604051925090506020610a2581846103d3565b600083527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810190369084013760009190565b60005b8151811015610aa25760007fff000000000000000000000000000000000000000000000000000000000000006020838501015116610a9c5750600101610a5b565b91505090565b505060019056fea264697066735822122023ece99768f64f5539930121b95a3793b2d764f5cc9a24612cc2dcb24953c6b664736f6c634300081a0033",
    sourceMap: "965:3547:0:-:0;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052600436101561001257600080fd5b60003560e01c80631626ba7e1461023d57806320c13b0b146100d3576363ffab311461003d57600080fd5b346100ce5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce576100ca610077610540565b604051918291602083526020610098825160408387015260608601906104b8565b9101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526104b8565b0390f35b600080fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043567ffffffffffffffff81116100ce5761012290369060040161044e565b60243567ffffffffffffffff81116100ce5761019091610148602092369060040161044e565b9082815191012060405193849283927f1626ba7e00000000000000000000000000000000000000000000000000000000845260048401526040602484015260448301906104b8565b0381305afa908115610231576000916101d1575b6020827fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b6020813d602011610229575b816101ea602093836103d3565b8101031261022557517fffffffff000000000000000000000000000000000000000000000000000000008116810361022557905060206101a4565b5080fd5b3d91506101dd565b6040513d6000823e3d90fd5b346100ce5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ce5760043560243567ffffffffffffffff81116100ce5761028f90369060040161044e565b8190610299610540565b9080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601f82840101519101825261033b575b6102df93506020825192015192610644565b156103325760207f20c13b0b000000000000000000000000000000000000000000000000000000005b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b60206000610308565b915091600061036e60209260405184810191825284815261035d6040826103d3565b604051928392839251928391610495565b8101039060025afa15610231576102df91600051916102cd565b6040810190811067ffffffffffffffff8211176103a457604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103a457604052565b67ffffffffffffffff81116103a457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156100ce5780359061046582610414565b9261047360405194856103d3565b828452602083830101116100ce57816000926020809301838601378301015290565b60005b8381106104a85750506000910152565b8181015183820152602001610498565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936104f481518092818752878088019101610495565b0116010190565b81601f820112156100ce57805161051181610414565b9261051f60405194856103d3565b818452602082840101116100ce5761053d9160208085019101610495565b90565b6060602060405161055081610388565b8281520152604051303b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd3820181527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3602082019201602d83303c8080510190604082019283604052815182019160208301916020828503126100ce575167ffffffffffffffff81116100ce570191604090839003126100ce576105f484610388565b602082015167ffffffffffffffff81116100ce57816020610617928501016104fb565b845260408201519067ffffffffffffffff82116100ce57602061063e9260609401016104fb565b91015290565b919092805191604083108015610954575b61094a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083019460005b8481106108fd575b506106959394955061095f565b9190156108ea57600090808301917f31000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee850151161460001461082757506034907e3031300d060960864801650304020105000420000000000000000000000000917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000919594955b0360025b8181106107df57507fffff0000000000000000000000000000000000000000000000000000000000006020870151167e010000000000000000000000000000000000000000000000000000000000001495866107cd575b50505050826107c657505090565b5114919050565b016020015116149250388080806107b8565b7fff00000000000000000000000000000000000000000000000000000000000000806020838a999a010151160361081b57600101959495610761565b50505050505050600090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08301517fff00000000000000000000000000000000000000000000000000000000000000167f2f00000000000000000000000000000000000000000000000000000000000000036108e257506032907e302f300b060960864801650304020104200000000000000000000000000000917fffffffffffffffffffffffffffffffffffff00000000000000000000000000009195949561075d565b935050505090565b634e487b7160005260126020526024601cfd5b86811087821802871860208184010151602082870101519081811060001461092757505050610688565b119088908215610940575b505061081b57602001610680565b1490508738610932565b5050505050600090565b508451831415610655565b929061096a83610a58565b610a11576020906109fc845191838751966109cf60808451946040519b8c968688019c8d5260408801528860608801526109ac8151809288868b019101610495565b86016109c082518093888685019101610495565b01019182815194859201610495565b01037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018752866103d3565b80859486518160055afa948181520101604052565b50604051925090506020610a2581846103d3565b600083527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810190369084013760009190565b60005b8151811015610aa25760007fff000000000000000000000000000000000000000000000000000000000000006020838501015116610a9c5750600101610a5b565b91505090565b505060019056fea264697066735822122023ece99768f64f5539930121b95a3793b2d764f5cc9a24612cc2dcb24953c6b664736f6c634300081a0033",
    sourceMap:
      "965:3547:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;3129:16;965:3547;;3107:51;;;;;965:3547;3107:51;;965:3547;3107:51;;965:3547;;;;;;;;;;;:::i;:::-;3107:51;:4;;:51;;;;;;;965:3547;3107:51;;;965:3547;;;;;;;;;;;3107:51;965:3547;3107:51;;965:3547;3107:51;;;;;;965:3547;3107:51;;;:::i;:::-;;;965:3547;;;;;;;;;;;;3107:51;-1:-1:-1;965:3547:0;3107:51;;965:3547;;;;3107:51;;;-1:-1:-1;3107:51:0;;;965:3547;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2695:34;3541:11;;;:::i;:::-;4006:498;;;;;;;;;;;;;;3676:75;;965:3547;3780:67;3815:15;;965:3547;3815:15;;3832:14;;;3780:67;;:::i;:::-;2695:100;;;965:3547;;2695:100;965:3547;;;;;;;;2695:100;965:3547;;2695:100;;3676:75;965:3547;;;;;;;;;3721:18;;;965:3547;;;3721:18;;;;965:3547;3721:18;;:::i;:::-;965:3547;;;;;;;;;;;;:::i;:::-;;;3714:26;;;;;;;;3780:67;3714:26;965:3547;3714:26;3676:75;;;965:3547;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;965:3547:0;;;;;-1:-1:-1;965:3547:0;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;965:3547:0;;;;;;;;;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;;965:3547:0;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::o;:::-;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;1276:144::-;965:3547;;;;;;;:::i;:::-;;;;;;;33020:293:33;1393:4:0;33020:293:33;;;;;;;;965:3547:0;33020:293:33;;;;;1393:4:0;;33020:293:33;;;;;;965:3547:0;33020:293:33;;;;965:3547:0;33020:293:33;965:3547:0;;1353:60;;;965:3547;1353:60;;965:3547;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;1276:144;:::o;1910:5285:3:-;;;;965:3547:0;;2188:13:3;2197:4;2188:13;;:122;;;;1910:5285;2167:262;;965:3547:0;;;;2556:1:3;2559:10;;;;;;2539:711;16243:18:4;;;;;;;:::i;:::-;16275:8;;;16271:74;;2556:1:3;4213:12;7631:95;;;;965:3547:0;;7631:95:3;;;;965:3547:0;4672:55:3;4668:1325;965:3547:0;;;4747:13:3;4756:4;5086:75;5095:66;5179:73;5186:66;4668:1325;;;;;965:3547:0;6532:1:3;6535:14;;;;;;7631:95;965:3547:0;2576:4:3;7631:95;;;965:3547:0;;6838:58:3;:190;;;;6515:177;6838:330;;;;;;;6815:353;;1910:5285;:::o;6838:330::-;7631:95;7117:51;;1910:5285;-1:-1:-1;1910:5285:3:o;6838:190::-;7631:95;2576:4;7631:95;;6983:45;6973:55;;-1:-1:-1;6838:190:3;;;;;;6551:3;965:3547:0;7631:95:3;2576:4;7631:95;;;;;;;965:3547:0;6578:45:3;6574:104;;965:3547:0;;6520:13:3;;;;;6574:104;6647:12;;;;;;;2556:1;6647:12;:::o;4668:1325::-;7631:95;;;;965:3547:0;;;5308:55:3;965:3547:0;;5396:13:3;4715:2;5720:75;5729:66;5813:73;5820:66;5287:706;4668:1325;;;;;5287:706;5966:12;;;;;;:::o;16271:74:4:-;1911:119:2;2556:1:3;1911:119:2;1074:4;2576::3;1911:119:2;;;;2571:9:3;3743:5:4;;;3346;;;965:3547:0;3340:42:4;;2576:4:3;7631:95;;;;;2576:4;7631:95;;;;;2770:7;;;;2766:470;2770:7;;;2900:5;;;;;2766:470;2934:7;;;;:29;;;;2766:470;2930:306;;;;2576:4;965:3547:0;2544:13:3;;2934:29;2945:18;;-1:-1:-1;2934:29:3;;;;2167:262;2402:12;;;;;2409:5;2402:12;:::o;2188:122::-;965:3547:0;;;2292:18:3;;;2188:122;;16473:1063:4;;;16642:13;;;:::i;:::-;16638:47;;16810:51;965:3547:0;16810:51:4;965:3547:0;;;;;;;;;;;;;;16810:51:4;;;;;;965:3547:0;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;16810:51:4;;;;;;;;:::i;:::-;16801:60;;16915:615;;;;;;;;;;;;;965:3547:0;16915:615:4;16473:1063::o;16638:47::-;-1:-1:-1;965:3547:0;;;-1:-1:-1;965:3547:0;-1:-1:-1;965:3547:0;;;;;:::i;:::-;;;;;;;;;;;;;;16657:28:4;;:::o;17619:248::-;965:3547:0;17743:3:4;965:3547:0;;17721:20:4;;;;;965:3547:0;;;;;;;;;17762:68:4;;17743:3;965:3547:0;;17706:13:4;;17762:68;17803:12;;;;:::o;17721:20::-;;;965:3547:0;17619:248:4;:::o",
    linkReferences: {},
  },
  methodIdentifiers: {
    "isValidSignature(bytes,bytes)": "20c13b0b",
    "isValidSignature(bytes32,bytes)": "1626ba7e",
    "publicKey()": "63ffab31",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.26+commit.8a97fa7a"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicKey","outputs":[{"components":[{"internalType":"bytes","name":"exponent","type":"bytes"},{"internalType":"bytes","name":"modulus","type":"bytes"}],"internalType":"struct RSASigner.PublicKey","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Ernesto Garc\\u00eda","kind":"dev","methods":{},"title":"Plumaa - An RSA SHA256 PKCS1.5 enabler contract. It allows an RSA public key to have an Ethereum address and sign operations. A notable example of RSA signatures in real-world applications are the government-issued digital certificates. Useful for setting this contract as the owner of a multisig, among other things. It leverages immutable arguments to hold the private key. In this way, ERC-1271 doesn\'t break EIP-7562 rules for storage validation. The public key is stored in the contract\'s runtime code. NOTE: This contract uses a custom signature format with a suffix flag for normalization of keccak256 digests. See `isValidSignature`.","version":1},"userdoc":{"kind":"user","methods":{"isValidSignature(bytes,bytes)":{"notice":"Legacy EIP1271 method to validate a signature. Assumes signature corresponds to the keccak256 digest of the data."},"isValidSignature(bytes32,bytes)":{"notice":"Checks if the provided signature is valid for the sha256 hash. Given the popularity of keccak256 in EVM contracts, most calls to this function will send a keccak256 digest. A custom signature format is used to allow for normalizing the digest before verifying it. Normalizing the digest means that it\'s hashed again with sha256 so it\'s compatible with RSA PKCS1.5 validation. Off-chain signers are not adapted for non-standard digests, so they can be adapted by passing the keccak256 as the message to sign. The custom format is `SSSSSSSSS...SSSSSSSSSSSSSN`, where: - `S` is the PKCS1.5 SHA256 signature (0x01 - 0x..) - `N` is the normalization boolean byte (0x00) (if true, the digest is hashed again with sha256) The setup is cryptographically secure assuming both keccak256 and sha256 are secure cryptographic hashing functions, which is a reasonable assumption given their trust in the Ethereum community for keccak256 and the standardization of sha256 in government certificates."},"publicKey()":{"notice":"Returns the signer\'s public key"}},"version":1}},"settings":{"compilationTarget":{"contracts/src/RSASigner.sol":"RSASigner"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts-upgradeable/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":createx/=lib/createx/src/",":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/createx/lib/openzeppelin-contracts/contracts/",":solady/=lib/solady/src/",":~/=contracts/src/"],"viaIR":true},"sources":{"contracts/src/RSASigner.sol":{"keccak256":"0xa68c53c44acf40ad5ebdb7a3e40042f9be4dd00810c3158c242ad71b7f830136","license":"MIT","urls":["bzz-raw://a706a8142a11e2c7ddaadadb271e74be3c4cabf09e145a1a4b647d6dd81dc592","dweb:/ipfs/QmR3TCvF4jKQ8Mq79s5mLVxrNBgFkH37pCzjgzE99YPDRZ"]},"contracts/src/unreleased/Panic.sol":{"keccak256":"0x8c838a78ba17462409ec8a0c5effa22ececdda96918e1081846b15e80241d49e","license":"MIT","urls":["bzz-raw://ce29360d37da9ac5188aa481e6863a744e3423a6eb084e64a73960ba62a2ea28","dweb:/ipfs/QmSAeB5zdQ7yjVfvprDvyiCrcMULqaHYCKqwy4tdm1ZS4m"]},"contracts/src/unreleased/cryptography/RSA.sol":{"keccak256":"0xd38c7288cd3a3f5367bc3213a6eb2055db731f6465abf0dec56eda4c22f445d2","license":"MIT","urls":["bzz-raw://f676cfd4021f42d4dee8f4fef96296dd1e0cf89565940d58427b9b4e3eb8d274","dweb:/ipfs/QmNnWyTthmW24H4cno5mfCTFyigBZBFtDUppyV7FbXV7TM"]},"contracts/src/unreleased/math/Math.sol":{"keccak256":"0x86e1dcb6c35814c9fd277aef5b5dce84c382003f975fc59bcd654e8e587cba2e","license":"MIT","urls":["bzz-raw://1a713c5c64fe592589faf8fcb060c506b65eec9fd25538e1716bdff0a32f5367","dweb:/ipfs/QmS9tTjdMKvdCZJX5U24ig4AqJVNeQtnEc834ZHQXbasAD"]},"contracts/src/unreleased/math/SafeCast.sol":{"keccak256":"0x592af6bc95467e4f90f8a1496bf89847718086842dc8f597b6c0bdc57e8b5cee","license":"MIT","urls":["bzz-raw://f07fb493ed6ed390a3fe829c8a1ae27504d97693c0772ca79e90657e858c4959","dweb:/ipfs/QmS3jhDuN1RxzNfQGwiDAoYb2n64YzR75wdtWuxLjXQxGu"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol":{"keccak256":"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39","license":"MIT","urls":["bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743","dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"]},"lib/solady/src/utils/LibClone.sol":{"keccak256":"0x87e7107cd0dd0b0a4842f705bde584e8aa5149b678654d3b438e6683b1b90314","license":"MIT","urls":["bzz-raw://f33b424b3d85944e32c9dace9939f9faa4d30ef7f2d2b0b9f8238f956c8ed89d","dweb:/ipfs/QmYpf82Ufq9bEr3vaz7HYSkrjB1pryYYFP4pALqnGbhUgi"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.26+commit.8a97fa7a" },
    language: "Solidity",
    output: {
      abi: [
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
      devdoc: { kind: "dev", methods: {}, version: 1 },
      userdoc: {
        kind: "user",
        methods: {
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
        "solady/=lib/solady/src/",
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
          "0xa68c53c44acf40ad5ebdb7a3e40042f9be4dd00810c3158c242ad71b7f830136",
        urls: [
          "bzz-raw://a706a8142a11e2c7ddaadadb271e74be3c4cabf09e145a1a4b647d6dd81dc592",
          "dweb:/ipfs/QmR3TCvF4jKQ8Mq79s5mLVxrNBgFkH37pCzjgzE99YPDRZ",
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
  id: 0,
} as const;
