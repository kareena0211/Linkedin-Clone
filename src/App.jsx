import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
};

export default App;
