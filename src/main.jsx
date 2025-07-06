import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((resturant) => {
      return (
        <div key={resturant.id}>
          <h2 style={{ color: "green" }}>{resturant.name}</h2>
          <h3>Меню</h3>
          {
            <ul>
              {resturant.menu.map((dish) => (
                <li key={dish.id}> {dish.name} </li>
              ))}
            </ul>
          }
          <h3>Отзывы</h3>
          {
            <ul>
              {resturant.reviews.map((review) => (
                <li type="none" key={review.id}>
                  - {review.text}
                </li>
              ))}
            </ul>
          }
          <hr />
        </div>
      );
    })}
  </div>
);
