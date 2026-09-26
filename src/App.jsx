import { useState } from "react";

import PromptInput from "./components/PromptInput/PromptInput";
import StudyModeSelector from "./components/StudyModeSelector/StudyModeSelector";
import FlashcardDeck from "./components/FlashcardDeck/FlashcardDeck";
import Quiz from "./components/Quiz/Quiz";
import ScoreCard from "./components/ScoreCard/ScoreCard";

import "./App.css";

const mockQuiz = {
  type: "quiz",
  title: "JavaScript Basics",
  questions: [
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "function", "global"],
      correctAnswer: "let",
    },
    {
      question: "What does === compare?",
      options: [
        "Only value",
        "Only type",
        "Value and type",
        "References only",
      ],
      correctAnswer: "Value and type",
    },
    {
      question: "What is a closure?",
      options: [
        "A loop",
        "A function with access to its outer scope",
        "A class",
        "A promise",
      ],
      correctAnswer: "A function with access to its outer scope",
    },
  ],
};

const mockFlashcards = {
  type: "flashcards",
  title: "JavaScript Closures",
  cards: [
    {
      question: "What is a closure?",
      answer:
        "A closure is a function bundled with its lexical environment.",
    },
    {
      question: "Why are closures useful?",
      answer:
        "They allow functions to remember and access variables from their outer scope.",
    },
    {
      question: "What is lexical scope?",
      answer:
        "Lexical scope determines variable accessibility based on where code is written.",
    },
  ],
};

function App() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("flashcards");
  const [result, setResult] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);

function handleGenerate() {
  if (mode === "flashcards") {
    setResult(mockFlashcards);
    return;
  }

  if (mode === "quiz") {
    setResult(mockQuiz);
    setActiveQuiz(mockQuiz);
    setQuizResult(null);
  }
}

function handleQuizComplete(results) {
  setQuizResult(results);
}

if (result?.type === "flashcards") {
  return (
    <main className="app">
      <FlashcardDeck data={result} />
    </main>
  );
}

if (result?.type === "quiz" && quizResult) {
  return (
    <main className="app">
      <ScoreCard
        score={quizResult.score}
        total={activeQuiz.questions.length}
        incorrectCount={
          quizResult.incorrectQuestions.length
        }
        onRetryIncorrect={() => {
          const retryQuiz = {
            ...activeQuiz,
            questions: quizResult.incorrectQuestions,
          };

          setActiveQuiz(retryQuiz);
          setQuizResult(null);
        }}
        onRetake={() => {
          setActiveQuiz(result);
          setQuizResult(null);
        }}
        onNewStudySet={() => {
          setResult(null);
          setActiveQuiz(null);
          setQuizResult(null);
        }}
      />
    </main>
  );
}

if (result?.type === "quiz") {
  return (
    <main className="app">
      <Quiz
        key={activeQuiz.questions.length}
        data={activeQuiz}
        onComplete={handleQuizComplete}
      />
    </main>
  );
}

  return (
    <main className="app">
      <section className="hero">
        <p className="title">AI STUDY ASSISTANT</p>

        <h1>
          Turn any topic into an interactive study set.
        </h1>

        <p className="subtitle">
          Generate flashcards or quizzes from your notes,
          topic, or question.
        </p>

        <div className="study-form">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
          />

          <StudyModeSelector
            mode={mode}
            onChange={setMode}
          />

          <button
            className="generate-button"
            type="button"
            onClick={handleGenerate}
            disabled={!prompt.trim()}
          >
            Generate →
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;