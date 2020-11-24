import React from "react";
import { IEmployeesContext } from "../state/employees";

export const useEmployees = (): IEmployeesContext => {
  const [employees, setEmployees] = React.useState<any[]>([]);

  const setCurrentEmployees = React.useCallback((currentEmployees: any[]) => {
    setEmployees(currentEmployees);
  }, []);

  return {
    employees,
    setCurrentEmployees,
  };
};
