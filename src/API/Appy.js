import React from 'react';
import axios from 'axios';
const  Appy= () => {
const userToPatch = {
  firstName: 'foo',
};

const handleClick = async () => {
  const response = await axios
      .patch('', userToPatch)
      .catch((error) => console.log('Error: ', error));
  if (response && response.data) {
      console.log(response);
      console.log(response.data);
  }
};
return (
  <div>
      <button onClick={handleClick}>Update</button>
  </div>
)}
  export default Appy ;