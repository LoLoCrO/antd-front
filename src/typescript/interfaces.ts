export interface IRouteFragment {
  name: string;
  route: string;
}

export interface IRoutes {
  name: string;
  route: string;
  exact?: boolean;
  page: JSX.Element | React.FunctionComponent;
  subRoutes?: IRoutes[];
}
