import { List, Avatar, Skeleton, Button } from "antd";
import React from "react";
import { EmployeeContext } from "../../state/employees";
import { useHistory } from "react-router";

const EmployeesList: React.FunctionComponent<{
  users: any[];
  LoadMore: () => JSX.Element;
}> = ({ users, LoadMore }): JSX.Element | null => {
  const history = useHistory();
  const { setCurrentEmployee } = React.useContext(EmployeeContext);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [usersData, setUsersData] = React.useState<any>(users);

  React.useEffect(() => {
    if (!users) {
      setLoading(true);
    } else {
      setUsersData(Object.assign([], users));
      setLoading(false);
    }
  }, [users]);

  const updateCurrentEmployee = (employee: any) => {
    setCurrentEmployee(employee);
    history.push("/employees/profile");
  };

  if (!users.length) return null;
  else {
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={<LoadMore />}
        dataSource={usersData}
        renderItem={(item: any) => {
          const {
            email,
            name: { title, first, last },
            location: { city, country },
            picture: { medium },
          } = item;

          return (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">edit</a>, // open drawer
                <a
                  onClick={() => updateCurrentEmployee(item)}
                  key="list-loadmore-more"
                >
                  more
                </a>,
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
        }}
      />
    );
  }
};

export default EmployeesList;
