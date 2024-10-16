import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ users }) {
  const { userId } = useParams();

  return (
    <div>
      <h1>Item {userId}</h1>
      <p>Description for Item {userId}</p>
    </div>
  );
}

export default ItemDetail;
