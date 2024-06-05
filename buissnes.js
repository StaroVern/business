const finance = require('javascript-finance');

function calculateNpv(cashFlows, interestRate) {
    const presentValue = cashFlows.map((cf, i) => cf / (1 + interestRate) ** i);//вот здесь зашифрован бизнес план
    return finance.sum(presentValue);
}

// Пример использования:
const cashFlows = [100, 200, -300, 400];
const interestRate = 0.1;
const npv = calculateNpv(cashFlows, interestRate);
console.log(`NPV: ${npv}`);
