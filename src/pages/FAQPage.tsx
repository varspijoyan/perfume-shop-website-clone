import React from "react";
import { useNavigate } from "react-router-dom";
import Questions from "../components/FAQ/Questions";
import styles from "../styles/FAQPage.module.css";
import { IQuestion } from "../types";
import QuestionForm from "../components/FAQ/QuestionForm";

interface IFAQProps {
  faqs: IQuestion[];
}

const FAQPage: React.FC<IFAQProps> = ({ faqs }) => {
  const navigateTo = useNavigate();
  return (
    <div className={styles.faqContainer}>
      <div className={styles.navigation}>
        <span onClick={() => navigateTo("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
            style={{ cursor: "pointer" }}
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </span>
        <p>FAQ</p>
      </div>
      <div className={styles.textContainer}>
        <p>F.A.Q</p>
        <h1 className={styles.title}>Do you have any questions?</h1>
        <p className={styles.description}>
          Please read questions bellow and if you can not find your answer,
          please send us your question, we will answer you as soon as possible.
        </p>
      </div>
      <div className={styles.faqs}>
        <div className={styles.faqMark}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#e3e3e3"
            >
              <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
          <div>FAQs</div>
        </div>
        <div className={styles.questionFormContainer}>
          {faqs.map((faq) => (
            <Questions key={faq.id} question={faq} styles={styles} />
          ))}
        </div>
      <QuestionForm />
      </div>
    </div>
  );
};

export default FAQPage;
