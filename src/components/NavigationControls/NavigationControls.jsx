import "./NavigationControls.css";

function NavigationControls({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  nextLabel = "Next →",
  nextDisabled = false,
}) {
  const isFirst = currentIndex === 0;

  return (
    <div className="navigation-controls">
      <button type="button" onClick={onPrevious} disabled={isFirst}>
        ← Previous
      </button>

      <span>
        {currentIndex + 1} / {totalItems}
      </span>

      <button type="button" onClick={onNext} disabled={nextDisabled}>
        {nextLabel}
      </button>
    </div>
  );
}

export default NavigationControls;
