fetch("../backend/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.flights[0].name)
    })