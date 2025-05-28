function addToCart(productID) {
    document.getElementById("createOrderContainer").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    const qty = document.getElementById(productID + "Qty").value;
    const idNum = parseInt(productID.match(/\d+/)[0]);

    document.getElementById("proID").value = idNum;
    document.getElementById("proQty").value = qty;
    let totalPrice = productList[idNum - 1].cost * qty;

    document.getElementById("totalPrice").value = totalPrice;
}


function confirmOrder() {
    if (confirm("Confirm your order?") == true) {
        // Validate input fields
        let idNum = parseInt(document.getElementById("proID").value);
        let qty = parseInt(document.getElementById("proQty").value);
        let totalPrice = parseFloat(document.getElementById("totalPrice").value);
        let custID = document.getElementById("custID").value;
        let custName = document.getElementById("custName").value;
        let custPw = document.getElementById("custPw").value;
        let custTel = document.getElementById("custTel").value;
        let custAddr = document.getElementById("custAddr").value;
        let custCompany = document.getElementById("custCompany").value;
        if (idNum == "" || isNaN(idNum)) {
            alert("The product ID is invalid!");
            document.getElementById("proID").focus();
            return;
        }
        if (qty == "" || qty == 0 || isNaN(qty)) {
            alert("The product number is invalid");
            document.getElementById("proQty").focus();
            return;
        }
        if (custID == "" || isNaN(totalPrice)) {
            alert("The total price is invalid!");
            document.getElementById("totalPrice").focus();
            return;
        }
        if (custName == "") {
            alert("Please fill in your name!");
            document.getElementById("custName").focus();
            return;
        }
        if (custPw == "") {
            alert("Please fill in your password!");
            document.getElementById("custPw").focus();
            return;
        }
        if (custTel == "") {
            alert("Please fill in Contact Number!");
            document.getElementById("custTel").focus();
            return;
        }
        if (custAddr == "") {
            alert("Please fill in address!");
            document.getElementById("custAddr").focus();
            return;
        }
        if (custCompany == "") {
            alert("Please fill in company name!");
            document.getElementById("custCompany").focus();
            return;
        }
        // Check if the product is in stock

        // Check the user info is correct

        // Update server info

        // Alert user
        alert("Order is created successfully!");
        document.getElementById("createOrderContainer").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}

function cancel() {
    if (confirm("Are you sure want to cancel the change?") == true) {
        document.getElementById("createOrderContainer").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}