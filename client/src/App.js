import React from "react";
import axios from "axios";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./views/Main";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" default />
        <Detail path="/api/product/:id" />
      </Router>
    </div>
  );
}

export default App;
