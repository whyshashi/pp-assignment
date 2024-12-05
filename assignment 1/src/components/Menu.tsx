import { NavLink } from "react-router-dom";
import { FaHome, FaHistory, FaTicketAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFlightsInfo } from "../redux/action";
import axios from "axios";
export const Menu = () => {
  let dispatch = useDispatch()
 useEffect(()=>{
  axios.get("https://flight-status-mock.core.travelopia.cloud/flights").then((res)=>{
    dispatch(updateFlightsInfo(res.data))
  }).catch((err)=>
    console.log("Error:",err)
  )
 })
  return (
    <nav className="w-64 bg-gray-800 text-white h-full fixed hidden md:block">
      <div className="p-6 font-bold text-xl">petpooja</div>
      <ul className="mt-4">
        <li>
          <NavLink to="/" className="flex items-center p-4 hover:bg-gray-700">
            <FaHome />
            <span className="ml-2">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" className="flex items-center p-4 hover:bg-gray-700">
            <FaHistory />
            <span className="ml-2">History</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets" className="flex items-center p-4 hover:bg-gray-700">
            <FaTicketAlt />
            <span className="ml-2">Tickets</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
