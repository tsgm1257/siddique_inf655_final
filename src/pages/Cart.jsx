import { useCart } from "../contexts/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500 underline">Browse events</Link></p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded mb-3"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price} x</p>
              </div>

              <input
                type="number"
                min="1"
                className="input input-bordered w-20"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />

              <p className="font-bold">${item.price * item.quantity}</p>

              <button onClick={() => removeFromCart(item.id)} className="btn btn-error btn-sm">
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/booking-confirmation" className="btn btn-primary mt-4">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
