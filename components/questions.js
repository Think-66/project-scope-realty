import React, { useState } from "react";
import Question from "./question";

const Questions = ({ questions, summary, setSummary }) => {
  console.log(questions);
  console.log(summary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const onNextClicked = ({ selectedOption }) => {
    console.log(summary);
    setSummary({ ...summary, answered: summary.answered + 1 });
    if (selectedOption.is_correct) {
      setSummary({ ...summary, correct: summary.correct + 1 });
    }
    if (currentIndex + 1 > questions.length - 1) {
      setShowFinished(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowFinished(false);
    setScore(0);
  };

  return questions.length ? (
    <div>
      {showFinished ? (
        <div className="results">
          <h3>
            Your results are out. You scored {score} out of {questions.length}
          </h3>
        </div>
      ) : (
        <Question
          onNextClicked={onNextClicked}
          question={currentQuestion}
          key={currentQuestion.id}
        />
      )}
      {showFinished ? (
        <button className="try-again" onClick={resetQuiz}>
          Try again
        </button>
      ) : (
        <div className="questions-progress">
          {/* {currentIndex + 1}/{questions.length} */}
        </div>
      )}
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default Questions;
