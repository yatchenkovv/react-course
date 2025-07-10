import { Counter } from "../counter/Counter";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          {dish.name} ({dish.ingredients.join(", ")}){dish.price} &#x20bd;{" "}
          <Counter />
        </li>
      ))}
    </ul>
  );
};
