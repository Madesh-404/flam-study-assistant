import "./NavigationControls.css";

function NavigationControls({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalItems - 1;

  return (
    <div className="navigation-controls">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirst}
      >
        ← Previous
      </button>

      <span>
        {currentIndex + 1} / {totalItems}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
      >
        Next →
      </button>
    </div>
  );
}

export default NavigationControls;