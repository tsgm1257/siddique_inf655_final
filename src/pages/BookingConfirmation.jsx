import { useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const BookingConfirmation = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const hasSaved = useRef(false);

  useEffect(() => {
    const saveBooking = async () => {
      if (user && cartItems.length > 0 && !hasSaved.current) {
        hasSaved.current = true;

        await addDoc(collection(db, "bookings"), {
          userId: user.uid,
          items: cartItems,
          total: totalPrice,
          createdAt: serverTimestamp(),
        });

        clearCart();
        toast.success("Your booking has been confirmed!");
      }
    };

    saveBooking();
  }, [cartItems, totalPrice, user, clearCart]);

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-green-600">Thank you!</h1>
      <p className="mt-4">Your booking has been confirmed.</p>
    </div>
  );
};

export default BookingConfirmation;
