import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
     {
      id: 'u1',
      name: 'Local Food Banks',
      image:
      'diet.png',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
