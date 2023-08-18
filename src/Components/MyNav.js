import React from 'react'
import { Container,Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import shopping_cart from"./images/shopping_cart.png"


import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from"./images/logo.png"
import { useSelector } from 'react-redux'


export default function MyNav(){
  const cart =useSelector(state => state.cart)
  return (
   <>

     <Navbar  collapseOnSelect fixed='top' variant='pink' expand="sm" className="bg-body-tertiary bg-light  "     >

      <Container className="text-light bg-secondary "style={{width:"100%"}} >
    

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Link to='/' className='navbar-brand'>



                <div>
              <img  src={logo}  style={{ height: "15vh", width:"15vh",borderRadius:"50%"  }}></img>
              </div>


                </Link>
         
              
          
          
          <Nav >
            <Container  style={{display:"flex", justifyContent:"space-evenly" , width:"50em",marginLeft:"14em"}}>
          <Link className="nav-link"style={{color:"orange",textDecoration:"none"}} to={'/home'}>Home</Link>
          <Link  className="nav-link" style={{color:"orange",textDecoration:"none"}}to={'/cart'}>Cart - <FontAwesomeIcon icon={faCartShopping} />{cart.length}</Link>
          <Link  className="nav-link" style={{color:"orange",textDecoration:"none"}}to='/pro' >   shop</Link>
          
          
          <Link className="nav-link" style={{color:"orange",textDecoration:"none"}}to={'/user'}>Users</Link>
       
            <Link  className="nav-link"style={{color:"orange",textDecoration:"none"}} to={'/form'}>Contact</Link>
            <Link  className="nav-link" style={{color:"orange",textDecoration:"none"}} to={'/about'}>About</Link>

       </Container>
       
          
          </Nav>
         
              <div>
              <img  src={shopping_cart}  style={{ height: "5vh", width:"5vh",borderRadius:"50%"  }}></img>
              </div>
{/*       
            </Container> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   </>
  )
}
