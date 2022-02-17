/* // ALL BUTTON
const calculateButton = document.getElementById("calculate-btn");
const saveButton = document.getElementById("save-btn");
// ALL INPUT BOX
const incomeBox = document.getElementById("monthly-income");
const foodCostBox = document.getElementById("food-cost");
const rentCostBox = document.getElementById("rent-cost");
const clothesCostBox = document.getElementById("clothes-cost"); */
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById("monthly-income").value;
  const foodCost = document.getElementById("food-cost").value;
  const rentCost = document.getElementById("rent-cost").value;
  const clothesCost = document.getElementById("clothes-cost").value;
  const total =
    parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
  document.getElementById("expenses").innerText = total;
  console.log(total);
  const monthlyBalance = income - total;
  document.getElementById("balance").innerText = monthlyBalance;
  console.log(monthlyBalance);
});
