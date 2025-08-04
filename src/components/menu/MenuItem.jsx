import { DishCounter } from "../dish-counter/DishCounter";
import { useUser } from "../user-context/use-user";

export const MenuItem = ({ id, showCounter, name, ingredients, price }) => {
  const { userName } = useUser();

  return (
    <>
      {name} ({ingredients.join(", ")}){price} &#x20bd;{" "}
      {userName && showCounter ? <DishCounter dishId={id} /> : null}
    </>
  );
};
