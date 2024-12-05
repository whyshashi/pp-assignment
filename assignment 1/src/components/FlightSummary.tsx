import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useSelector } from "react-redux";

interface Flight {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export const FlightSummary = () => {
  const recentFlights = useSelector((state: any) => state.flights.recent);

  const formatTime = (time: string) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recentFlights.map((flight: Flight) => (
        <div key={flight.id} className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl">{flight.airline}</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaPlaneDeparture className="mr-2" />
              <span>{formatTime(flight.departureTime)} - {flight.origin}</span>
            </div>
            <div className="flex items-center">
              <FaPlaneArrival className="mr-2" />
              <span>{formatTime(flight.departureTime)} - {flight.destination}</span>
            </div>
          </div>
          <p className={`mt-2 p-2 rounded-full text-center ${flight.status === 'On Time' ? 'bg-green-600' : 'bg-red-600'}`}>
            {flight.status}
          </p>
        </div>
      ))}
    </div>
  );
};
