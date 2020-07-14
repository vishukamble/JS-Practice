const currencyElementOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyElementOne.value;
  const currency_two = currencyElementTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

// Event listeners
currencyElementOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  console.log(currencyElementOne.value, currencyElementTwo.value);
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  console.log(currencyElementOne.value, currencyElementTwo.value);
  calculate();
});

calculate();
