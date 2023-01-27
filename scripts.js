const button = document.getElementById("convert-button");
const select = document.getElementById ("currency-select")


var bitcoin;
fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL')
.then(result => {return result.json()})
.then(element => {return element.BTCBRL.bid})
.then(price => {bitcoin = price*1000})

var dolar;
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
.then(result => {return result.json()})
.then(element => {return element.USDBRL.bid})
.then(price => {dolar = price})

var euro;
fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
.then(result => {return result.json()})
.then(element => {return element.EURBRL.bid})
.then(price => {euro = price})


const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const dolarValueText = document.getElementById("dolar-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais); 

  if (select.value === 'US$ Dólar americano') {
    dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === '€ Euro') {
    dolarValueText.innerHTML = new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }

  if (select.value === '₿ Bitcoin') {
    dolarValueText.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "btc",
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    }).format(inputReais / bitcoin)


  }

}


changeCurrency =  () => {
const currencyName = document.getElementById("currency-name")
const currencyImgUsa = document.getElementById ("currency-img-usa")

if (select.value === 'US$ Dólar americano') {
  currencyName.innerHTML = "Dólar americano"
  currencyImgUsa.src = "./assets/estados-unidos (1) 1.svg"
 }

 if (select.value === '€ Euro') {
  currencyName.innerHTML = "Euro"
  currencyImgUsa.src = "./assets/euro.svg"
 }

 if (select.value === '₿ Bitcoin') {
  currencyName.innerHTML = "Bitcoin"
  currencyImgUsa.src = "./assets/btc.svg"
 }

 convertValues ()

}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency)
