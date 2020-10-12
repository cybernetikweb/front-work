// this is a pur function because it have no side effect
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(1, 2));

// this is a factory function
// An function who return another function
const taxCalculator = tax => {
    const calculateTax = amount => {
        return amount * tax
    };
    return calculateTax;
};

const calculateVatAmount = taxCalculator(0.19);
const calculateOtherAmount = taxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateOtherAmount(200));


// This is a recursion function (she call itself)
const powerOf = (x, n) => n === 1 ? x : x * powerOf(x, n - 1)

console.log(powerOf(4, 3))