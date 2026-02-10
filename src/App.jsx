import React, { useRef } from "react";
import Book from "./Book";
import "./App.css";

function App() {
  const bookRef = useRef();

  return (
    <div className="app-container">
      <div className="system-guide-bar">
        <p>브라우저 창을 키우거나 전체 화면으로 보시면 더욱 쾌적하게 감상하실 수 있습니다.</p>
      </div>

      <Book ref={bookRef} />
    </div>
  );
}

export default App;
