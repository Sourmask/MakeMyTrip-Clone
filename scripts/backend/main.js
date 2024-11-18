async function fetchData(){
    const response=await fetch('../backend/data.json');
    const data=await response.json();
    return data;
}
  
function FilterData(data,option1,option2) {
    console.log("dept_point: ",option1)
    console.log("arr_point:",option2)

    const finalData = data.flights.filter(obj => 
        obj.dept_point === option1 && obj.arr_point === option2
    );
      
    console.log('Filtered flights:', finalData);
}
  
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

option1.addEventListener('change', async () => {
    const data = await fetchData();
    FilterData(data,option1.value,option2.value);
});
  
option2.addEventListener('change', async () => {
    const data = await fetchData();
    FilterData(data,option1.value,option2.value);
});