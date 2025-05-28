function hideInsert() {
    document.getElementById('overlay').style.display = 'none';
    overlayRemove();
}

function materialInsert() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById("insertContainer").style.display = 'flex';
}

function restockMaterial(materialID) {
    let restock = prompt("Enter the amount of material you want to restock", "100");
    restock = parseFloat(restock);
    if (restock < 0) {
        alert("Restock amount cannot be negative!");
        return;
    }
    if (isNaN(restock)) {
        alert("Restock amount must be a number!");
        return;
    }
    let currentQty = document.getElementById(materialID + "Qty").innerHTML;
    currentQty = parseFloat(currentQty) + parseFloat(restock);
    document.getElementById(materialID + "Qty").innerHTML = currentQty.toFixed(2);
    checkLowMaterial(materialID);
}

function checkLowMaterial(materialID) {
    let qty = parseFloat(document.getElementById(materialID + "Qty").innerHTML);
    let rqty = parseFloat(document.getElementById(materialID + "Rqty").innerHTML);
    let rol = parseFloat(document.getElementById(materialID + "Rol").innerHTML);
    if ((qty - rqty) < rol) {
        document.getElementById(materialID).classList.add("lowStock");
    } else {
        document.getElementById(materialID).classList.remove("lowStock");
    }
}

function confirmAdd() {
    let ID = parseInt(document.getElementById("insertID").value);
    let materialName = document.getElementById("insertName").value;
    let materialQty = document.getElementById("insertQty").value;
    let materialRol = document.getElementById("insertRol").value;
    let materialUnit = document.getElementById("insertUnit").value;
    let materialID = "material" + ID;
    if (ID == "") {
        alert("Please input Material ID!");
        document.getElementById("insertID").focus();
        return;
    }
    if (materialName == "") {
        alert("Please input Material Name!");
        document.getElementById("insertName").focus();
        return;
    }
    if (isNaN(parseFloat(materialQty)) || parseFloat(materialQty) <= 0) {
        alert("Invalid Material Quantity input! \nPlease input more than 0.");
        document.getElementById("insertQty").focus();
        return;
    }
    if (isNaN(parseFloat(materialRol)) || parseFloat(materialRol) <= 0) {
        alert("Invalid Material Reorder Level input! \nPlease input more than 0.");
        document.getElementById("insertRol").focus();
        return;
    }
    if (materialUnit == "") {
        alert("Please input Material Unit!");
        document.getElementById("insertName").focus();
        return;
    }
    let insertFormat = `
    <tr id="${materialID}">
        <td id="${materialID}ID">${ID}</td>
        <td id="${materialID}Name">${materialName}</td>
        <td id="${materialID}Qty">${materialQty}</td>
        <td id="${materialID}Rqty">0</td>
        <td id="${materialID}Rol">${materialRol}</td>
        <td id="${materialID}Unit">${materialUnit}</td>
        <td><button onclick="restockMaterial(this.parentElement.parentElement.id)">Restock</button></td>
    </tr>
    `;
    alert("Insert successfully!");
    overlayRemove();
    let materialTable = document.getElementById("materialTable");
    materialTable.innerHTML += insertFormat;
    document.getElementById("insertContainer").style.display = 'none';
    document.getElementById("insertID").value = ID + 1;
    document.getElementById("insertName").value = "";
    document.getElementById("insertQty").value = "";
    document.getElementById("insertRol").value = "";
    document.getElementById("insertUnit").value = "";
}

function cancel() {
    if (confirm("Are you sure want to cancel the insertion?") == true) {
        document.getElementById("insertContainer").style.display = 'none';
        overlayRemove();
    }
}

function overlayRemove() {
    document.getElementById('overlay').style.display = 'none';
}