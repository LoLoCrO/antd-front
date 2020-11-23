import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/employees/profile";
import Employees from "./pages/employees";
import SubHome from "./pages/home/subhome";
import Bla from "./pages/home/subhome/bla";
import { IRoute } from "./typescript/interfaces";

export const routes: IRoute[] = [
  {
    name: "Profile",
    route: "/employees/profile",
    exact: true,
    page: Profile,
    hideInNavigation: true,
  },
  { name: "Index", route: "/", exact: true, page: Home },
  {
    name: "Home",
    route: "/home",
    exact: true,
    page: Home,
    subRoutes: [
      {
        name: "SubHome0",
        route: "/home/subhome0",
        exact: true,
        subRoutes: [
          {
            name: "Bla",
            route: "/home/subhome0/bla",
            exact: true,
            page: Bla,
          },
        ],
        page: SubHome,
      },
      {
        name: "SubHome1",
        route: "/home/subhome1",
        exact: true,
        page: SubHome,
      },
      {
        name: "SubHome2",
        route: "/home/subhome2",
        exact: true,
        page: SubHome,
      },
    ],
  },
  { name: "Employees", route: "/employees", exact: true, page: Employees },
  { name: "Employees0", route: "/employees0", exact: true, page: Employees },
];

const AllRoutesAndSubRoutesPages = ({ routes }: { routes: IRoute[] }): any =>
  routes
    .map(({ route, exact, page, subRoutes }: IRoute) => {
      if (!subRoutes || !subRoutes.length) {
        return (
          <Route key={route} exact={exact} path={route} component={page} />
        );
      } else {
        return [
          <Route key={route} exact={exact} path={route} component={page} />,
          ...AllRoutesAndSubRoutesPages({ routes: subRoutes }),
        ];
      }
    })
    .flat(3);

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <AllRoutesAndSubRoutesPages routes={routes} />
    </Switch>
  );
};

export default Routes;
