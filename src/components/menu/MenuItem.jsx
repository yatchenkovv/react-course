import { useSelector } from "react-redux";
import { DishCounter } from "../dish-counter/DishCounter";
import { useUser } from "../user-context/use-user";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const MenuItem = ({ id, showCounter }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { userName } = useUser();
  return (
    <>
      {dish.name} ({dish.ingredients.join(", ")}){dish.price} &#x20bd;{" "}
      {userName && showCounter ? <DishCounter dishId={id} /> : null}
    </>
  );
};
