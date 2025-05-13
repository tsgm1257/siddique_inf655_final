import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={event.thumbnail} alt={event.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.date} — {event.location}</p>
        <p className="font-bold">${event.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/event/${event.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
