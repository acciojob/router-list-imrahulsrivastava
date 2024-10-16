import React from "react";
import { Link } from "react-router-dom";

function ItemList({ users }) {
  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
    </ul>
  );
}

export default ItemList;
