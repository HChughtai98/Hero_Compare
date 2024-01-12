import React from "react";
// Styling //
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
    <div className="BtnCtn">
      <button className="Btn" onClick={handlePrev}>
        Previous
      </button>
      <button className="Btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PrevAndNextFunction;
