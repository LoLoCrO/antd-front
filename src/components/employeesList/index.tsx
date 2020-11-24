import { List, Avatar, Skeleton, Button } from "antd";
import React from "react";
import { EmployeeContext } from "../../state/employees";
import { useHistory } from "react-router";

const EmployeesList: React.FunctionComponent<{
  users: any[];
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  LoadMore: () => JSX.Element;
}> = ({ users, setDrawerOpen, LoadMore }): JSX.Element | null => {
  const history = useHistory();
  const { setCurrentEmployee } = React.useContext(EmployeeContext);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [usersData, setUsersData] = React.useState<any>([]);

  React.useEffect(() => {
    console.log("lista");
    if (usersData.length) {
      
      return;
    } else if (!users) {
      console.log("usersData.length false");
      setLoading(true);
    } else {
      console.log("usersData.length false false");
      setUsersData(Object.assign([], users));
      setLoading(false);
    }
  }, [users]);

  const updateCurrentEmployee = (employee: any) => {
    setCurrentEmployee(employee);
    history.push("/employees/profile");
  };

  const editEmployee = (employee: any) => {
    setCurrentEmployee(employee);
    setDrawerOpen(true);
  };

  if (!users.length) return null;
  else {
    const ListItem = React.memo(({ item }: { item: any }) => {
      const {
        email,
        name: { title, first, last },
        location: { city, country },
        picture: { medium },
      } = item;
      return (
        <List.Item
          actions={[
            <Button
              type="link"
              onClick={() => editEmployee(item)}
              key="list-loadmore-edit"
            >
              edit
            </Button>, // open drawer
            <Button
              type="link"
              onClick={() => updateCurrentEmployee(item)}
              key="list-loadmore-more"
            >
              more
            </Button>,
          ]}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={<Avatar src={medium} />}
              title={
                <a
                  onClick={() => updateCurrentEmployee(item)}
                >{`${title}. ${first} ${last} | ${city}, ${country}`}</a>
              }
              description={`${email}`}
            />
          </Skeleton>
        </List.Item>
      );
    });
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={<LoadMore />}
        dataSource={usersData}
        renderItem={(item: any) => <ListItem item={item} />}
      />
    );
  }
};

export default React.memo(EmployeesList);
