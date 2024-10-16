import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar.js";
import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList users={users} />} />
          <Route path="/users/:userId" element={<ItemDetail users={users} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
