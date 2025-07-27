import { MenuItem } from "./MenuItem";
import { Link } from "react-router";

export const Menu = ({ menuIds, showCounter }) => {
  return (
    <ul>
      {menuIds.map((id) => (
        <li key={id}>
          <Link to={`/dish/${id}`}>
            <MenuItem id={id} showCounter={showCounter} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
