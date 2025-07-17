import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";
import styles from "./ReviewForm.module.css";
import { Button } from "../Button/Button";

export const ReviewForm = () => {
  const { form, setName, setReview, incrementRating, decrementRating, clear } =
    useForm();

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
          value={form.review}
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
      <Button title={"Очистить"} theme={"highlight"} onClickHandle={clear} />
      <br />
    </form>
  );
};
