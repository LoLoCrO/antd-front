import React from "react";
import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const UserCard = (user: any) => {
  //   console.log(user);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [userData, setUserData] = React.useState<any | null>(null);

  React.useEffect(() => {
    if (!user) {
      setLoading(true);
    } else {
      setUserData(Object.assign({}, user));
      setLoading(false);
    }
  }, [user]);

  if (!userData) {
    return (
      <Card
        style={{ width: 350, margin: "1%" }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={true} avatar active>
          <Meta
            avatar={<Avatar src={""} />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    );
  } else {
    const {
      email,
      name,//: { title, first, last },
      location,//: { city, country },
      picture,//: { medium },
    } = userData;
    return (
      <Card
        style={{ width: 350, margin: "1%" }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src={''} />}
            title={email}
            description={`${name}, ${location}`}
          />
        </Skeleton>
      </Card>
    );
  }
};

export default UserCard;
