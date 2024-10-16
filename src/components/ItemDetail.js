import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ users }) {
  const { userId } = useParams();

  return (
    <div>
      <h1>Item {userId}</h1>
      <p>{users[userId - 1].company.catchPhrase}</p>
    </div>
  );
}

export default ItemDetail;
