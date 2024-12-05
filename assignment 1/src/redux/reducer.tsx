import { SET_FLIGHT_DATA_Info, SET_RECENT_FLIGHT_DATA_Info } from "./action";
 export interface FlightInfo {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

interface FlightState {
  flightData: FlightInfo[];
  recentFlightData: FlightInfo[];
}

interface SetFlightInfoAction {
  type: string;
  payload: FlightInfo[];
}

const initialState: FlightState = {
  flightData: [],
  recentFlightData: [],
};




export const flightReducer = (state = initialState, action : SetFlightInfoAction ) => {
  switch (action.type) {
    case SET_FLIGHT_DATA_Info:
      return {
        ...state,
        flightData: action.payload,
       
      };
      case SET_RECENT_FLIGHT_DATA_Info:
        return {
          ...state,
          recentFlightData: action.payload,
        };
    default:
      return state;
  }
};
