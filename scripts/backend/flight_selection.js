async function fetchData() {
    const response = await fetch('../backend/data.json');
    const data = await response.json();
    return data;
}

const data = await fetchData();
function FilterData(data) {
    const option1 = localStorage.departure;
    const option2 = localStorage.arrival;
    console.log("dept_point: ", option1);
    console.log("arr_point:", option2);

    const finalData = data.flights.filter(obj =>
        obj.dept_point === option1 && obj.arr_point === option2
    );

    console.log('Filtered flights:', finalData);

    for (let i = 0; i < finalData.length && i < 3; i++) {
        const flight = finalData[i];
        document.getElementById(`flightName_${i + 1}`).innerText = flight.name;
        document.getElementById(`flightCode_${i + 1}`).innerText = flight.number;
        document.getElementById(`departureTime_${i + 1}`).innerText = flight.dept_time;
        document.getElementById(`departureFrom_${i + 1}`).innerText = flight.dept_point;
        document.getElementById(`timeDuration_${i + 1}`).innerText = flight.flight_time;
        document.getElementById(`arrivingTime_${i + 1}`).innerText = flight.arr_time;
        document.getElementById(`arrivingTo_${i + 1}`).innerText = flight.arr_point;
        document.getElementById(`flightPrice_${i + 1}`).innerText = `${flight.fare}`;
        document.getElementById(`logo_${i + 1}`).xxxxxxxxxxsrc = flight.logo;

        document.getElementById(`flight_details${i + 1}`).querySelector(`.flightName_${i + 1}`).innerText = flight.name;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.flightCode_${i + 1}`).innerText = flight.number;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.departureTime_${i + 1}`).innerText = flight.dept_time;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.departureFrom_${i + 1}`).innerText = flight.dept_point;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.timeDuration_${i + 1}`).innerText = flight.flight_time;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.arrivingTime_${i + 1}`).innerText = flight.arr_time;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.arrivingTo_${i + 1}`).innerText = flight.arr_point;
        document.getElementById(`flight_details${i + 1}`).querySelector(`.logo_${i + 1}`).src = flight.logo;
    }
}
FilterData(data)


const obj1 = document.getElementById('viewPrices_1');
const obj2 = document.getElementById('viewPrices_2');
const obj3 = document.getElementById('viewPrices_3');

obj1.addEventListener('click', async () => {
    localStorage.setItem("selectedKey",0);
});

obj2.addEventListener('click', async () => {
    localStorage.setItem("selectedKey",1);
});

obj3.addEventListener('click', async () => {
    localStorage.setItem("selectedKey",2);
});
