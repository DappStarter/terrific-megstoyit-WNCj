require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember protect guess option bridge verb'; 
let testAccounts = [
"0x0bf65db3b2f06c6228281d4db894190ceeaeff6c6c19a53f45f25eb0fe34436b",
"0x9bb0bd5d2818a8b09c7d81f0df899327fd9d0ac380119c2eb041fece0fa1d370",
"0x234b8dd07842fbc2a88903a89d1c1be4304772facd7bf87c593b6dbc494f968c",
"0x93ef97618f8f3a523e95032321c3622aa0079729999fcbd355fae80a0c1c9d79",
"0x456aaecc413eae721a4fe7db5b440b77b15f27c9f210141bd92d392581e0d50d",
"0xf75bdb1504307372a16a0d948b79234f5991a2b83712c9eecb7b5e28bf74635d",
"0xc123ce3dce8f81c8bfdfaeaad4def1ee6f38d4fdffd9e8e1bab0bc273ac0b6f7",
"0xd443e89001d6d691369033bb1f6b9cd634c5fc2f7204f9936064e2725b70cbb7",
"0x7be5eb9c48469c212cf4e716b36c5270c472e4fe5d5802b53fd3b9be2655023e",
"0xe11454ef10bd59a350d34d2b294a443af96f53853032c09e0fff0b1d3fab3643"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

