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
     {
      id: 'u2',
      name: 'Local Shelters',
      image:
      'home.png',
    },
     {
      id: 'u3',
      name: 'Weather',
      image:
      'rainy-day.png',
    },
     {
      id: 'u4',
      name: 'Mental Health Resources',
      image:
      'mental-health.png',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
