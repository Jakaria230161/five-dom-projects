// total player expenses calculate start here
document.getElementById("calculate-btn").addEventListener("click", function () {
    const amountField = document.getElementById("amount-field");
    const amountFieldString = amountField.value;
    const amountFieldNumber = parseFloat(amountFieldString);
    const finalAmount = amountFieldNumber * playerCardArray.length;

    let totalExpensesGet = document.getElementById("player-expenses");
    let totalExpensesGetString = totalExpensesGet.innerText;


    totalExpensesGet.innerText = finalAmount;
    return totalExpensesGet;
})

document.getElementById("calculate-total-btn").addEventListener("click", function () {

    const coachSalary = document.getElementById("coach-salary")
    const coachSalaryString = coachSalary.value;
    const coachSalaryAmount = parseFloat(coachSalaryString);

    const managerSalary = document.getElementById("manager-salary")
    const managerSalaryString = managerSalary.value;
    const managerSalaryAmount = parseFloat(managerSalaryString);

    let coachManagerSalary = coachSalaryAmount + managerSalaryAmount;

    let allExpenses = finalAmount + coachManagerSalary;

    
    let totalExpenses = document.getElementById("total-expenses");
    let totalExpensesString = totalExpenses.innerText;
    
    totalExpenses.innerText = allExpenses;
    return totalExpenses;

})