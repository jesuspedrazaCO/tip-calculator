const { calculateTipWithTotal } = require('./tipCalculator');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function runApp() {
    rl.question("Ingrese el monto: ", (amountInput) => {
        const amount = parseFloat(amountInput);
        if (isNaN(amount) || amount <= 0) {
            console.log("Por favor, ingrese un monto válido y mayor a 0.");
            rl.close();
            return;
        }

        rl.question("Ingrese el porcentaje de propina: ", (tipPercentageInput) => {
            const tipPercentage = parseFloat(tipPercentageInput);
            if (isNaN(tipPercentage) || tipPercentage < 0) {
                console.log("Por favor, ingrese un porcentaje de propina válido (0 o mayor).");
            } else {
                const result = calculateTipWithTotal(amount, tipPercentage);
                console.log(`Propina: ${result.tip.toFixed(2)}, Total: ${result.total.toFixed(2)}`);
            }
            rl.close();
        });
    });
}

if (require.main === module) {
    runApp();
}