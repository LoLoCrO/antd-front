import { List, Avatar, Skeleton, Button } from "antd";
import React from "react";

const EmployeesList: React.FunctionComponent<{
  users: any[];
  fetchUsers: (shouldExtendList?: boolean) => Promise<void>;
}> = ({ users, fetchUsers }): JSX.Element | null => {
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

  const LoadMore = (): JSX.Element => (
    <div
      style={{
        textAlign: "center",
        margin: "3%",
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button type="primary" onClick={() => fetchUsers(true)}>
        Load more
      </Button>
    </div>
  );
  //   (
  //     <div style={{ height: "50px", backgroundColor: "red" }}>
  //       <Button onClick={() => fetchUsers(true)}>loading more</Button>
  //     </div>
  //   );

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
                <div>content</div>
              </Skeleton>
            </List.Item>
          );
        }}
      />
    );
  }
};

export default EmployeesList;
