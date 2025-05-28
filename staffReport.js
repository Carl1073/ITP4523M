function showChart() {
    const xValues = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7", "Product8"];
    const yValues = [100, 200, 300, 500, 300, 130, 20, 0];
    const barColors = ["red", "green", "blue", "orange", "brown", "purple", "pink", "yellow"];

    new Chart("salesChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },

            title: {
                display: true,
                text: "Total Product Sales"
            }
        }
    });
}

function showImage(orderID) {
    document.getElementById("imgContainer").style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function closeImg(){
    document.getElementById("imgContainer").style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        console.log('Escape key pressed');
        // Add your logic here
        if(document.getElementById('imgContainer').style.display == 'flex'){
            closeImg();
        }
    }
});