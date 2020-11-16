import React from "react";
import UserCard from "../../components/userCard";
import axios from "axios";
import { Col, Row } from "antd";

const Employees: React.FunctionComponent = (): JSX.Element => {
  const [usersData, setUsersData] = React.useState<any[]>([]);

  const fetchUsers = async () => {
    const {
      data: { results },
    } = await axios.get(`https://randomuser.me/api/?results=5`);
    setUsersData(results);
    console.log(results);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const DispayUsersCards = () => (
    <>
      {usersData.map((user: any) => (
        <UserCard user={user} />
      ))}
    </>
  );

  return (
    <Row style={{ backgroundColor: "white", paddingTop: "3%", display: "flex" }}>
      <Col span={24} style={{  paddingLeft: "3%", paddingBottom: "3%"}}>Empolyees</Col>
      <Row justify="space-around">
        <DispayUsersCards />
      </Row>
    </Row>
  );
};

export default Employees;
