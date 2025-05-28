function detail(orderId) {
    document.getElementById("detailContainer").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    // Fetch order details from the server

    // Fill in details

}

function closeDetail() {
    document.getElementById("detailContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function updateOrder() {
    if (confirm("Are you sure you want to update this order?")) {
        // check if the number is correct
        let proQty = parseInt(document.getElementById("proQty").value);
        let materialQty = [];
        let reservedMaterial = document.getElementsByClassName("reservedMaterial");
        //check if the quantity is a number
        if (isNaN(proQty) || proQty <= 0) {
            alert("Please enter a valid quantity");
            document.getElementById("proQty").focus();
            return;
        }
        let usedMaterial = document.getElementsByClassName("usedMaterial");

        for (let i = 0; i < reservedMaterial.length; i++) {
            //check if the reserved material quantity is a number
            let reservedMaterialItem = parseFloat(reservedMaterial[i].value);
            if (isNaN(reservedMaterialItem) || reservedMaterialItem <= 0) {
                alert("Please enter a valid reserved material quantity");
                reservedMaterial[i].focus();
                return;
            }
            let usedMaterialItem = parseFloat(usedMaterial[i].innerHTML);
            //check if the reserved material is greater used material quantity is a number
            if (reservedMaterialItem < usedMaterialItem) {
                alert("Please enter a reserved material quantity that is greater than or equal to the used material quantity");
                reservedMaterial[i].focus();
                return;
            }
        }
    }

    // Send request to server to update the order

    
    alert("Order updated!");
}

function acceptOrder() {
    if (confirm("Are you sure you want to accept this order?")) {
        // Send request to server to accept the order
        alert("Order accepted!");
        // Refresh the order list

        closeDetail();
    }
}

function rejectOrder() {
    if (confirm("Are you sure you want to reject this order?")) {
        // Send request to server to reject the order
        alert("Order rejected!");
        // Refresh the order list

        closeDetail();
    }
}

