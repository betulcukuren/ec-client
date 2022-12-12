import React, { FC, useEffect, useState } from 'react';
import { Layout, Table, Space } from 'antd';
import './index.css';
import IProductData from '../../types/Product';
import ProductService from '../../services/ProductService';
import type { TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { FloatButton, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProductForm from './productForm';

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const ProductsPage: FC = () => {

  const [products, setProducts] = useState<Array<IProductData>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    retrieveProducts();
  }, []);
  
  const retrieveProducts = () => {
    ProductService.getAll()
      .then((response: any) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cols = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Amount Unit',
      dataIndex: 'amountUnit',
      key: 'amountUnit',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    sorter: SorterResult<IProductData>,
  ) => {
    setTableParams({
      pagination,
      ...sorter,
    });
  };

  return (
    <Layout className="">
      <Table 
        columns={cols}
        dataSource={products}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      /> 
      <FloatButton
        icon={<PlusOutlined />}
        onClick={showModal}
      /> 
      <Modal title="Add New Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ProductForm />
      </Modal>    
    </Layout>
  );
};

export default ProductsPage;