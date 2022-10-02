const billInput = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('input[type="radio"]');
const tipCustom = document.querySelector('#custom');
const peopleInput = document.querySelector('#people');
const tipResult = document.querySelector('#tip-result');
const totalResult = document.querySelector('#total-result');
const resetBtn = document.querySelector('.btn-reset');
const errorMsg = document.querySelector('.error-msg');

let bill = 0;
let tip = 0;
let people = 0;

billInput.addEventListener('input', e => {
  bill = parseFloat(e.target.value);
  calc();
});

tipButtons.forEach(btn =>
  btn.addEventListener('click', e => {
    tip = parseFloat(e.target.value) / 100;
    calc();
  })
);

tipCustom.addEventListener('input', e => {
  tipButtons.forEach(btn => (btn.checked = false));
  tip = parseFloat(e.target.value) / 100;
  calc();
});

peopleInput.addEventListener('input', e => {
  people = parseInt(e.target.value);
  if (e.target.value === '0') {
    errorMsg.style.visibility = 'visible';
    e.target.style.outlineColor = 'rgb(215, 59, 28)';
  } else if (e.target.value !== '0') {
    errorMsg.style.visibility = 'hidden';
    e.target.style.outlineColor = 'hsl(172, 67%, 45%)';
  }
  calc();
});

function calc() {
  let tipTotal = (bill * tip) / people;
  if (tipTotal < 1000) {
    tipTotal = tipTotal.toPrecision(3);
  } else {
    tipTotal = tipTotal.toPrecision(6);
  }

  let billTotal = (bill + bill * tip) / people;
  if (billTotal < 1000) {
    billTotal = billTotal.toPrecision(4);
  } else {
    billTotal = billTotal.toPrecision(6);
  }

  if (bill > 0 && tip > 0 && people > 0) {
    tipResult.textContent = tipTotal;
    totalResult.textContent = billTotal;
  }
}

resetBtn.addEventListener('click', () => {
  bill = 0;
  tip = 0;
  people = 0;
  billInput.value = '';
  peopleInput.value = '';
  tipResult.textContent = '0.00';
  totalResult.textContent = '0.00';
  tipButtons.forEach(btn => (btn.checked = false));
});
