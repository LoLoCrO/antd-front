import React from "react";
import UserCard from "../../components/userCard";
import axios from "axios";
import { Col, Pagination, Row, Radio, Button, Input, Drawer } from "antd";
import EmployeesList from "../../components/employeesList";
import { RadioChangeEvent } from "antd/lib/radio";
import EmployeesTable from "../../components/employeesTable";
import styled from "styled-components";

const { Search } = Input;

const EmployeesPage = styled(Row)`
  background-color: white;
  display: flex;
  position: relative;
`;

const EmployeesTopBar = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #fff;
  flex-grow: 1;
  padding-top: 2vmin;
  padding-bottom: 2vmin;
  top: 12.2vmin;
  padding-left: 5%;
  padding-right: 5%;
`;

const ListViewWrapper = styled(Col)`
  padding: 2%;
`;

const StyledSearch = styled(Search)`
  width: 200px;
`;

const PaginationWrapper = styled(Row)`
  margin-bottom: 3vmin;
`;

const LoadMoreBtnWrapper = styled(Col)`
  text-align: center;
  margin: 3%;
  height: 32;
  line-height: 32px;
`;

const Employees: React.FunctionComponent = (): JSX.Element => {
  const [usersData, setUsersData] = React.useState<any[]>([]);
  const [displayedUsers, setDisplayedUsers] = React.useState<any[]>([]);
  const [searchedUsers, setSearchedUsers] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(20);
  const [viewType, setViewType] = React.useState<string>("list");
  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const fetchUsers = async (shouldExtendList?: boolean) => {
    const {
      data: { results },
    } = await axios.get(`https://randomuser.me/api/?results=55`);

    // initial case
    if (!usersData.length) {
      results.forEach((user: any, index: number, updatedResults: any[]) => {
        updatedResults[index] = !user.id.value
          ? Object.assign({}, user, {
              id: { value: Math.random() * (9999 - 1000) + 1000 },
            })
          : user;
      });
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

  const LoadMore = () => (
    <LoadMoreBtnWrapper span={24}>
      <Button type="primary" onClick={() => fetchUsers(true)}>
        Load more
      </Button>
    </LoadMoreBtnWrapper>
  );

  const DispayUsersCards = (): JSX.Element => (
    <>
      {(searchedUsers && searchedUsers.length
        ? searchedUsers
        : displayedUsers
      ).map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
      <LoadMore />
    </>
  );

  const ListView = () => (
    <ListViewWrapper span={24}>
      <EmployeesList
        LoadMore={LoadMore}
        users={
          searchedUsers && searchedUsers.length ? searchedUsers : displayedUsers
        }
      />
    </ListViewWrapper>
  );

  const Views = () => {
    switch (viewType) {
      case "list":
        return <ListView />;
      case "table":
        return (
          <>
            <EmployeesTable employees={displayedUsers} />
            <LoadMore />
          </>
        );
      case "card":
        return (
          <Row justify="space-around">
            <DispayUsersCards />
          </Row>
        );
      default:
        return <ListView />;
    }
  };

  const viewTypes: string[] = ["List", "Table", "Card"];

  const RadioOptions = (): JSX.Element => (
    <Radio.Group onChange={switchUsersView} defaultValue={viewType}>
      {viewTypes.map((value: string, index: number) => (
        <Radio.Button key={index} value={value.toLowerCase()}>
          {value}
        </Radio.Button>
      ))}
    </Radio.Group>
  );

  return (
    <EmployeesPage justify="center">
      <EmployeesTopBar>
        <StyledSearch
          placeholder="input search text"
          onSearch={onSearch}
          onChange={(e) => onSearch(e.target.value)}
        />
        <RadioOptions />
      </EmployeesTopBar>
      <Views />
      <PaginationWrapper>
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
      </PaginationWrapper>
      <Drawer
        title="Basic Drawer"
        placement={"right"}
        closable={true}
        onClose={() => setDrawerOpen(false)}
        visible={isDrawerOpen}
        key={""}
      ></Drawer>
    </EmployeesPage>
  );
};

export default Employees;
