import React, { FC} from 'react';
import { Layout } from 'antd';
import './index.css';
import { Card, Col, Row } from 'antd';

const HomePage: FC = () => {

  return (
    <Layout className="">
      <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Last added companies" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Last added products" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Informations about data" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
  );
};

export default HomePage;