import {IRouteFragment} from '../typescript/interfaces';

const capitalizeFirstLetter = (name: string) => {
  if (name.length > 1) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    return name.toUpperCase();
  }
};

export const getRouteFragments = (url: string): IRouteFragment[] => {
  const pathnameFragments: string[] = url.split('/').filter((element: string) => element !== '');

  const fragmentNamesAndRoutes: IRouteFragment[] = pathnameFragments.map((name: string, index: number) => ({
    name: capitalizeFirstLetter(name),
    route: pathnameFragments
      .slice(0, index + 1)
      .toString()
      .replaceAll(',', '/')
      .concat('/'),
  }));

  return fragmentNamesAndRoutes;
};
