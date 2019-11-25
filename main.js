const BASE_URL = "https://zagster-service.herokuapp.com"

// // Pop-up greeting
// function greeter(name){
//     alert("Welcome to " + name + " data visualization")
// }
// greeter("Liss Meehan's")

// var person = {name: "Liss", age: 26, car: {model: "Mazda", year: 2014} }
// console.log("My name is "+ person.name)
// console.log("My age is "+person.age)
// console.log("My car is a "+person.car.year+", "+person.car.model)
// console.log('BROOOOOK!')

// if (person.age > 90)[
//     alert("Holy moly you're ancient!")
// ]

// add(2,3);
// function add(num1, num2) {
//     answer = num1 + num2;
//     console.log("The answer is: " + answer)
//     return answer;
// }

// var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
// var year_list = data[2016]
// console.log('year list is '+year_list)

// console.log(year_list[0][9])
// console.log(year_list[1][10])
// console.log(year_list[2][11])
// console.log(year_list[3][12])





let years = []
let months2016 = []
let months2017 = []
let months2018 = []


function perYear(data) {
    for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month)
        months2016.push(data[2016][index][month])
}
console.log("2016 data by months is easy "+months2016)





// Getting JSON data 
$(updateView)

function updateView() {
$.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
$.when ($.getJSON(BASE_URL + "/rides/count/per_month",perYear),
    ).then(updateChart);

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}




// The Graph 
$(updateGraph)

function updateGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(253, 126, 20)',
            borderColor: 'rgb(220, 53, 69)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
}