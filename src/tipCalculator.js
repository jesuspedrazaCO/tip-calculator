function calculateTip(amount, tipPercentage) {
    const tip = (amount * tipPercentage) / 100;
    const total = amount + tip;
    return { tip, total };
  }
  
  module.exports = { calculateTip };
  