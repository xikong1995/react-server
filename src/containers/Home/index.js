import React from "react";

const Home = () => {
  return (
    <div>
      <h1>标题</h1>
      <div style={{ color: "red" }}>Hello React!!</div>
      <button onClick={() => alert("hello world")}>点我</button>
    </div>
  );
};

export default Home;
