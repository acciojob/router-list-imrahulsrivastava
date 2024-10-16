import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ users }) {
  const { userId } = useParams();

  return (
    <div>
      <h1>Item Detail</h1>
      <p>{users[userId].company.catchPhrase}</p>
    </div>
  );
}

export default ItemDetail;
