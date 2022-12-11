import React, { FC, useEffect, useState } from 'react';
import { Layout } from 'antd';
import './index.css';
import CompanyService from '../../services/CompanyService';
import ICompanyData from '../../types/Company';

const CompaniesPage: FC = () => {
  const [companies, setCompanies] = useState<Array<ICompanyData>>([]);

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

  return (
    <Layout className="">
        { companies.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.id}</td>
              <td>{listValue.name}</td>
              <td>{listValue.legalNumber}</td>
              <td>{listValue.website}</td>
            </tr>
          );
        })}
    </Layout>
  );
};

export default CompaniesPage;