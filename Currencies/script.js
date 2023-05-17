
const rates = {
  USD: 1,
  EUR: 0.84,
  GBP: 0.72,
  BGN: 1.81,
  DIN: 108.29 
};


function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);

  document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}


const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', convertCurrency);
