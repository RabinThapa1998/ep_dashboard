import React from "react";
import { Input, Button, Form } from "antd";
import { useMutation } from "@tanstack/react-query";
import { request } from "~/components/util";
const { TextArea } = Input;

export function Dashboard() {
  const { mutate } = useMutation((values: any) =>
    request({
      url: "/sets",
      method: "POST",
      data: values,
    })
  );
  const onFinish = async (values: any) => {
    await mutate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <div className="px-2 py-4 shadow-lg rounded-md w-1/3">
        <h2>Create sets</h2>
        <Form
          name="sets"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Set Name"
            name="name"
            rules={[{ required: true, message: "Set name is required!" }]}
          >
            <Input placeholder="Set Name" />
          </Form.Item>
          <Form.Item label="Set Description" name="description">
            <TextArea placeholder="Set Description" rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
