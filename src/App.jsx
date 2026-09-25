import { useState } from "react";

import PromptInput from "./components/PromptInput/PromptInput";
import StudyModeSelector from "./components/StudyModeSelector/StudyModeSelector";
import FlashcardDeck from "./components/FlashcardDeck/FlashcardDeck";

import "./App.css";

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

  function handleGenerate() {
    if (mode === "flashcards") {
      setResult(mockFlashcards);
    }
  }

  if (result) {
    return (
      <main className="app">
        <FlashcardDeck data={result} />
      </main>
    );
  }

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">AI STUDY ASSISTANT</p>

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