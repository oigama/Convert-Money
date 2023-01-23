const button = document.getElementById("convert-button");
const select = document.getElementById ("currency-select")

const dolar = 5.21
const euro = 5.66
const bitcoin = 118900

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
