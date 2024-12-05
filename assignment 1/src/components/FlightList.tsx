import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FlightList = () => {
  const flights = useSelector((state: any) => state.flightData);
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 10;

  const totalPages = Math.ceil(flights.length / flightsPerPage);
  
  const statusColors: { [key: string]: string } = {
    "Delayed": "text-white bg-purple-500",
    "On Time": "text-white bg-blue-600",
    "Boarding": "text-white bg-orange-500",
    "default": "text-white bg-slate-500"
  };

  function getColor(status: string) {
    return statusColors[status] || statusColors["default"];
  }

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  return (
    <div className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md px-3 md:px-0">
      <table className="min-w-full">
        <thead className="bg-gray-800 text-white sticky top-0">
          <tr>
            <th className="px-2 py-6 text-center">Flight Number</th>
            <th className="px-2 py-6 text-center">Airline</th>
            <th className="px-2 py-6 text-center">Origin</th>
            <th className="px-2 py-6 text-center hidden md:table-cell">Destination</th>
            <th className="px-2 py-6 text-center hidden md:table-cell">Departure Time</th>
            <th className="px-2 py-6 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight: any) => (
            <tr
              key={flight.id}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate(`/flight/${flight.id}`)}
            >
              <td className="px-2 py-6 text-center">{flight.flightNumber}</td>
              <td className="px-2 py-6 text-center">{flight.airline}</td>
              <td className="px-2 py-6 text-center">{flight.origin}</td>
              <td className="px-2 py-6 text-center hidden md:table-cell">
                {flight.destination}
              </td>
              <td className="px-2 py-6 text-center hidden md:table-cell">
                {new Date(flight.departureTime).toLocaleString()}
              </td>
              <td
                className={`flex justify-center items-center mt-5 px-1 py-2 rounded-lg text-center ${getColor(
                  flight.status
                )}`}
              >
                {flight.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-2 bg-gray-300 rounded-md"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-2 bg-gray-300 rounded-md"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
