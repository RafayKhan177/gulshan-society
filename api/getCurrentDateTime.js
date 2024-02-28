export default function getCurrentDateTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Format the date to "dd/mm/yyyy"
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  // Format the time to "hh:mm AM/PM"
  let hours = currentDate.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  // Return the formatted date and time string as an object
  return {
    date: `${day}/${month}/${year}`,
    time: `${hours}:${minutes} ${ampm}`
  };
}

// Example usage:
// console.log(getCurrentDateTime());
