import { useState } from "react";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import EndScreen from "./end-screen";
import triviaData from "./trivia-data";

/**
 * The Game is responsible for orchestrating the flow of the quiz game.
 */

function difficultyValue(difficulty) {
  if (difficulty === "easy") return 1;
  else if (difficulty === "medium") return 2;
  else if (difficulty === "hard") return 3;
}

function Game() {
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestion = triviaData.length;

  const triviaQuestion = triviaData[triviaIndex];
  const triviaDifficulty = triviaData[triviaIndex];

  const { correct_answer, incorrect_answers, question } = triviaQuestion;
  const { difficulty } = triviaDifficulty;

  const restartGame = () => {
    setGameState({
      score: 0,
      triviaIndex: 0,
      isGameOver: false,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1) {
      setGameState({ ...gameState, isGameOver: true });
    } else {
      setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
    }
    // using the spread operator to copy the gameState and override the triviaIndex
  };

  const onAnswerSelected = (wasPlayerCorrect, difficulty) => {
    const pointValue = difficultyValue(difficulty);
    if (wasPlayerCorrect) {
      setGameState({
        ...gameState,
        score: score + pointValue,
      });
    }
  };

  let pageContent;
  let pageKey;
  if (isGameOver) {
    pageKey = "EndScreen";
    pageContent = (
      <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />
    );
  } else {
    pageKey = triviaIndex;
    const triviaQuestion = triviaData[triviaIndex];
    const {
      correct_answer,
      incorrect_answers,
      question,
      difficulty,
    } = triviaQuestion;
    pageContent = (
      <TriviaItem
        key={triviaIndex}
        question={question}
        difficulty={difficulty}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
      />
    );
  }

  return (
    <>
      <Stats
        score={score}
        questionNumber={questionNumber}
        totalQuestions={numQuestion}
        difficulty={difficulty}
      />
      {pageContent}
    </>
  );
}

export default Game;
