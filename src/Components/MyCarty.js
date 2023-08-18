import Button from "react-bootstrap/Button";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../rtk/slices/cart-slice";
import { clear } from "../rtk/slices/cart-slice";

function MyCarty() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <Container>
      <h1 className="py-5">Welcome to cart</h1>

      <Button variant="primary" className="mt-3" onClick={() => dispatch(clear())}>
        Clear cart
      </Button>
      <h5>Total Price: {totalPrice.toFixed(2)}</h5>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.image} style={{ width: "100px", height: "100px" }} alt={product.title} />
              </td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MyCarty;