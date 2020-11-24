import React from "react";

export interface IEditEmployeeDrawerContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const DEFAULT_IS_EDIT_EMPLOYEE_DRAWER_OPEN: IEditEmployeeDrawerContext = {
  isOpen: false,
  setIsOpen: () => {},
};

export const EditEmployeeDrawerContext = React.createContext<IEditEmployeeDrawerContext>(
  DEFAULT_IS_EDIT_EMPLOYEE_DRAWER_OPEN
);
