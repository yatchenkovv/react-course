import { DishCounter } from "../dish-counter/DishCounter";
import { useUser } from "../user-context/use-user";

export const Menu = ({ menu }) => {
  const { userName } = useUser();

  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          {dish.name} ({dish.ingredients.join(", ")}){dish.price} &#x20bd;{" "}
          {userName ? <DishCounter /> : null}
        </li>
      ))}
    </ul>
  );
};
