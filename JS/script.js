document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById("monthly-income");
  const monthlyIncome = income.value;
  const foodCost = document.getElementById("food-cost");
  const monthlyFoodCost = foodCost.value;
  const rentCost = document.getElementById("rent-cost");
  const monthlyRentCost = rentCost.value;
  const clothesCost = document.getElementById("clothes-cost");
  const monthlyClothesCost = clothesCost.value;
  //   ALL COST PLUS & PRINT
  const total =
    parseFloat(monthlyFoodCost) +
    parseFloat(monthlyRentCost) +
    parseFloat(monthlyClothesCost);
  document.getElementById("expenses").innerText = total;
  console.log(total);
  //   TOTAL BALANCE MINUS ALL COST
  const monthlyBalance = monthlyIncome - total;
  document.getElementById("balance").innerText = monthlyBalance;
  //   console.log(monthlyBalance);
  //   CLEAR INPUT BOX
  //   income.value = "";
  //   foodCost.value = "";
  //   rentCost.value = "";
  //   clothesCost.value = "";
  // SAVE SECTION

  //   ERROR HANDELING
  if (
    monthlyIncome < 0 ||
    monthlyFoodCost < 0 ||
    monthlyRentCost < 0 ||
    monthlyClothesCost < 0 ||
    monthlyIncome < total
  ) {
    alert("Please Input Valide Value");
  }
});
// SAVE SECTION
/* document.getElementById("save-btn").addEventListener("click", function () {
  const income = document.getElementById("monthly-income");
  const monthlyIncome = parseFloat(income).value;
  const saveInput = document.getElementById("save");
  const monthlySave = parseFloat(saveInput).value;
  const saveParcent = (monthlyIncome / 100) * monthlySave;
  return saveParcent;
}); */

// SAVE SECTION
document.getElementById("save-btn").addEventListener("click", function () {
  const parMonth = document.getElementById("monthly-income");
  const parMonthCost = parMonth.value;

  const monthlySave = document.getElementById("save");
  const parMonthsave = monthlySave.value;
  const monthly1 = parseFloat(parMonthsave);

  console.log(monthly1);
  const totalMonthlycost = (parMonthCost / 100) * monthly1;
  document.getElementById("saving-amount").innerText = totalMonthlycost;

  const save = document.getElementById("saving-amount");
  const saveAm = save.innerText;
  const savePars = parseFloat(saveAm);

  const remaining = document.getElementById("balance");
  const remainingInnetText = remaining.innerText;
  const correntbalance = parseFloat(remainingInnetText);
  const correntMoney = correntbalance - savePars;

  const reBalance = document.getElementById("remaining-balance");
  const remBalance = reBalance.innerText;
  const remaBalance = parseFloat(remBalance);
  reBalance.innerText = correntMoney;
  //   document.getElementById("remaining-balance").innerText = correntMoney;
});
