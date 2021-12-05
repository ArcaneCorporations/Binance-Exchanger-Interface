let keys = {
  'aKey':'rGeUuB627EVBxuL7ds4yoQgW4XWBbhaGu80Tbv6LtHiCjksAu5cSSqsEAMozzSkQ',
  'sKey':'FpfBWEM4vYwSeKgsWRuXN0CxNEprTzoGbxwLQkRDEXXbT7bV4uy74ablm9Kb819H'
};

const exchanger = require('../src/index');
const CryptoJS = require('crypto-js');
const { default: axios } = require('axios');

// exchanger.connectivity().then(info => {console.log(info);})

let myExchanger = new exchanger(...Object.values(keys));
// let COIN1 = 'BNB'; let COIN2 = 'BTC';
// myExchanger.pairAvail(COIN1+COIN2).then(info => { console.log(info); })
// myExchanger.pairAvail(COIN2+COIN1).then(info => { console.log(info); })

// let COIN1 = 'ETH'; let COIN2 = 'BTC';
// myExchanger.sellCrypto(COIN1+COIN2,'BUY',0.1,39459).then(info => { console.log(info); }).catch(err => {
//   console.log('ERROR:::' + err);
// })