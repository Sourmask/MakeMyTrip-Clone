// export function fetcher(file_name) {
//   return fetch(file_name)
//       .then(response => response.json())
//       .then(data => {
//         // const flight_data = JSON.stringify(data);
//         console.log('Fetched data:', data);
//         return data;
//       });
// };

function showDiv(){
  document.getElementById("flight_details")
    .classList.remove("hidden");
};

function hideDiv(){
  document.getElementById("flight_details")
    .classList.add("hidden");
}

function toggleDetails() {
  var details = document.getElementById("flight_details");
  if (details.classList.contains("hidden")) {
      showDiv();
      document.getElementById("detail_button").innerText="Hide Flight Details"
    } else {
      hideDiv();
      document.getElementById("detail_button").innerText="Show Flight Details"
  }
}
