import { DishCounter } from "../dish-counter/DishCounter";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          {dish.name} ({dish.ingredients.join(", ")}){dish.price} &#x20bd;{" "}
          <DishCounter />
        </li>
      ))}
    </ul>
  );
};
