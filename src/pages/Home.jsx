import { useState } from "react";
import eventsData from "../data/data";
import EventCard from "../components/EventCard";

const Home = () => {
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Sort events
  const sortedEvents = [...eventsData].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "date") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  // 2. Filter by title (case-insensitive)
  const filteredEvents = sortedEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Upcoming Events</h1>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="select select-bordered max-w-xs"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="date">Date (Soonest)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
