import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AppLayout from "./components/layout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
};

export default App;
