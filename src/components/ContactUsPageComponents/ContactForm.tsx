import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IContactForm, IStyle } from "../../types";

interface IContactFormProps {
  styles: IStyle;
}

const ContactForm: React.FC<IContactFormProps> = ({ styles }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IContactForm>();

  const [data, setData] = useState<IContactForm>();

  const onSubmit = (data: IContactForm) => {
    setData(data);
    reset();
  };

  useEffect(() => {
    console.log(data);
  }, [onSubmit])

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Your name (*)"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name && (
              <div className={styles.error}>
                <p>X</p>
              </div>
            )}
          </div>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="Your email (*)"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email && (
              <div className={`${styles.error} ${styles.emailError}`}>
                <p>X</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={styles.input}>
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: false })}
            />
          </div>
          <div className={styles.input}>
            <select {...register("option", { required: false })}>
              <option value="businessDepartment">Business Department</option>
              <option value="personalDepartment">Personal Department</option>
              <option value="supportDepartment">Support Department</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className={styles.input}>
          <textarea
            placeholder="Your Question*"
            {...register("question", {
              required: true,
            })}
          ></textarea>
          {errors?.question && (
            <div className={`${styles.error} ${styles.errorQuestion}`}>
              <p>X</p>
            </div>
          )}
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
