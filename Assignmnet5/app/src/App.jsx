import { useState } from "react";
import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorResult from "./components/CalculatorResult";
import "./components/Calculator.css";
export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid Input");
      return;
    }
    
    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
        break;
      default:
        setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Simple Calculator</h2>
      <CalculatorInput value={num1} onChange={setNum1} placeholder="Enter first number" />
      <CalculatorInput value={num2} onChange={setNum2} placeholder="Enter second number" />
      <CalculatorButtons onCalculate={handleCalculation} />
      <CalculatorResult result={result} />
    </div>
  );
}
