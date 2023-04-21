const billInput = document.querySelector<HTMLInputElement>('#bill')!;
const tipButtons = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
const tipCustom = document.querySelector<HTMLInputElement>('#custom');
const peopleInput = document.querySelector<HTMLInputElement>('#people')!;
const tipResult = document.querySelector<HTMLSpanElement>('#tip-result')!;
const totalResult = document.querySelector<HTMLSpanElement>('#total-result')!;
const resetBtn = document.querySelector<HTMLButtonElement>('.btn-reset');
const errorMsg = document.querySelector<HTMLParagraphElement>('.error-msg')!;

let bill = 0;
let tip = 0;
let people = 0;

billInput?.addEventListener('input', e => {
  bill = parseFloat((e.target as HTMLInputElement as HTMLInputElement).value);
  calc();
});

tipButtons.forEach(btn =>
  btn.addEventListener('click', e => {
    tip = parseFloat((e.target as HTMLInputElement as HTMLInputElement).value) / 100;
    calc();
  })
);

tipCustom?.addEventListener('input', e => {
  tipButtons.forEach(btn => (btn.checked = false));
  tip = parseFloat((e.target as HTMLInputElement).value) / 100;
  calc();
});

peopleInput?.addEventListener('input', e => {
  people = parseInt((e.target as HTMLInputElement).value);
  if ((e.target as HTMLInputElement).value === '0') {
    errorMsg.style.visibility = 'visible';
    (e.target as HTMLInputElement).style.outlineColor = 'rgb(215, 59, 28)';
  } else if ((e.target as HTMLInputElement).value !== '0') {
    errorMsg.style.visibility = 'hidden';
    (e.target as HTMLInputElement).style.outlineColor = 'hsl(172, 67%, 45%)';
  }
  calc();
});

type TipTotal = number | string;
type BillTotal = number | string;

function calc() {
  let tipTotal: TipTotal = (bill * tip) / people;
  if (tipTotal < 1000) {
    tipTotal = tipTotal.toPrecision(3);
  } else {
    tipTotal = tipTotal.toPrecision(6);
  }

  let billTotal: BillTotal = (bill + bill * tip) / people;
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

resetBtn?.addEventListener('click', () => {
  bill = 0;
  tip = 0;
  people = 0;
  billInput.value = '';
  peopleInput.value = '';
  tipResult.textContent = '0.00';
  totalResult.textContent = '0.00';
  tipButtons.forEach(btn => (btn.checked = false));
});
