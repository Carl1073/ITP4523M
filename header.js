// let not_login = document.getElementsByClassName("not_login");
// let customer = document.getElementsByClassName("customer");
// let staff = document.getElementsByClassName("staff");

// let login_type = 0;
// let username = "";
// window.addEventListener('DOMContentLoaded', () => {
//     login_type = sessionStorage.login_type;
//     username = sessionStorage.username;
//     login_status(login_type);
// });

// function login_status(type){
//     login_type = type;
//     if (login_type == 0){
//         for(var i=0;i<customer.length;i++){
//             customer[i].classList.add("display_none");
//         }
//         for(var i=0;i<staff.length;i++){
//             staff[i].classList.add("display_none");
//         }
//         for(var i=0;i<not_login.length;i++){
//             not_login[i].classList.remove("display_none");
//         }
//     }else if(login_type == 1){
//         for(var i=0;i<not_login.length;i++){
//             not_login[i].classList.add("display_none");
//         }
//         for(var i=0;i<staff.length;i++){
//             staff[i].classList.add("display_none");
//         }
//         for(var i=0;i<customer.length;i++){
//             customer[i].classList.remove("display_none");
//         }

//     }else if(login_type == 2){
//         for(var i=0;i<not_login.length;i++){
//             not_login[i].classList.add("display_none");
//         }
//         for(var i=0;i<customer.length;i++){
//             customer[i].classList.add("display_none");
//         }
//         for(var i=0;i<staff.length;i++){
//             staff[i].classList.remove("display_none");
//         }
//     }
//     sessionStorage.login_type = login_type;
// }
