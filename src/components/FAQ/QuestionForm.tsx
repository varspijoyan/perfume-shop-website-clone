import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/FAQPage.module.css";
import { IFAQForm } from "../../types";

const QuestionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFAQForm>();

  const [data, setData] = useState<IFAQForm>();

  const onSubmit = (data: IFAQForm) => {
    setData(data);
    reset();
  };

  return (
    <div className={styles.faqFormContainer}>
      <div className={styles.questionMark}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
        </div>
        <div>Ask Us</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name (required)"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Invalid name format",
            },
          })}
        />
        {errors?.name?.message && (
          <p className={styles.error}>{errors.name.message}</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email (required)"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors?.email?.message && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
        <label htmlFor="question">Your Question</label>
        <textarea
          placeholder="Your question here (required)"
          {...register("question", {
            required: {
              value: true,
              message: "Question field is required",
            },
          })}
        ></textarea>
        {errors?.question?.message && (
            <p className={styles.error}>{errors.question.message}</p>
        )}
        <button className={styles.btn} type="submit">Ask</button>
      </form>
    </div>
  );
};

export default QuestionForm;
