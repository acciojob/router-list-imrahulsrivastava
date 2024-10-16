import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:userId" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
