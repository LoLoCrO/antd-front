import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Employees from "./pages/employees";
import SubHome from "./pages/home/subhome";
import Bla from "./pages/home/subhome/bla";

const Routes = (): JSX.Element => {
  const routes = [
    { route: "/", exact: true, page: <Home /> },
    { route: "/home", exact: true, page: <Home /> },
    { route: "/home/subhome", exact: true, page: <SubHome /> },
    { route: "/home/subhome/bla", exact: true, page: <Bla /> },
    // { route: "/home", page: <Home pageName={"Home"} /> },
    // { route: "/about", page: <About pageName={"About"} /> },
    // { route: "/contact", page: <Contact pageName={"Contact"} /> },
    { route: "/employees", page: <Employees  /> },
  ];

  return (
    <Switch>
      {routes.map(({ route, exact, page }) => (
        <Route key={route} exact={exact} path={route}>
          {page}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
