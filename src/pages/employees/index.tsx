import React from "react";
import UserCard from "../../components/userCard";
import axios from "axios";
import { Col, Pagination, Row } from "antd";
import EmployeesList from "../../components/employeesList";

const Employees: React.FunctionComponent = (): JSX.Element => {
  const [usersData, setUsersData] = React.useState<any[]>([]);
  const [displayedUsers, setDisplayedUsers] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(20);

  const fetchUsers = async (shouldExtendList?: boolean) => {
    const {
      data: { results },
    } = await axios.get(`https://randomuser.me/api/?results=55`);

    // initial case
    if (!usersData.length) {
      setUsersData(results);
      setDisplayedUsers(await results.slice(0, 20));
    } else if (shouldExtendList && usersData.length) {
      setUsersData([...usersData, ...results]);
    } else {
      // if state exists without need to extend do nothing
    }
    console.log(displayedUsers);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const DispayUsersCards = () => (
    <>
      {usersData.map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </>
  );

  const listPagination = (page: number, pageSize: number = 20) => {
    console.log(page, pageSize);
    setPage(page);
    setPageSize(pageSize);
    const lowerBound = (page - 1) * pageSize; // multiplication has priority
    const upperBound = lowerBound + pageSize;
    console.log("lowerBound, upperBound", lowerBound, upperBound);

    const newUsersToDisplay = usersData.slice(lowerBound, upperBound);
    setDisplayedUsers(newUsersToDisplay);
  };

  return (
    <Row
      style={{ backgroundColor: "white", paddingTop: "3%", display: "flex" }}
      justify="center"
    >
      <Col span={24} style={{ padding: "2%" }}>
        <EmployeesList users={displayedUsers} fetchUsers={fetchUsers} />
      </Col>
      <Row style={{ marginBottom: "3%" }}>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={20}
          current={page}
          pageSize={pageSize}
          total={usersData.length}
          onChange={listPagination}
          disabled={usersData.length < 10}
          showQuickJumper
        />
      </Row>
      {/* <Row justify="space-around"><DispayUsersCards /></Row> */}
    </Row>
  );
};

export default Employees;
