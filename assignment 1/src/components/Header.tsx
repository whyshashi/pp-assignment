import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateFlightsInfo } from "../redux/action";
import { FlightInfo } from "../redux/reducer";

export const Header = () => {
  const dispatch = useDispatch();


  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const response = await axios.get("https://flight-status-mock.core.travelopia.cloud/flights");
    
    const filteredFlights: FlightInfo [] = response.data.filter((flight:FlightInfo) => 
      flight.flightNumber.toLowerCase().includes(query) || 
      flight.airline.toLowerCase().includes(query)
    );
    dispatch(updateFlightsInfo(filteredFlights));
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white sticky top-0">
      <h1 className="text-lg font-bold hidden md:block">petpooja</h1>
      <div className="flex items-center justify-center bg-slate-200 rounded-md">
      <FaSearch className="ml-2 text-blue-600 " />
      <input 
        type="text" 
        placeholder="Search Flights" 
        className="p-2 rounded border-none text-black outline-none bg-transparent"
        onChange={handleSearch}
      />
      
      </div>
     
    </header>
  );
};
