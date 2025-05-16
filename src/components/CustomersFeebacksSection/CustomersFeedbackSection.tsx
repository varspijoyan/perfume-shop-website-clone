import React, { useRef } from "react";
import styles from "../../styles/CustomerFeedbackSection.module.css";
import { IFeedback } from "../../types";
import Feedbacks from "./Feedbacks";

interface IFeedbackSectionProps {
  customerFeedbacks: IFeedback[];
}

const CustomersFeedbacksSection: React.FC<IFeedbackSectionProps> = ({
  customerFeedbacks,
}) => {
  const feedbackRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (feedbackRef.current) {
      feedbackRef.current.scrollBy({
        left: direction === "left" ? -window.innerWidth : window.innerWidth,
      });
    }
  };

  return (
    <section className={styles.customerFeedbackSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.highlightTitle}>What our</span> <br />
            Customers say
          </h1>

          <div className={styles.feedbackWrapper} ref={feedbackRef}>
            {customerFeedbacks.map((feedback) => (
              <Feedbacks key={feedback.id} customer={feedback} />
            ))}
          </div>

          <div className={styles.arrows}>
            <div className={styles.arrow1} onClick={() => handleScroll("left")}>
              ←
            </div>
            <div
              className={styles.arrow2}
              onClick={() => handleScroll("right")}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersFeedbacksSection;
