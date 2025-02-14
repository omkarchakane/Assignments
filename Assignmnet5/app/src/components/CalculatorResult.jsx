export default function CalculatorResult({ result }) {
  return result !== null ? <div className="calculator-result">Result: {result}</div> : null;
}
