// total player expenses calculate start here
document.getElementById("calculate-btn").addEventListener("click", function () {
    
    const amountField = document.getElementById("amount-field");
    const amountFieldString = amountField.value;
    const amountFieldNumber = parseFloat(amountFieldString);
    const finalAmount = amountFieldNumber * playerCardArray.length;
    
    amountField.value = "";

    if (isNaN(finalAmount)) {
        alert("please enter a valid number to get proper value");
        return;
    }

    let totalExpensesGet = document.getElementById("player-expenses");
    let totalExpensesGetString = totalExpensesGet.innerText;

    totalExpensesGet.innerText = finalAmount;
    return totalExpensesGet;
})

// total player expenses calculation end here


// team management cost calculation starting here
document.getElementById("calculate-total-btn").addEventListener("click", function () {

    const coachSalary = document.getElementById("coach-salary")
    const coachSalaryString = coachSalary.value;
    const coachSalaryAmount = parseFloat(coachSalaryString);
    coachSalary.value = "";
    console.log(coachSalaryAmount);

    const managerSalary = document.getElementById("manager-salary")
    const managerSalaryString = managerSalary.value;
    const managerSalaryAmount = parseFloat(managerSalaryString);
    managerSalary.value = "";
    let totalExpensesGet = document.getElementById("player-expenses");
    let totalExpensesGetString = parseFloat(totalExpensesGet.innerText);
    const managementCost = coachSalaryAmount + managerSalaryAmount + totalExpensesGetString;

    let totalExpenses = document.getElementById("total-expenses");
    let totalExpensesString = totalExpenses.innerText;
    totalExpenses.innerText = managementCost;
    return totalExpenses;
})

// team managementCost ending here

