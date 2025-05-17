import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/GetOffersSection.module.css";
import { EmailForm } from "../../types";

const GetOffersSection: React.FC = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<EmailForm>();
  const [data, setData] = useState<EmailForm>();
  const onSubmit = (data: EmailForm) => {
    setData(data);
  };

  return (
    <section className={styles.getOffersSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Get Latest <span className={styles.highlightTitle}>Offers</span>
        </h1>
        <p className={styles.description}>
          Enter your email to get monthly special offers and great deals!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.inputContainer}
        >
          <input
            type="email"
            placeholder="ENTER EMAIL"
            {...register("email", {
              required: {
                value: true,
                message: "Please fill the field",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
        {errors?.email?.message && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
    </section>
  );
};

export default GetOffersSection;
