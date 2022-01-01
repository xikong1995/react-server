import React from "react";

import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ color: "red" }}>Hello React!!</div>
      <button onClick={() => alert("hello world")}>点我</button>
    </div>
  );
};

export default Home;
