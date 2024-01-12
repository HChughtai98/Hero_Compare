// Styling //
import "../styling/ComplexityIndicator.css";

const ComplexityIndicator = ({ complexity }) => {
  const totalComplexity = 3;
  const diamonds = [];

  for (let i = 1; i <= totalComplexity; i++) {
    diamonds.push(
      <div
        key={i}
        className={`diamond ${i <= complexity ? "active" : ""}`}
      ></div>
    );
  }

  return (
    <div className="complexity-indicator">
      <span className="complexity-text">Complexity</span>
      {diamonds}
    </div>
  );
};
export default ComplexityIndicator;
