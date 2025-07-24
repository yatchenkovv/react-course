import { MenuItem } from "./MenuItem";

export const Menu = ({ menuIds }) => {
  return (
    <ul>
      {menuIds.map((id) => (
        <li key={id}>
          <MenuItem id={id} />
        </li>
      ))}
    </ul>
  );
};
