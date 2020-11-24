import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AppLayout from "./components/layout";
import { EmployeeContext, EmployeesContext } from "./state/employees";
import { useEmployee } from "./hooks/employee.hook";
import { useEmployees } from "./hooks/employees.hook";
import "./App.css";

const App = () => {
  const employee = useEmployee();
  const employees = useEmployees();

  React.useEffect(() => console.log(employees), [employees]);

  return (
    <EmployeesContext.Provider value={employees}>
      <EmployeeContext.Provider value={employee}>
        <Router>
          <AppLayout>
            <Routes />
          </AppLayout>
        </Router>
      </EmployeeContext.Provider>
    </EmployeesContext.Provider>
  );
};

export default App;
