import React from 'react';

import UsersList from '../components/UsersList';

const Users1 = () => {
  const USERS1 = [
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
      'shelter.png',
    },
     {
      id: 'u3',
      name: 'Weather',
      image:
      'weather.png',
    },
     {
      id: 'u4',
      name: 'Mental Health Resources',
      image:
      'mental.png',
    },
  ]

  return <UsersList items={USERS1} />;
};

export default Users1;
