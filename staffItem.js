function productInsert() {
    document.getElementById("detailContainer").style.display = 'none';
    document.getElementById("insertContainer").style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function deleteProduct(productID) {
    const deliveryQty = document.getElementById(productID + "DeliveryQty").innerHTML;
    if (deliveryQty > 0) { // Product is in delivering order (phase 2)
        alert("Products are still delivering.\nCannot delete product!");
    } else if (confirm("Are you sure want to delete this order") == true) {
        // Delete product from server

        // Delete product on client side
        document.getElementById(productID).remove();
        // Alert user
        alert("Product delete success!");
    }
}

function hideDetail() {
    document.getElementById("detailContainer").style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        console.log('Escape key pressed');
        // Add your logic here
        if(document.getElementById('detailContainer').style.display == 'flex'){
            hideDetail();
        }
    }
});

function showDetail(productID) {
    document.getElementById("insertContainer").style.display = 'none';
    document.getElementById("detailContainer").style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    const proID = document.getElementById(productID + "ID").innerHTML;
    const proName = document.getElementById(productID + "Name").innerHTML;
    const proCost = document.getElementById(productID + "Cost").innerHTML;
    const proDeliveryQty = document.getElementById(productID + "DeliveryQty").innerHTML;
    document.getElementById("detailID").value = proID;
    document.getElementById("detailName").value = proName;
    document.getElementById("detailCost").value = proCost;
    document.getElementById("detailDelivery").value = proDeliveryQty;
}

function materialFormAdd() {
    const container = document.getElementById("materialContainer");
    const materialFormat = `
<div class="materialForm">
    <div class="materialFormDiv">
        <div class="formLabel">Material ID: </div>
        <input class="matID" value="">
    </div>

    <div class="materialFormDiv">
        <div class="formLabel">Material Quantity: </div>
        <input class="matQty" value="">
    </div>
    <button class="materialRemove" onclick="materialFormDelete(this.parentElement)">Remove</button>
</div>
`
    container.innerHTML += materialFormat;
}

function materialFormDelete(element) {
    element.remove();
}

function materialArray() {
    const matID = document.getElementsByClassName("matID");
    const matQty = document.getElementsByClassName("matQty");

    let matList = [];
    for (i = 0; i < matID.length; i++) {
        let id = matID[i].value;
        let qty = parseFloat(matQty[i].value);
        if (isNaN(qty)) {
            continue;
        }
        if (id == "") {
            continue;
        }
        // Check id is present in material list (phase 2)
        matList.push([id, qty]);
    }
    console.log(matList);
    return matList;
}

function confirmAdd() {
    if (confirm("Confirm to insert new product?") == true) {
        const proID = document.getElementById("proID");
        const proName = document.getElementById("proName");
        const proCost = document.getElementById("proCost");

        console.log(proID.value);

        if (proID.value == "") {
            alert("Please input Product ID!");
            proID.focus();
        } else if (proName.value == "") {
            alert("Please input Product Name!");
            proName.focus();
        } else if (isNaN(parseFloat(proCost.value)) || parseFloat(proCost.value) <= 0) {
            alert("Invalid Single Product cost input! \nPlease input more than 0.");
            proCost.focus();
        } else {
            // Insert product to the server

            // Check material list
            let matList = materialArray();
            if (matList.length == 0) {
                alert("Please insert at least one material!");
                return;
            }
            // Alert user
            alert("Product create success!");
            document.getElementById("insertContainer").style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        //insert product to website
        productTable = document.getElementById("productTable");
        const productFormat = `
        <tr id="product${proID.value}">
            <td id="product${proID.value}ID">${proID.value}</td>
            <td id="product${proID.value}Name">${proName.value}</td>
            <td id="product${proID.value}Cost">${proCost.value}</td>
            <td id="product${proID.value}DeliveryQty">0</td>
            <td><button onclick="showDetail(this.parentElement.parentElement.id)">Detail</button></td>
            <td><button onclick="deleteProduct(this.parentElement.parentElement.id)">Delete</button></td>
        </tr>
        `;
        document.getElementById("productTable").innerHTML += productFormat;
    }
}

function cancel() {
    if (confirm("Are you sure want to cancel the insertion?") == true) {
        document.getElementById("insertContainer").style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }
}