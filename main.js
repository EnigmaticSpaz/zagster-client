
// const BASE_URL = "https://zagster-service.herokuapp.com"

// $(updateView)

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


// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
// }

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides)
// }

// // $.getJSON(BASE_URL + "/rides/locations_and_times" , updatelocationTime)
// // function updatelocationTime(data) {
// //     locationTime = data.count
// //     $("h2#locationTime").html(locationTime)
// // //   }

// // const STATIONS = {
// //     'columbia_simpson': {
// //       latitudeRange: {min: 44.048745, max: 44.049205},
// //       longitudeRange: {min: -121.32598, max: -121.32534}
// //     },
// //     'drake_park': {
// //       latitudeRange: {min: 44.058705, max: 44.059165},
// //       longitudeRange: {min: -121.31667, max: -121.31603 }
// //     },
// //     'g5': {
// //       latitudeRange: {min: 44.05733, max: 44.05779},
// //       longitudeRange: {min: -121.31425, max: -121.31361}
// //     },
// //     'galveston': {
// //       latitudeRange: {min: 44.056495, max: 44.056955},
// //       longitudeRange: {min: -121.328415, max: -121.327775}
// //     },
// //     'grc': {
// //       latitudeRange: {min: 44.04412, max: 44.04458},
// //       longitudeRange: {min: -121.324075, max: -121.323435}
// //     },
// //     'old_mill': {
// //       latitudeRange: {min: 44.04351, max: 44.04397},
// //       longitudeRange: {min: -121.316145, max: -121.315505}
// //     },
// //     'osu_cascades': {
// //       latitudeRange: {min: 44.04276, max: 44.04322},
// //       longitudeRange: {min: -121.333995, max: -121.333355}
// //     },
// //     'ten_barrel': {
// //       latitudeRange: {min: 44.060185, max: 44.060645},
// //       longitudeRange: {min: -121.313305 , max: -121.312665}
// //     }
// //   }
  
// //   module.exports = STATIONS

