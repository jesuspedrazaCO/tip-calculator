const { calculateTip } = require('../src/tipCalculator');
const assert = require('assert');

describe('Tip Calculator', () => {
    it('should calculate 10% tip on $100', () => {
        const tip = calculateTip(100, 10);
        assert.strictEqual(tip, 10);
    });

    it('should calculate 15% tip on $200', () => {
        const tip = calculateTip(200, 15);
        assert.strictEqual(tip, 30);
    });

    it('should calculate 20% tip on $50', () => {
        const tip = calculateTip(50, 20);
        assert.strictEqual(tip, 10);
    });
});