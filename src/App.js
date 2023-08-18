

import './App.css';


import { Route,Routes } from 'react-router-dom';
import MyFooter from './Components/MyFooter';

import UsersTable from './Components/UsersTable';
import MyForm from "./Components/MyForm"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import MyCarty from './Components/MyCarty';

import Aboutme from'./Components/Pages/Aboutme'
import MyNav from './Components/MyNav';
import MyProduct from './Components/MyProduct';
 import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
 <MyNav/>
 <Login/>

      <Routes>
        <Route path="/home" element={<Home />} />
  <Route path='/cart' element={<MyCarty/>}></Route>
      <Route path='/pro' element={<MyProduct/>}></Route>

        <Route path="/user" element={<UsersTable />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/about" element={<Aboutme />} />
     
        
      </Routes>
    

      <MyFooter />
    </div>
  );
}

export default App;