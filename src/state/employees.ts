import React from "react";

export interface IEmployeeContext {
  employee: any;
  setCurrentEmployee: (currentEmployee: any) => void;
}

export const DEFAULT_CURRENT_USER: IEmployeeContext = {
  employee: {},
  setCurrentEmployee: () => {},
};

export const EmployeesContext = React.createContext<any[]>([]);
export const EmployeeContext = React.createContext<IEmployeeContext>(
  DEFAULT_CURRENT_USER
);
