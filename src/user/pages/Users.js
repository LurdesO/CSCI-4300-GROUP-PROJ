import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Athens Area Emergency Food Bank',
      image:
      'diet.png',
    },

    {
      id: 'u1',
      name: 'The Food Bank of Northeast Georgia',
      image:
      'plate.png',
    },

    {
      id: 'u2',
      name: 'Little Free Pantry',
      image:
      'dish.png',
    },

    {
      id: 'u2',
      name: 'Ebenezer Baptist Church',
      image:
      'vegetables.png',
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
