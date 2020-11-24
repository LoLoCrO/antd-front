import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Tooltip } from "antd";
import React from "react";
// import styled from "styled-components";
import { EmployeeContext } from "../../state/employees";

const { Option } = Select;

// const DrawerTitle = styled(Row)`
// `;

const EditEmployeeDrawer = ({
  isDrawerOpen,
  setDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const employee = React.useContext(EmployeeContext);

  React.useEffect(() => console.log("Ladica"), []);

  const DrawerTitle = () => (
    <Row justify="space-between" align="middle">
      <Col span={12}>Edit Employee</Col>
      <Col span={12}>
        <Button type="ghost"></Button>
      </Col>
    </Row>
  );
  return (
    <Drawer
      width={"40%"}
      closeIcon={<CloseCircleOutlined />}
      title={<DrawerTitle />}
      placement={"right"}
      closable={true}
      onClose={() => setDrawerOpen(false)}
      visible={isDrawerOpen}
    >
      <Row justify="space-around" align="middle">
        <Col span={24}></Col>
        <Col span={24}></Col>
        <Col span={24}></Col>
        <Col span={24}></Col>
        <Col span={24}></Col>
      </Row>

      <Form
        name="complex-form"
        // onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Username">
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          <Tooltip title="Useful information">Need Help?</Tooltip>
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={["address", "province"]}
              noStyle
              rules={[{ required: true, message: "Province is required" }]}
            >
              <Select placeholder="Select province">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "street"]}
              noStyle
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Input street" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default React.memo(EditEmployeeDrawer);
