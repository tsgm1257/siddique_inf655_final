import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Profile = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);
      const bookingData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(bookingData);
    };

    fetchBookings();
  }, [user]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Booking History</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="border p-4 rounded">
              <p className="text-sm text-gray-500">
                Date: {booking.createdAt?.toDate().toLocaleString()}
              </p>
              <ul className="mt-2">
                {booking.items.map((item) => (
                  <li key={item.id}>
                    {item.title} — {item.quantity} ticket(s) — $
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="font-bold mt-2">Total: ${booking.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
