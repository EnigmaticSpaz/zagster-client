const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)


var my_data = []
var pattern = []

function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChart);
}

//If you type https://zagster-service.herokuapp.com/rides/count/per_month in your web browser, you'll see this data
//"2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],


function perYear(data) {

    var data2017 = data[2017]  

    console.log(data2017[0][1]) 
    my_data.push(data2017[0][1]) 
    console.log(data2017[1][2])  
    my_data.push(data2017[1][2])
    console.log(data2017[2][3])
    my_data.push(data2017[2][3])
    console.log(data2017[3][4])
    my_data.push(data2017[3][4])
    console.log(data2017[4][5])
    my_data.push(data2017[4][5])
    console.log(data2017[5][6])
    my_data.push(data2017[5][6])
    console.log(data2017[6][7])
    my_data.push(data2017[6][7])
    console.log(data2017[7][8])
    my_data.push(data2017[7][8])
    console.log(data2017[8][9])
    my_data.push(data2017[8][9])
    console.log(data2017[9][10])
    my_data.push(data2017[9][10])
    console.log(data2017[10][11])
    my_data.push(data2017[10][11])
    console.log(data2017[11][12])
    my_data.push(data2017[11][12])


    //keep going to get all data points

    //challenge - use a loop to extract the data
    //challenge extract the keys from the JSON data instead of manually typing them into the chart
     
  }

function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',

        // The data for our dataset
        data: {
            labels: ['January','February','March','April','May','June','July','August','September', 'October','November','December'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2016',
                backgroundColor: [
                  '#A9A9A9',
                  '#fd7e14',
                  '#A9A9A9',
                  '#dc3545',
                  '#fd7e14',
                  '#dc3545',
                  '#A9A9A9',
                  '#fd7e14',
                  '#A9A9A9',
                  '#dc3545',
                  '#fd7e14',
                  '#dc3545'
                ],
                borderColor: '#dc3545',
                data: my_data,
            }]
        },
        

        // Configuration options go here
        options: {}
    });
}
// Chart.defaults.polarArea.animation.animateRotate = true;