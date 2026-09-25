import { useState } from "react";

import PromptInput from "./components/PromptInput/PromptInput";
import StudyModeSelector from "./components/StudyModeSelector/StudyModeSelector";

import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("flashcards");

  function handleGenerate() {
    console.log({
      prompt,
      mode,
    });
  }

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">AI STUDY ASSISTANT</p>

        <h1>Turn any topic into an interactive study set.</h1>

        <p className="subtitle">
          Generate flashcards or quizzes from your notes, topic, or question.
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