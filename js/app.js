const api_key = 'de7d3dabf8a20aa777efefb270bd2fe9';
const loadTemparature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayContent(data))
}
function displayContent(data){
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;

    const city = document.getElementById('city');
    city.innerText = data.name;

    const weatherType = document.getElementById('weatherType');
    weatherType.innerText = data.weather[0].main;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    loadTemparature(searchText);

    searchField.value = '';
})

loadTemparature('dhaka');