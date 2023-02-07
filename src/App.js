import React from "react";
import "./App.scss";
import Pagination from "./Component/Pagination";
import Search from "./Component/Search";
import Stories from "./Component/Stories";

const App = () => {
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  );
};

export default App;
