import { useState } from "react";
import useSound from "use-sound";
import incorrectSound from "./sfx/131657__bertrof__game-sound-wrong.wav";
import correctSound from "./sfx/131660__bertrof__game-sound-correct.wav";
import shuffle from "../common/utils/shuffle";
import "./trivia-item.css";

/**
 *  The TriviaItem component renders an individual trivia question and waits for a user's answer.
 * @param {object} props
 * @param {string} props.correctAnswer
 * @param {string[]} props.incorrectAnswers
 * @param {string} props.question
 * @param {"easy" | "medium" | "hard"} props.difficulty
 * @param {() => void} props.onNextClick
 * @param {(boonlean) => void} props.onAnswerSelected
 */

function TriviaItem({
  correctAnswer,
  incorrectAnswers,
  question,
  difficulty,
  onNextClick,
  onAnswerSelected,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;
  const [playCorrect] = useSound(correctSound, { volum: 0.3 });
  const [playIncorrect] = useSound(incorrectSound, { volume: 0.3 });

  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const [shuffledAnswers] = useState(() => shuffle(allAnswers));

  let nextButtonClassName = "trivia-item__button trivia-item__next-button";
  if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

  const onAnswerClick = (event) => {
    const playerAnswer = event.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const wasPlayerCorrect = playerAnswer === correctAnswer;
    if (wasPlayerCorrect) playCorrect();
    else playIncorrect();
    onAnswerSelected(wasPlayerCorrect, difficulty);
  };

  return (
    <div>
      <p className="trivia-item__question">{question}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer, i) => {
          let className = "trivia-item__button";

          if (hasPickedAnswer) {
            const pickedThisAnswer = answer === selectedAnswer;
            const isThisCorrect = answer === correctAnswer;

            if (pickedThisAnswer && isThisCorrect) {
              className += " trivia-item__button--correct";
            } else if (pickedThisAnswer && !isThisCorrect) {
              className += " trivia-item__button--incorrect";
            } else {
              className += " trivia-item__button--disabled";
            }
          }

          return (
            <li key={answer}>
              <button
                className={className}
                onClick={onAnswerClick}
                disabled={hasPickedAnswer}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={nextButtonClassName}
        onClick={onNextClick}
        disabled={!hasPickedAnswer}
      >
        Next ▶️
      </button>
    </div>
  );
}

export default TriviaItem;
