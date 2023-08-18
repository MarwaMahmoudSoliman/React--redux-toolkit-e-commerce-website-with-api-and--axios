
import React, { useContext, useState } from 'react';

import { UsersContext } from '../Context/context/UsersContext';
const UsersTable = () => {
  const { users, addUser, deleteUser, editUser } = useContext(UsersContext);
  const [editingUserId, setEditingUserId] = useState(null);
  const [firstName, setFirstName] = useState(''); 
  const [lastName,setLastName] = useState(''); 
  const [image, setImage] = useState('');

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      firstName, 
      lastName, 
      image,
    };

    addUser(newUser);
    clearForm();
  };

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setFirstName(user.firstName); 
    setLastName(user.lastName); 
    setImage(user.image);
  };

  const handleUpdate = () => {
    const updatedUser = {
      id: editingUserId,
      firstName, 
      lastName, 
      image,
    };

    editUser(updatedUser);
    clearForm();
  };

  const clearForm = () => {
    setEditingUserId(null);
    setFirstName(''); 
    setLastName(''); 
    setImage('');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>fname</th>
          <th>lastname</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
              <img src={user.image} alt={user.name} style={{ width: '50px', height: '50px' }} />
            </td>
            <td>
              {editingUserId === user.id ? (
                <>
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={clearForm}>Cancel</button>
                </>
              ) : (
                <>
                  <button  className="bg-primary border-none p-2"onClick={() => handleEdit(user)}>Edit</button>
                  <button className="bg-danger border-none p-2" onClick={() => handleDelete(user.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <input type="text" value={firstName} className='bg-primary border-none p-2'onChange={(e) => setFirstName(e.target.value)} placeholder="firstname" />
          </td>
          <td>
            <input type="text" value={lastName}className='bg-primary border-none p-2' onChange={(e) => setLastName(e.target.value)} placeholder="lastname" />
          </td>
          <td>
            <input type="text" className='bg-primary border-none p-2' value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
          </td>
          <td>
            {editingUserId ? (
              <>
                <button onClick={handleUpdate} className='bg-primary border-none p-2'>Update</button>
                <button onClick={clearForm} className='bg-primary border-none p-2'>Cancel</button>
              </>
            ) : (
              <button onClick={handleAdd} className='bg-warning border-none p-2'>Add</button>
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default UsersTable;

