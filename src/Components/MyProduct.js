import { useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";   
import Card from 'react-bootstrap/Card'              
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function MyProduct (){
    const products =useSelector((state) =>state.products);
    console.log(products)
const dispatch =useDispatch();
useEffect(()=> {
dispatch(fetchProducts());
},[]);

  return(
<Container>
<Row > 
<div className="bg-dark pb-5 container">
      <p className="h1 text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient">
        Our Products
      </p>

      <div className="row row-cols-3  mx-0 gap-4 justify-content-center " style={{marginRight:"20px"}}>
    {products.map((product) =>(
      
                             
                         
                    
        <Col key={product.id}>

<Card style={{ width: '18rem' ,height:"800px" ,position:"relative"}} className="bg-warning">
  <Card.Img variant="top" src={product.image} style={{ width: '100%' ,height:"50em" }} />
  <Card.Body>
    <Card.Title style={{ width: '100%' ,height:"100px" }}>{product.title}</Card.Title>
    <Card.Text>
     {product.description}
    </Card.Text>
    <Card.Text>
     {product.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>dispatch(addToCart(product))} style={{position:"absolute" ,bottom:"20px"}}>Add to cart</Button>
  </Card.Body>

</Card>

</Col>

    ))}
</div>


</div>

</Row>

</Container>

  )
}
export default MyProduct;