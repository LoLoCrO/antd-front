import { List, Avatar, Skeleton, Button } from "antd";
import React from "react";

const EmployeesList: React.FunctionComponent<{
  users: any[];
  LoadMore: () => JSX.Element;
}> = ({ users, LoadMore }): JSX.Element | null => {
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
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={medium} />}
                  title={
                    <a href="">{`${title}. ${first} ${last} | ${city}, ${country}`}</a>
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
