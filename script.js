// To create a unit converter using HTML, CSS, and JavaScript, follow these steps in a concise approach:
// Approach to Create a Unit Converter
// 1. HTML Structure:
//     * Use a form with input fields and dropdowns for value entry, source unit, and target unit.
//     * Include a button to trigger the conversion.
//     * Display the conversion result dynamically.
// 2. CSS Styling:
//     * Use simple styles for layout, spacing, and element alignment.
//     * Style the button for hover effects to enhance user interaction.
// 3. JavaScript Logic:
//     * Define conversion rates in an object for different units.
//     * Listen for the "click" event on the convert button.
//     * Retrieve the input value, source unit, and target unit.
//     * Perform the conversion using the defined rates.
//     * Display the result to the user.
// This approach keeps the solution modular, with clear separation of HTML, CSS, and JavaScript, and ensures the user can interact with the app intuitively.

// let conversionRates = {
//   kilometer: 1000,
//   meter: 1,
//   centimeter: 0.01,
//   milimeter: 0.001,
//   inch: 39.3701,
// };

const conversionRates = {
  kilometer: 1000,
  meter: 1,
  centimeter: 0.01,
  millimeter: 0.001,
  inch: 39.3701,
};

document.getElementById("convertButton").addEventListener("click", function () {
  const value = parseFloat(document.getElementById("value").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid number greater than zero.");
    return;
  }

  const result = convertUnits(value, fromUnit, toUnit);
  document.getElementById(
    "conversionResult"
  ).textContent = `${result} ${toUnit}`;
});

function convertUnits(value, fromUnit, toUnit) {
  const valueInMeters = value * conversionRates[fromUnit];
  return (valueInMeters / conversionRates[toUnit]).toFixed(4); 
}
