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

    const key = localStorage.selectedKey;

    const selectedData = finalData[key]

    console.log("Selected flight:",finalData[key]);

    document.getElementById("duration").innerText = selectedData.flight_time;
    document.getElementById("logo").src = selectedData.logo;
    document.getElementById("airline").innerText = selectedData.name;
    document.getElementById("flightCode").innerText = selectedData.number;
    document.getElementById("time1").innerText = selectedData.dept_time;
    document.getElementById("time2").innerText = selectedData.arr_time;
    document.getElementById("location1").innerText = selectedData.dept_point;
    document.getElementById("departureCity").innerText = selectedData.dept_point;
    document.getElementById("location2").innerText = selectedData.arr_point;
    document.getElementById("destination").innerText = selectedData.arr_point;
    document.getElementById("baseFareAmount").innerText = selectedData.fare;
    document.getElementById("totalAmountValue").innerText = selectedData.fare;

    if (selectedData.dept_point === "New Delhi") {
        document.getElementById("details1").innerText = "Indira Gandhi International Airport";
    } 
    else if (selectedData.dept_point === "Mumbai") {
        document.getElementById("details1").innerText = "Chhatrapati Shivaji Maharaj Airport";
    } 
    else if (selectedData.dept_point === "Kolkata") {
        document.getElementById("details1").innerText = "Netaji Subhas Chandra Bose Airport";
    }

    if (selectedData.arr_point === "New Delhi") {
        document.getElementById("details2").innerText = "Indira Gandhi International Airport";
    } 
    else if (selectedData.arr_point === "Mumbai") {
        document.getElementById("details2").innerText = "Chhatrapati Shivaji Maharaj Airport";
    } 
    else if (selectedData.arr_point === "Kolkata") {
        document.getElementById("details2").innerText = "Netaji Subhas Chandra Bose Airport";
    }
}
FilterData(data)