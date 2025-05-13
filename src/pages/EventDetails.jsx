import { useParams } from "react-router";
import events from "../data/data";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const EventDetails = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === parseInt(eventId));
  const { addToCart } = useCart();

  if (!event) {
    return <div className="text-center p-8">Event not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={event.thumbnail} alt={event.title} className="w-full h-72 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price:</strong> ${event.price}</p>
      <p className="mt-4">{event.description}</p>

      <button
        onClick={() => {
          addToCart(event);
          toast.success(`${event.title} added to cart!`);
        }}
        className="btn btn-primary mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default EventDetails;
