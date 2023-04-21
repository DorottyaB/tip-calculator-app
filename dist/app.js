"use strict";
var billInput = document.querySelector('#bill');
var tipButtons = document.querySelectorAll('input[type="radio"]');
var tipCustom = document.querySelector('#custom');
var peopleInput = document.querySelector('#people');
var tipResult = document.querySelector('#tip-result');
var totalResult = document.querySelector('#total-result');
var resetBtn = document.querySelector('.btn-reset');
var errorMsg = document.querySelector('.error-msg');
var bill = 0;
var tip = 0;
var people = 0;
billInput === null || billInput === void 0 ? void 0 : billInput.addEventListener('input', function (e) {
    bill = parseFloat(e.target.value);
    calc();
});
tipButtons.forEach(function (btn) {
    return btn.addEventListener('click', function (e) {
        tip = parseFloat(e.target.value) / 100;
        calc();
    });
});
tipCustom === null || tipCustom === void 0 ? void 0 : tipCustom.addEventListener('input', function (e) {
    tipButtons.forEach(function (btn) { return (btn.checked = false); });
    tip = parseFloat(e.target.value) / 100;
    calc();
});
peopleInput === null || peopleInput === void 0 ? void 0 : peopleInput.addEventListener('input', function (e) {
    people = parseInt(e.target.value);
    if (e.target.value === '0') {
        errorMsg.style.visibility = 'visible';
        e.target.style.outlineColor = 'rgb(215, 59, 28)';
    }
    else if (e.target.value !== '0') {
        errorMsg.style.visibility = 'hidden';
        e.target.style.outlineColor = 'hsl(172, 67%, 45%)';
    }
    calc();
});
function calc() {
    var tipTotal = (bill * tip) / people;
    if (tipTotal < 1000) {
        tipTotal = tipTotal.toPrecision(3);
    }
    else {
        tipTotal = tipTotal.toPrecision(6);
    }
    var billTotal = (bill + bill * tip) / people;
    if (billTotal < 1000) {
        billTotal = billTotal.toPrecision(4);
    }
    else {
        billTotal = billTotal.toPrecision(6);
    }
    if (bill > 0 && tip > 0 && people > 0) {
        tipResult.textContent = tipTotal;
        totalResult.textContent = billTotal;
    }
}
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function () {
    bill = 0;
    tip = 0;
    people = 0;
    billInput.value = '';
    peopleInput.value = '';
    tipResult.textContent = '0.00';
    totalResult.textContent = '0.00';
    tipButtons.forEach(function (btn) { return (btn.checked = false); });
});
//# sourceMappingURL=app.js.map