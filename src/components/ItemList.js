import React from "react";
import { Link } from "react-router-dom";

function ItemList({ users }) {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>Item {user.id}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ItemList;
