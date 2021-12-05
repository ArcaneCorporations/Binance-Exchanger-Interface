const CryptoJS = require('crypto-js');
const { default: axios } = require('axios');
let base_url  = 'https://api.binance.com/api/v3/';

class Exchanger {
  constructor(aKey,sKey) {
    this.aKey = aKey;
    this.sKey = sKey;
  }

  async connectivity() {
    return axios.get(base_url+'ping').then(res => (JSON.stringify(res.data) == '{}' ? true : false))
  }
  // connectivity().then(info => { console.log(info); })
  
  async availability() {
    return axios.get(base_url+'exchangeInfo').then(res => res.data.symbols)
  }
  // availability().then(info => { console.log(info); })
  
  
  async pairAvail(param) {
    return axios.get(base_url+'exchangeInfo?symbol='+param).then(res => res.data.symbols.find(item => { return item.symbol == param; }));
  }
  // let COIN1 = 'BNB'; let COIN2 = 'BTC';
  // pairAvail(COIN1+COIN2).then(info => { console.log(info); })
  // pairAvail(COIN2+COIN1).then(info => { console.log(info); })
  
  async getPrice(param) {
    return axios.get(base_url+'ticker/price?symbol='+param).then(res => res.data);
  }
  // let COIN1 = 'ETH'; let COIN2 = 'BTC';
  // getPrice(COIN1+COIN2).then(info => { console.log(info); })
}

module.exports = Exchanger;