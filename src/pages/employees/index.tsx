import React from "react";
import UserCard from "../../components/userCard";
import axios from "axios";
import { Col, Pagination, Row, Radio, Button, Input } from "antd";
import EmployeesList from "../../components/employeesList";
import { RadioChangeEvent } from "antd/lib/radio";

const { Search } = Input;

const Employees: React.FunctionComponent = (): JSX.Element => {
  const [usersData, setUsersData] = React.useState<any[]>([]);
  const [displayedUsers, setDisplayedUsers] = React.useState<any[]>([]);
  const [searchedUsers, setSearchedUsers] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(20);
  const [viewType, setViewType] = React.useState<string>("list");

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
      setPageSize(pageSize + pageSize);
      setDisplayedUsers(await results.slice((page - 1) * pageSize, pageSize));
    } else {
      // if state exists without need to extend do nothing
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const DispayUsersCards = (): JSX.Element => (
    <>
      {(searchedUsers && searchedUsers.length
        ? searchedUsers
        : displayedUsers
      ).map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
      <Col
        span={24}
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
      </Col>
    </>
  );

  const switchUsersView = (e: RadioChangeEvent) => setViewType(e.target.value);

  const listPagination = (page: number, pageSize: number = 20) => {
    setPage(page);
    setPageSize(pageSize);
    const lowerBound = (page - 1) * pageSize; // multiplication has priority
    const upperBound = lowerBound + pageSize;

    const newUsersToDisplay = usersData.slice(lowerBound, upperBound);
    setDisplayedUsers(newUsersToDisplay);
  };

  const onSearch = (value: string) => {
    if (value.length) {
      setSearchedUsers(
        usersData.filter((user: any) => {
          return Object.keys(user).find((key: string) => {
            if (
              typeof user[key] === "string" &&
              user[key].toLowerCase().includes(value.toLowerCase())
            ) {
              return user;
            } else if (typeof user[key] === "object") {
              return Object.keys(user[key]).find((k: string) => {
                if (
                  typeof user[key][k] === "string" &&
                  user[key][k].toLowerCase().includes(value.toLowerCase())
                ) {
                  return user;
                } else return null;
              });
            } else return null;
          });
        })
      );
    } else {
      setSearchedUsers([]);
    }
  };

  return (
    <Row
      style={{ backgroundColor: "white", paddingTop: "3%", display: "flex" }}
      justify="center"
    >
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
        <Radio.Group onChange={switchUsersView} defaultValue="list">
          <Radio.Button value="list">List</Radio.Button>
          <Radio.Button value="card">Cards</Radio.Button>
        </Radio.Group>
      </Col>
      {viewType === "list" ? (
        <Col span={24} style={{ padding: "2%" }}>
          <EmployeesList
            users={
              searchedUsers && searchedUsers.length
                ? searchedUsers
                : displayedUsers
            }
            fetchUsers={fetchUsers}
          />
        </Col>
      ) : (
        <Row justify="space-around">
          <DispayUsersCards />
        </Row>
      )}
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
    </Row>
  );
};

export default Employees;
