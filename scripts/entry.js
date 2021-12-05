// DOM Selections
const entry = document.getElementById('entry');
const panel = document.getElementById('panel');
const form  = document.getElementsByClassName('inputGroup')[0];
const cancel = document.getElementById('returnBtn');
const btnCnt = document.getElementById('btnCnt');
const btnBuy = document.getElementById('btnBuy');
const btnSll = document.getElementById('btnSll');
const bsCoin = document.getElementById('bsQty');
const qtCoin = document.getElementById('qtQty');
const display = document.getElementById('display');
const baseInp = document.getElementsByClassName('output')[0];
const quotInp = document.getElementsByClassName('input')[0];
var exchanger;

// Settings
let avail = ['BTC','BCH','ETH','XMR'];
let currentPrice = 1;
let coinstr = '';

form.addEventListener('submit',(event) => {
  event.preventDefault();
  var keys = {
    'aKey': document.getElementById('aKey').value,
    'sKey': document.getElementById('sKey').value
  };
  exchanger = new binance(...Object.values(keys));
  
  entry.classList.add('hidden');
  panel.classList.remove('hidden');

  document.getElementById('info-aKey').value = keys['aKey'];
  document.getElementById('info-sKey').value = keys['sKey'];
})

cancel.addEventListener('click',() => {
  entry.classList.remove('hidden');
  panel.classList.add('hidden');
  document.getElementById('aKey').value = '';
  document.getElementById('sKey').value = '';
})

bsCoin.onchange = qtCoin.onchange = () => {
  coinstr = bsCoin.value+qtCoin.value;
  let n = 1;
  if (bsCoin.value != '' && qtCoin.value != '') {
    exchanger.availability().then(info => {
      if (!info.includes(coinstr)) { coinstr = qtCoin.value+bsCoin.value; n=-1; }
      exchanger.getPrice(coinstr).then(data => {
        currentPrice = parseFloat(data.price) ** n;
        display.innerText = `1 ${bsCoin.value} = ${currentPrice} ${qtCoin.value}`;
      })
    })
  }
}

quotInp.onchange = quotInp.onkeyup = () => { baseInp.value = (parseFloat(quotInp.value)/currentPrice).toFixed(5); }
baseInp.onchange = baseInp.onkeyup = () => { quotInp.value = (parseFloat(baseInp.value)*currentPrice).toFixed(5); }

btnCnt.addEventListener('click',() => {
  try {
    exchanger.connectivity().then(info => {alert('Binance is Operational')})
  } catch (error) { alert('ERROR: Binance is not Operational' + '\n\n' + error) }
})

btnBuy.addEventListener('click',() => {
  exchanger.buyCrypto(coinstr,parseFloat(baseInp.value),parseFloat(quotInp.value)).then(info => { console.log(info); })
})

btnSll.addEventListener('click',() => {
  exchanger.sellCrypto(coinstr,parseFloat(baseInp.value),parseFloat(quotInp.value)).then(info => { console.log(info); })
})

// ----------- Excluded -----------
// const btnAvl = document.getElementById('btnAvl');
// btnAvl.addEventListener('click',() => {
//   function validPairs(coinstr) { return avail.includes(coinstr.symbol.slice(0,3)) && avail.includes(coinstr.symbol.slice(3)); }
//   exchanger.pairAvail().then(info => { alert(
//     'Available Pairs:\n'+Object.values(info.filter(validPairs))
//   ); })
// })
