export const SET_FLIGHT_DATA_Info = "SET_FLIGHT_DATA_Info";
export const SET_RECENT_FLIGHT_DATA_Info: string = "SET_RECENT_FLIGHT_DATA_Info";
interface dataType {
  id: number,
  flightNumber: string,
  airline: string,
  origin: string,
  destination: string,
  departureTime: string,
  status: string,
  
}

export const updateFlightsInfo = (flights:dataType[]) => ({
  type: SET_FLIGHT_DATA_Info,
  payload: flights,
});
export const currentStatusDataUpdateInfo = (data: dataType[]) => {
  return {
    type: SET_RECENT_FLIGHT_DATA_Info,
    payload: data,
  };
};