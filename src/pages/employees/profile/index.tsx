import React from "react";
import { AppPage } from "../../../components/appPage";
import { EmployeeContext } from "../../../state/employees";

const Profile: React.FunctionComponent = (): JSX.Element => {
  const employee = React.useContext(EmployeeContext);
    console.log(employee)
  return <AppPage>{JSON.stringify(employee)}</AppPage>;
};

export default Profile;
