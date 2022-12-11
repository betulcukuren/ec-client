import React, { FC, useState} from 'react';
import { Layout, Form, Input } from 'antd';
import './index.css';

const ProductForm: FC = () => {
  
  const [form] = Form.useForm();

  return (
    <Layout className="">
      <Form
        layout='horizontal'
        form={form}
        >
        <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default ProductForm;