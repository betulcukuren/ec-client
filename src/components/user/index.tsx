import React, { FC, useState, useEffect } from 'react';
import { Layout } from 'antd';
import './index.css';
import IUserData from '../../types/User';
import UserService from '../../services/UserService';

const UserPage: FC = () => {

  const [users, setUsers] = useState<Array<IUserData>>([]);

  useEffect(() => {
    retrieveUsers();
  }, []);
  
  
  const retrieveUsers = () => {
    UserService.getAll()
      .then((response: any) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Layout className="">

    </Layout>
  );
};

export default UserPage;