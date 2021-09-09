require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy release mad soap harvest close borrow tilt'; 
let testAccounts = [
"0x14022503c61a9c993246e3bbc7f1d078fb8c63d21db781f803f3e4c0e7fbddf6",
"0x3017c79440756603d565fc030dc6d221c81202509f5f31f2b8bb4859cf35c018",
"0x76d723ae67e23bdf855190849a5dda742abac8090058cf52011588243768fa44",
"0xf6adadbed4138bbbe356055635628fdb14df48447973b9a1c307847f35f7e54c",
"0xb0f0ba9efac85725ff683f8831fd443422da0e976a16c35898ca1d11591451ac",
"0xfcc67b82008168af4f608cc7e60f3cac18f97d8a653bc4619443d65cfa855e29",
"0xfa5204d0e329a3715be294db583461d6be72332f0ab5d0e41746244bbfc7826b",
"0x05bb9ee010980976b8d04e2ed03c448cba6b97226a21d6100d91eec0834504ac",
"0x51234519255340a27795f51d0ce50b61fa8e0348b27be8764d7ff33cd12d2b2b",
"0x02a704ac2e7b34688c74e8ddd31d9dbadf5373524cd6f4bcf68378e07fb487ed"
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

