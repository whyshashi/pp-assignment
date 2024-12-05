export function formatDepartureTime(departureTime: string): string {
  const date = new Date(departureTime);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  
  const isPM = hours >= 12;
  const adjustedHours = isPM ? hours - 12 : hours;
  const formattedHours = adjustedHours === 0 ? 12 : adjustedHours;
  
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const amPm = isPM ? "PM" : "AM";
  
  return `${formattedHours}:${formattedMinutes} ${amPm}`;
}

export function getRandomFormattedTime(formattedTime: string): string {
  const [time, amPm] = formattedTime.split(" ");
  const [hoursStr, minutesStr] = time.split(":");
  
  let hours = parseInt(hoursStr);
  const minutes = parseInt(minutesStr);
  
  const isPM = amPm === "PM";
  const militaryHours = isPM && hours !== 12 ? hours + 12 : (amPm === "AM" && hours === 12) ? 0 : hours;
  
  const randomAddition = Math.floor(Math.random() * 24) + 1;
  const newMilitaryHours = (militaryHours + randomAddition) % 24;
  
  const newAmPm = newMilitaryHours >= 12 ? "PM" : "AM";
  const newHours = newMilitaryHours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${newHours}:${formattedMinutes} ${newAmPm}`;
}
