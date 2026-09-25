import { useState } from "react";

import QuizQuestion from "../QuizQuestion/QuizQuestion";
import NavigationControls from "../NavigationControls/NavigationControls";

import "./Quiz.css";

function Quiz({ data, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState(
    Array(data.questions.length).fill(null)
  );

  const currentQuestion = data.questions[currentIndex];

  function handleSelectAnswer(answer) {
    setAnswers((currentAnswers) => {
      const updatedAnswers = [...currentAnswers];

      updatedAnswers[currentIndex] = answer;

      return updatedAnswers;
    });
  }

  function handlePrevious() {
    setCurrentIndex((current) => current - 1);
  }

  function handleNext() {
    const isLastQuestion =
      currentIndex === data.questions.length - 1;

    if (isLastQuestion) {
      onComplete(answers);
      return;
    }

    setCurrentIndex((current) => current + 1);
  }

  return (
    <section className="quiz">
      <div className="quiz__header">
        <div>
          <p className="quiz__label">QUIZ</p>

          <h1>{data.title}</h1>
        </div>

        <span>
          {currentIndex + 1} / {data.questions.length}
        </span>
      </div>

      <div className="quiz__progress">
        <div
          style={{
            width: `${
              ((currentIndex + 1) /
                data.questions.length) *
              100
            }%`,
          }}
        />
      </div>

      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={answers[currentIndex]}
        onSelectAnswer={handleSelectAnswer}
      />

      <NavigationControls
        currentIndex={currentIndex}
        totalItems={data.questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        nextLabel={
          currentIndex === data.questions.length - 1
            ? "Finish →"
            : "Next →"
        }
/>
    </section>
  );
}

export default Quiz;