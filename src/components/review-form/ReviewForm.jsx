import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";
import styles from "./ReviewForm.module.css";
import { Button } from "../Button/Button";
import { useEffect } from "react";

export const ReviewForm = ({
  onSubmit,
  disabledSubmit,
  editableReview,
  onEditable,
}) => {
  const { form, setName, setReview, incrementRating, decrementRating, clear } =
    useForm();

  useEffect(() => {
    if (editableReview) {
      setReview(editableReview.text);
      setName(editableReview.name);
    }
  }, [editableReview]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
      <div className={styles.controlWrapper}>
        <label className={styles.highlightText}>Имя</label>
        <input
          type="text"
          value={form.name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={styles.controlWrapper}>
        <label className={styles.highlightText}>Отзыв</label>
        <input
          type="text"
          value={form.text}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>

      <div className={styles.controlWrapper}>
        <label className={styles.highlightText}>Рейтинг</label>
        <Counter
          onClickIncrement={incrementRating}
          onClickDecrement={decrementRating}
          value={form.rating}
        />
      </div>
      <br />
      <Button title={"Очистить"} onClickHandle={clear} />
      <Button
        title={"Отправить"}
        onClickHandle={() =>
          editableReview
            ? onEditable({
                reviewId: editableReview.id,
                text: form.text,
              })
            : onSubmit(form)
        }
        disabled={disabledSubmit}
      />
      <br />
    </form>
  );
};
