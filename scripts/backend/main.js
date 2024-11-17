// async function fetchData() {
//     const response = await fetch('../backend/data.json');
//     const data = await response.json();
//     return data;
// }

// const selector = document.getElementById('option1');
// async function dept() {
//     selector.addEventListener('change', async (event) => {
//         const selectedValue = event.target.value;
//         console.log('Selected value:', selectedValue); // for debug
//         const data = await fetchData();
//         const matchingData = data.flights.filter(obj => obj.destination === selectedValue);
//         console.log('Matching flights:', matchingData); // for debug
//         return matchingData
//     });
// }

async function fetchData(){ // 5
    const response=await fetch('../backend/data.json');
    const data=await response.json();
    return data;
}
  
function getSelectedValues() { // 4
    const option1=document.getElementById('option1').value;
    const option2=document.getElementById('option2').value;
    console.log({ selectedValue1: option1, selectedValue2: option2 })
    return { selectedValue1: option1, selectedValue2: option2 };
}
  
function processMatchingData(matchingData1, matchingData2,option1,option2) { // 6
    const combineData = [];
    for (let i = 0; i < matchingData1.length; i++) {
        for (let j = 0; j < matchingData2.length; j++) {
            if (matchingData1[i].id === matchingData2[j].id) {
            combineData.push(matchingData1[i]);
            }
        }
    }
    console.log('Combined data:', combineData);
    console.log("dept_point: ",option1)
    console.log("arr_point:",option2)

}
  
async function getMatchingData() { // 3
    const { selectedValue1, selectedValue2 } = getSelectedValues(); 
    console.log('dept_point:', selectedValue1);
    console.log('arr_point', selectedValue2);
  
    const data = await fetchData();
  
    const matchingData1 = data.flights.filter(flight => flight.dept_point === selectedValue1);
    const matchingData2 = data.flights.filter(flight => flight.destination === selectedValue2);
    
    console.log('flights from dept_point', matchingData1);
    console.log('flgihts from arr_point', matchingData2);
    return {matchingData1, matchingData2};
}
  
const option1 = document.getElementById('option1'); // 1
const option2 = document.getElementById('option2'); // 2
  
option1.addEventListener('change', async () => {
    const {matchingData1, matchingData2} = await getMatchingData(); // 3
    processMatchingData(matchingData1, matchingData2,option1.value,option2.value); // 6
});
  
option2.addEventListener('change', async () => {
    const {matchingData1, matchingData2} = await getMatchingData(); // 3
    processMatchingData(matchingData1, matchingData2,option1.value,option2.value); // 6
});
  
  