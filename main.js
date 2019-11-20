const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}

// $.getJSON(BASE_URL + "/rides/locations_and_times" , updatelocationTime)
// function updatelocationTime(data) {
//     locationTime = data.count
//     $("h2#locationTime").html(locationTime)
//   }