const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
})

//deposit btn 
const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {
    //current deposit amount
    const depositAmount = document.getElementById('depositAmount').value;
    const newDeposit = parseFloat(depositAmount);

    //new deposit amount 
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const oldDeposit = parseFloat(currentDeposit);

    //total deposit amount
    const totalDeposit = newDeposit + oldDeposit;
    document.getElementById('currentDeposit').innerText = totalDeposit;

    //current balance
    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBal = parseFloat(currentBalance);
    const newBal = currentBal + newDeposit;
    document.getElementById('currentBalance').innerText = newBal;
})


//withdraw btn 
const withdrawBtn = document.getElementById('add-withdraw');
withdrawBtn.addEventListener('click', function () {
    //withdraw 
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const currentWithdraw = parseFloat(withdrawAmount);

    //total withdraw 
    newWithdraw = document.getElementById('currentWithdraw').innerText;
    lastWithdraw = parseFloat(newWithdraw);
    totalWithdraw = currentWithdraw + lastWithdraw;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    //new balance calculation
    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBal = parseFloat(currentBalance);
    const newBal = currentBal - currentWithdraw;
    document.getElementById('currentBalance').innerText = newBal;
})