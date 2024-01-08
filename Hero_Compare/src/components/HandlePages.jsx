import React from "react";
import "../styling/handlePages.css";

const PrevAndNextFunction = ({
  charactersLength,
  currentIndex,
  setCurrentIndex,
}) => {
  const handleNext = () => {
    if (currentIndex < charactersLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="Btn">
      <button onClick={handlePrev}>Previous</button>
      <button className="Btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PrevAndNextFunction;
