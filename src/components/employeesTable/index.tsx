import React from "react";
import { Table, Avatar, Image, Row, Col } from "antd";
import styled from "styled-components";

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledRow = styled(Row)`
  padding: 2%;
`;

const EmployeesTable: React.FunctionComponent<any> = ({
  employees,
}): JSX.Element => {
  const columns: any[] = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text: string, { key, picture }: any) => (
        <StyledRow key={key} align="middle">
          <Col span={4}>
            <Avatar src={<Image src={picture} />} />
          </Col>
          <Col span={20}>{text}</Col>
        </StyledRow>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: string, { key }: any) => <a key={key}>{text}</a>,
    },
  ];

  const formattedEmployees = employees.map(
    (
      {
        email,
        name: { title, first, last },
        location: { city, country },
        picture: { large },
      }: any,
      index: number
    ) => ({
      key: index,
      picture: large,
      user: `${title}. ${first} ${last}`,
      location: `${city}. ${country}`,
      email,
    })
  );

  return (
    <StyledTable
      pagination={false}
      columns={columns}
      dataSource={formattedEmployees.length ? formattedEmployees : []}
    />
  );
};

export default EmployeesTable;
