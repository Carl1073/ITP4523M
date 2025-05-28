function updateCustInfo(){
    document.getElementById("updateCustContainer").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
    pwCheckbox();
    telCheckbox();
    companyCheckbox();
}

function confirmChange() {
    if (confirm("Confirm your change?") == true) {
        if (document.getElementById("pwCheckbox").checked) {
            let oldPassword = document.getElementById("oldPassword").value;
            let newPassword = document.getElementById("newPassword").value;
            let newPasswordConfirm = document.getElementById("newPasswordConfirm").value;

            if (oldPassword == "" || newPassword == "" || newPasswordConfirm == "") {
                alert("Please fill in all the fields!");
                if (oldPassword == "") {
                    document.getElementById("oldPassword").focus();
                    return;
                }
                if (newPassword == "") {
                    document.getElementById("newPassword").focus();
                    return;
                }
                if (newPasswordConfirm == "") {
                    document.getElementById("newPasswordConfirm").focus();
                    return;
                }
            }
            if (newPassword != newPasswordConfirm) {
                alert("New password and confirm password do not match!");
                document.getElementById("newPassword").focus();
                return;
            }
        }
        if (document.getElementById("telCheckbox").checked) {
            let tel = document.getElementById("newTel").value;
            if (tel == "") {
                alert("Please fill in your telephone number!");
                document.getElementById("newTel").focus();
                return;
            }
        }
        if (document.getElementById("companyCheckbox").checked) {
            let company = document.getElementById("newCompany").value;
            if (company == "") {
                alert("Please fill in your company name!");
                document.getElementById("newCompany").focus();
                return;
            }
        }
        // Update server info

        // Alert user
        alert("Change successfully!");
        document.getElementById("updateCustContainer").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}

function cancel() {
    if (confirm("Are you sure want to cancel the change?") == true) {
        document.getElementById("updateCustContainer").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}

function pwCheckbox(){
    let pw = document.getElementById("pwCheckbox").checked;
    console.log(pw);
    if (pw) {
        document.getElementById("oldPasswordDiv").style.display = "block";
        document.getElementById("newPasswordDiv").style.display = "block";
        document.getElementById("newPasswordConfirmDiv").style.display = "block";
    } else {
        document.getElementById("oldPasswordDiv").style.display = "none";
        document.getElementById("newPasswordDiv").style.display = "none";
        document.getElementById("newPasswordConfirmDiv").style.display = "none";
    }
}

function telCheckbox(){
    let tel = document.getElementById("telCheckbox").checked;
    console.log(tel);
    if (tel) {
        document.getElementById("telDiv").style.display = "block";
    } else {
        document.getElementById("telDiv").style.display = "none";
    }
}

function companyCheckbox(){
    let company = document.getElementById("companyCheckbox").checked;
    console.log(company);
    if (company) {
        document.getElementById("companyDiv").style.display = "block";
    } else {
        document.getElementById("companyDiv").style.display = "none";
    }
}