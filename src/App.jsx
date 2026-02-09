import React, { useRef } from "react";
import Book from "./Book";
import "./App.css";

function App() {
  const bookRef = useRef();

  return (
    <div className="app-container">
      <Book ref={bookRef} />
    </div>
  );
}

export default App;
