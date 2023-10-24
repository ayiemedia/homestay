// Get the check-in and check-out date elements
const checkinDateInput = document.getElementById("checkin-date");
const checkoutDateInput = document.getElementById("checkout-date");

// Get the price input element
const priceInput = document.getElementById("price-input");

// Define the daily rate
const dailyRate = 120; // RM120 per day

// Function to calculate the price
function calculatePrice() {
  const checkinDate = new Date(checkinDateInput.value);
  const checkoutDate = new Date(checkoutDateInput.value);

  if (!isNaN(checkinDate) && !isNaN(checkoutDate)) {
    const duration = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24); // Calculate the duration in days
    const totalPrice = duration * dailyRate;
    
    // Set the value of the price input
    priceInput.value = `RM ${totalPrice.toFixed(2)}`;
  } else {
    priceInput.value = "Invalid dates";
  }
}

// Add an event listener to the date inputs to trigger the price calculation
checkinDateInput.addEventListener("input", calculatePrice);
checkoutDateInput.addEventListener("input", calculatePrice);
