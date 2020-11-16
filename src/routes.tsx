import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Employees from './pages/employees';
import SubHome from './pages/home/subhome';
import Bla from './pages/home/subhome/bla';
import { IRoutes } from './typescript/interfaces';

export const routes: IRoutes[] = [
  {name: 'Index', route: '/', exact: true, page: <Home />},
  {
    name: 'Home',
    route: '/home',
    exact: true,
    page: <Home />,
    subRoutes: [
      {
        name: 'SubHome0',
        route: '/home/subhome0',
        exact: true,
        subRoutes: [{name: 'Bla', route: '/home/subhome0/bla', exact: true, page: <Bla />}],
        page: <SubHome />,
      },
      {name: 'SubHome1', route: '/home/subhome1', exact: true, page: <SubHome />},
      {name: 'SubHome2', route: '/home/subhome2', exact: true, page: <SubHome />},
    ],
  },
  {name: 'Employees', route: '/employees', page: <Employees />},
];

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {routes.map(({route, exact, page}) => (
        <Route key={route} exact={exact} path={route}>
          {page}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
