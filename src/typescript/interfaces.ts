export interface IRouteFragment {
  name: string;
  route: string;
}

export interface IRoute {
  name: string;
  route: string;
  exact?: boolean;
  page: React.FunctionComponent;
  subRoutes?: IRoute[];
}
