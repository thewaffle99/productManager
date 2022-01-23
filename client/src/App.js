import React from "react";
import axios from "axios";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" default />
      </Router>
    </div>
  );
}

export default App;
