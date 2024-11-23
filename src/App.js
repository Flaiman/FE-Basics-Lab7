import React from "react";
import { Link } from "react-router-dom";
import Header  from "./components/Header";
import Content  from "./components/Content";
import Image from "./components/Image";
import './style.css'

function App() {
  return <div className="App">
      <Header />
      <Content />
      <Image />
      <div class="link">
        <Link to="/page2">Page 2</Link>
      </div>
    </div>;
}

export default App;
