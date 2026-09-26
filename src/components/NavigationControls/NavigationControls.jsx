import "./NavigationControls.css";

function NavigationControls({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  nextDisabled,
  nextLabel = "Next →",
  onExit,
}) {
  return (
    <div className="navigation-controls">
      <button
        type="button"
        onClick={onExit}
        className="navigation-controls__exit"
      >
        Exit
      </button>

      <div className="navigation-controls__right">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentIndex === 0}
      >
        ← Previous
      </button>

        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}

export default NavigationControls;