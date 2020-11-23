import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory, Link } from "react-router-dom";
import { routes } from "../../routes";
import { IRoute } from "../../typescript/interfaces";

const DynamicMenu = (props: any) => {
  const history = useHistory();
  const [openKeys, setOpenKeys] = React.useState<string[]>([]);

  const handleSubMenuRootRouting = (route: string) => {
    history.push(route);
  };

  const handleOpenKeys = (index: number | string) => {
    const key = typeof index === "number" ? index.toString() : index;
    if (openKeys.includes(key)) {
      const newKeys = openKeys.filter((k) => k !== key);
      setOpenKeys(newKeys);
    } else {
      setOpenKeys([...openKeys, key]);
    }
  };

  const renderMenuItem = ({
    route,
    name,
    index,
  }: {
    route: string;
    name: string;
    index: number;
  }): JSX.Element => (
    <Menu.Item key={index} onClick={() => handleOpenKeys(index)}>
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
    index: number | string;
    subRoutes: any[];
  }): JSX.Element => (
    <SubMenu
      key={`sub${index}`}
      title={
        <div
          onClick={() => {
            handleSubMenuRootRouting(route);
            handleOpenKeys(`sub${index}`);
          }}
        >
          {name}
        </div>
      }
    >
      {subRoutes.map(({ route, name, subRoutes }, index) =>
        subRoutes?.length
          ? renderSubMenu({ route, name, subRoutes, index: `sub${index}` })
          : renderMenuItem({ route, name, index })
      )}
    </SubMenu>
  );

  const DynamicMenu = (): JSX.Element => (
    <Menu theme="dark" mode="inline" openKeys={openKeys}>
      {routes
        .filter((route: IRoute) => !route.hideInNavigation)
        .map(({ route, name, subRoutes }: IRoute, index) =>
          subRoutes?.length
            ? renderSubMenu({ name, route, index, subRoutes })
            : renderMenuItem({ route, name, index })
        )}
    </Menu>
  );

  return <DynamicMenu {...props} />;
};

export default DynamicMenu;
