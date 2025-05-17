import React, { useState } from "react";
import { IQuestion, IStyle } from "../../types";

interface IQuestionsComponentProps {
  question: IQuestion;
  styles: IStyle;
}

const Questions: React.FC<IQuestionsComponentProps> = ({
  question,
  styles,
}) => {
  const [isAnswerShowed, setIsAnswerShowed] = useState<boolean>(false);

  return (
    <div className={styles.questions}>
      <div className={styles.question}>
        <p>{question.question} ?</p>
        <span onClick={() => setIsAnswerShowed((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="orange"
            style={{ cursor: "pointer" }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div className={`${isAnswerShowed && styles.answer}`}>
        {isAnswerShowed && <p>{question.answer}</p>}
      </div>
    </div>
  );
};

export default Questions;
