import React, { FC, useEffect, useState } from 'react';
import { Layout, Table, FloatButton, Space, Modal } from 'antd';
import './index.css';
import CompanyService from '../../services/CompanyService';
import ICompanyData from '../../types/Company';
import type { TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { PlusOutlined } from '@ant-design/icons';

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const CompaniesPage: FC = () => {
  const [companies, setCompanies] = useState<Array<ICompanyData>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    retrieveProducts();
  }, []);
  
  
  const retrieveProducts = () => {
    CompanyService.getAll()
      .then((response: any) => {
        setCompanies(response.data);
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
      dataIndex: 'companyName',
      key: 'name',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Legal Number',
      dataIndex: 'legalNumber',
      key: 'legalNumber',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
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
    sorter: SorterResult<ICompanyData>,
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
        dataSource={companies}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      /> 
      <FloatButton
        icon={<PlusOutlined />}
        onClick={showModal}
      /> 
      <Modal title="Add New Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>   
    </Layout>
  );
};

export default CompaniesPage;