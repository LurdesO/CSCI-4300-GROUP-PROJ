import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');

        const responseData = await response.json();

        if (!response.ok) {
          console.log(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
    };
    sendRequest();
  }, []);
  
  return (
    <React.Fragment>
      {loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>);
};


export default Users;
