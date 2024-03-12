import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="m-4 p-4">
      <div className="text-center">
        <span className="text-2xl font-bold">Cart</span>
        <button
          className="m-2 p-2 bg-red-300 hover:bg-red-400 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && <h1 className="text-center">Cart is Empty, please add items</h1>}
      <div className="w-6/12 m-auto">
        <ItemList menuItems={cartItems} cart={true} />
      </div>
    </div>
  );
};

export default Cart;
