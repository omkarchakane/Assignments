
for (let i = 2; i <= 100; i += 2) {
    console.log(i );
}
console.log('\n')


//todo 2. Function to perform basic arithmetic operations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}
console.log(calculate(10, 5, '+' )); 
console.log('\n');

//todo 3. Function to calculate tax based on salary
function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.1;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.2;
        case (salary > 1500000):
            return salary * 0.3;
        default:
            return "Invalid salary amount";
    }
}
console.log(findTax(1200000)); 
console.log('\n');

//todo 4. Function to find the sum of the products of corresponding digits
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let minLen = Math.min(str1.length, str2.length);
    let sum = 0;
    
    for (let i = 0; i < minLen; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    
    return sum;
}
console.log(sumOfProducts(6, 34)); 





