import React from "react";
import Comments from "./comments/commentList/Comments";
import { data } from "./comments/data";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Comments</h1>
      </header>
      <main>
        <Comments comments={data} />
      </main>
    </div>
  );
}

export default App;
