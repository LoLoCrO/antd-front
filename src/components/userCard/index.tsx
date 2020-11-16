import React from "react";
import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const UserCard = (user: any) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  //   setTimeout(() => setLoading(!loading), 2000);
  return (
    <Card
      style={{ width: 350, margin: '1%' }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
};

export default UserCard;
