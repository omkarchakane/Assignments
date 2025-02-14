export default function CalculatorInput({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="calculator-input"
      placeholder={placeholder}
    />
  );
}
