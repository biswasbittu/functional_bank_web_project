
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);


    const previousBalenceTotal = getTextElementValueById('balence-total')
    const newBalenceTotal = previousBalenceTotal + newDepositAmount;

    setElementValueById('balence-total',newBalenceTotal);

})
