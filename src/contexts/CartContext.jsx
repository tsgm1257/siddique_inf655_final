import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (event, quantity = 1) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === event.id);
      if (exists) {
        return prev.map((item) =>
          item.id === event.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...event, quantity }];
    });
  };

  const updateQuantity = (eventId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === eventId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (eventId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== eventId));
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
