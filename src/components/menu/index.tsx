import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory, Link } from "react-router-dom";
import { routes } from "../../routes";

const DynamicMenu = (props: any) => {
  const history = useHistory();
  const handleSubMenuRootRouting = (route: string) => history.push(route);

  const renderMenuItem = ({
    route,
    name,
    index,
  }: {
    route: string;
    name: string;
    index: number;
  }): JSX.Element => (
    <Menu.Item key={index}>
      <Link to={route}>{name}</Link>
    </Menu.Item>
  );

  const renderSubMenu = ({
    name,
    route,
    index,
    subRoutes,
  }: {
    name: string;
    route: string;
    index: number;
    subRoutes: any[];
  }): JSX.Element => (
    <SubMenu
      key={`sub${index}`}
      title={name}
      onTitleClick={() => handleSubMenuRootRouting(route)}
    >
      {subRoutes.map(({ route, name, subRoutes }, index) =>
        subRoutes?.length
          ? renderSubMenu({ route, name, subRoutes, index })
          : renderMenuItem({ route, name, index })
      )}
    </SubMenu>
  );

  const DynamicMenu = (): JSX.Element => (
    <Menu>
      {routes.map(({ route, name, subRoutes }, index) =>
        subRoutes?.length
          ? renderSubMenu({ name, route, index, subRoutes })
          : renderMenuItem({ route, name, index })
      )}
    </Menu>
  );

  return <DynamicMenu {...props} />;
};

export default DynamicMenu;
