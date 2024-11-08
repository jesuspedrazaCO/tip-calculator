function calculateTip(amount, tipPercentage) {
  return amount * (tipPercentage / 100);
}

function calculateTipWithTotal(amount, tipPercentage) {
  const tip = amount * (tipPercentage / 100);
  const total = amount + tip;
  return { tip, total };
}

module.exports = { calculateTip, calculateTipWithTotal };