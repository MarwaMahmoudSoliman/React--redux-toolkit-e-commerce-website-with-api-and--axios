


import React from 'react';
import axios from 'axios';
const  AxiosApi= ({ id }) => {
   const handleDelete = async () => {
      try {
         const response = await axios.delete(`https://dummyjson.com/users/${id}`);
         console.log(response.data);
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <button onClick={handleDelete}>
         Delete
      </button>
   );
};





export default AxiosApi;
