// export function fetcher(file_name) {
//   return fetch(file_name)
//       .then(response => response.json())
//       .then(data => {
//         // const flight_data = JSON.stringify(data);
//         console.log('Fetched data:', data);
//         return data;
//       });
// };

function showDiv(idName){
  document.getElementById(idName)
    .classList.remove("hidden");
};

function hideDiv(idName){
  document.getElementById(idName)
    .classList.add("hidden");
}

function toggleDetails(card) {
  const idName="flight_details"+card
  const buttonName="button"+card
  var details = document.getElementById(idName);
  if (details.classList.contains("hidden")) {
      showDiv(idName);
      document.getElementById(buttonName).innerText="Hide Flight Details"
    } else {
      hideDiv(idName);
      document.getElementById(buttonName).innerText="Show Flight Details"
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const option1 = document.getElementById('option1');
  option1.addEventListener('change', function() {
      if (option1.value === "New Delhi") {
          document.getElementById("dept_airport").innerText = "Indira Gandhi International Airport";
      } 
      else if (option1.value === "Mumbai") {
          document.getElementById("dept_airport").innerText = "Chhatrapati Shivaji Maharaj Airport";
      } 
      else if (option1.value === "Kolkata") {
          document.getElementById("dept_airport").innerText = "Netaji Subhas Chandra Bose Airport";
      } 
  });
  const option2 = document.getElementById('option2');
  option2.addEventListener('change', function() {
      if (option2.value === "New Delhi") {
          document.getElementById("arr_airport").innerText = "Indira Gandhi International Airport";
      } 
      else if (option2.value === "Mumbai") {
          document.getElementById("arr_airport").innerText = "Chhatrapati Shivaji Maharaj Airport";
      } 
      else if (option2.value === "Kolkata") {
          document.getElementById("arr_airport").innerText = "Netaji Subhas Chandra Bose Airport";
      } 
  });
});
