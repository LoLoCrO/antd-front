import React from "react";

export interface IEmployeeContext {
  employee: any;
  setCurrentEmployee: (currentEmployee: any) => void;
}

export interface IEmployeesContext {
  employees: any[];
  setCurrentEmployees: (currentEmployees: any[]) => void;
}

export const DEFAULT_CURRENT_EMPLOYEE: IEmployeeContext = {
  employee: {},
  setCurrentEmployee: () => {},
};

export const DEFAULT_CURRENT_EMPLOYEES: IEmployeesContext = {
  employees: [],
  setCurrentEmployees: () => {},
};

export const EmployeeContext = React.createContext<IEmployeeContext>(
  DEFAULT_CURRENT_EMPLOYEE
);

export const EmployeesContext = React.createContext<IEmployeesContext>(
  DEFAULT_CURRENT_EMPLOYEES
);
