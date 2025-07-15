import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";

const DEFAULT_STATE = {
  name: "",
  text: "",
  rating: 0,
};

export const ReviewForm = () => {
  const { form, setName, setReview, incrementRating, decrementRating, clear } =
    useForm();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Имя</label>
        <input
          type="text"
          value={form.name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Отзыв</label>
        <input
          type="text"
          value={form.text}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontWeight: "bold" }}>Рейтинг</label>
        <Counter
          onClickIncrement={incrementRating}
          onClickDecrement={decrementRating}
          value={form.rating}
        />
      </div>

      <button
        style={{
          marginTop: "10px",
          width: "150px",
          padding: "10px",
          backgroundColor: "#F44336",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={clear}
      >
        Очистить
      </button>
      <br />
    </form>
  );
};
