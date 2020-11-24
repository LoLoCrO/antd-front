import React from "react";
import { IEditEmployeeDrawerContext } from "../state/editEmployeeDrawer";

export const useEditEmployeeDrawer = (): IEditEmployeeDrawerContext => {
  const [isOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const setIsOpen = React.useCallback((open: boolean) => {
    setIsDrawerOpen(open);
  }, []);

  return {
    isOpen,
    setIsOpen,
  };
};
