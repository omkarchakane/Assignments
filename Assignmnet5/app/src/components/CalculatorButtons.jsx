export default function CalculatorButtons({ onCalculate }) {
  return (
    <div className="calculator-buttons">
      <button onClick={() => onCalculate("+")}>+</button>
      <button onClick={() => onCalculate("-")}>-</button>
      <button onClick={() => onCalculate("*")}>*</button>
      <button onClick={() => onCalculate("/")}>/</button>
    </div>
  );
}
