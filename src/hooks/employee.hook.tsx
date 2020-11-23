import React from "react";
import { IEmployeeContext } from "../state/employees";

export const useEmployee = (): IEmployeeContext => {
  const [employee, setEmployee] = React.useState<any>({});

  const setCurrentEmployee = React.useCallback((currentEmployee: any) => {
    setEmployee(currentEmployee);
  }, []);

  return {
    employee,
    setCurrentEmployee,
  };
};
