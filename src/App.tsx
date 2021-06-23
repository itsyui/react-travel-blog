import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Main } from "./Main";
import "./data/datasource";
import "./commands";

const App: React.FC = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
