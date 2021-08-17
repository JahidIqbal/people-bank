function getInputValue(inputID) {
    const InputField = document.getElementById(inputID);
    const InputAmountText = InputField.value;
    const InputAmount = parseFloat(InputAmountText);
    InputField.value = InputAmount;
    InputField.value = '';

    return InputAmount;


}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const ElementText = totalElement.innerText;
    const previousTotal = parseFloat(ElementText);
    totalElement.innerText = previousTotal + amount;


}

function getRecentBalance() {
    const balanceTotal = document.getElementById('Balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function upgradeBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('Balance-total');
    const previousBalanceTotal = getRecentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}










// Installment button handler
document.getElementById("Installment-button").addEventListener('click', function () {
    const Installamount = getInputValue('Installment-input')
    if (Installamount > 0) {
        updateTotalField('Install-total', Installamount);
        upgradeBalance(Installamount, true);
    }

})





// cashout button handler
document.getElementById("Cashout-button").addEventListener('click', function () {
    const Cashoutamount = getInputValue('Cashout-input');
    const recentBalance = getRecentBalance();
    if (Cashoutamount > 0 && Cashoutamount < recentBalance) {
        updateTotalField('Cashout-total', Cashoutamount);
        upgradeBalance(Cashoutamount, false);
    }

    if (Cashoutamount > recentBalance) {
        console.log('you cannot cashout your money')
    }

})
