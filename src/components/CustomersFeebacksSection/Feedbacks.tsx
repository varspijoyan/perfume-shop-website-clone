import React from "react";
import styles from "../../styles/CustomerFeedbackSection.module.css";
import { IFeedback } from "../../types";

interface IFeedbackProps {
  customer: IFeedback;
}

const Feedbacks: React.FC<IFeedbackProps> = ({ customer }) => {
  const imageUrl = require(`../../assets/${customer.image}`);
  return (
    <div className={styles.feedbacks}>
      <div className={styles.feedback}>
        <div className={styles.desc}>
          <p className={styles.description}>{customer.feedback}</p>
        </div>
        <div className={styles.customer}>
          <img src={imageUrl} alt="customer image" />
          <div className={styles.customerInfo}>
            <h1 className={styles.fullName}>
              {customer.firstName} {customer.lastName}
            </h1>
            <p className={styles.profession}>{customer.profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
