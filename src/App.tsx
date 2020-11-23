import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AppLayout from "./components/layout";
import "./App.css";
import { EmployeeContext } from "./state/employees";
import { useEmployee } from "./hooks/employee.hook";

const App = () => {
  const employee = useEmployee();

  return (
    <EmployeeContext.Provider value={employee}>
      <Router>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Router>
    </EmployeeContext.Provider>
  );
};

export default App;
