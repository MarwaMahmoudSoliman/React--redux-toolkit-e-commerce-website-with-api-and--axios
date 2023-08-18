import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    setUsers([users?.users?. newUser]);
  
  };

  const deleteUser = (userId) => {
    setUsers(users?.users?.filter((user) => user.id !== userId));
  };

  const editUser = (updatedUser) => {
    setUsers(users?.users?.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    
  };

  return (
    <UsersContext.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UsersContext.Provider>
  );
};