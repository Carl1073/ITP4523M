function deleteOrder(orderID) {
    const date = new Date(document.getElementById(orderID + "Date").innerHTML);
    const today = new Date();
    const dayDiff = (date - today)/86400000; //no of day from today to delivery date
    if (dayDiff <= 2) {
        alert("Order have been delivered or are being delivered.\nCannot cancel order!");
    } else if (confirm("Are you sure want to delete this order") == true) {
        //delete order from server

        //Update the material Quantity item

        //delete order on client side
        document.getElementById(orderID).remove();
        //alert user
        alert("Order delete success!");
    }
}