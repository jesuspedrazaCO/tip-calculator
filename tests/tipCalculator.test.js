const assert = require('assert');
const { calculateTip } = require('../src/tipCalculator');

describe('Tip Calculator', () => {
  it('should calculate 10% tip on $100', () => {
    const { tip, total } = calculateTip(100, 10);
    assert.strictEqual(tip, 10);
    assert.strictEqual(total, 110);
  });

  it('should calculate 15% tip on $200', () => {
    const { tip, total } = calculateTip(200, 15);
    assert.strictEqual(tip, 30);
    assert.strictEqual(total, 230);
  });

  it('should calculate 20% tip on $50', () => {
    const { tip, total } = calculateTip(50, 20);
    assert.strictEqual(tip, 10);
    assert.strictEqual(total, 60);
  });
});
