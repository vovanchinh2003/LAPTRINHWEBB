var userrrr = [];
//đẩy mảng user vào local
var saveUser = function () {
    localStorage.setItem('llistUserr', JSON.stringify(userrrr));
}
//lấy list user
var loadUser = function () {
    userrrr = JSON.parse(localStorage.getItem('llistUserr'));
}
if (localStorage.getItem("llistUserr") != null) {
    loadUser();
}
 saveUser();

var nguoidung = function () {
    var nguoidung1 = "";
    for (var i in userrrr) {
        var data = JSON.parse(JSON.stringify(userrrr[i]))
        nguoidung1 = '<tr>'
        nguoidung1 += '<td>' + data.id + '</td>'
        nguoidung1 += '<td>' + data.username + '</td>'
        nguoidung1 += '<td>' + data.mmail +  '</td>'
        nguoidung1 += '<td type="password">' + data.password +'</td>'
        nguoidung1 += '<td><button onclick="updateUser(' + i + ')" class="btn-them-2" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button></td>'
        nguoidung1 += '<td><button onclick="deleteUser('+i+')" class="btn-them-1"><i class="fas fa-trash"></i></button></td>'
        nguoidung1 += '</tr>'
        document.getElementById("ql-nguoidung").innerHTML += nguoidung1;
    }
        saveUser();
}
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");
// togglePassword.addEventListener("click", function(){
//     const type = password.getAttribute("type") ==="password" ? "text":"password";
//     password.setAttribute("type" , type);
//     this.classList.toggle("bi-eye");
// });
//theem
var validate = function () {
    var Nguoidung = {
        id: "U" + parseInt(userrrr.length + 1),
        username: document.getElementById("username").value,
        mmail: document.getElementById('mail').value,
        password: document.getElementById('password').value
        // role: 'userrr'
    }
    userrrr.push(Nguoidung);
    localStorage.setItem('llistUserr', JSON.stringify(userrrr));
    window.location.reload();
}
// sữa //
var updateUser = function(i){
    var k = userrrr[i];
    document.getElementById("iddd").value = k.id;
    document.getElementById("usernamed").value =k.username;
    document.getElementById("maild").value = k.mmail;
    document.getElementById("passwordd").value = k.password;
    document.getElementById("iddd").setAttribute("disabled" ,"disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUser(' + i + ')">Đồng ý</button>';
}
var submitUser =function(i){
    var k=userrrr[i];
    k.id = document.getElementById("iddd").value;
    k.username = document.getElementById("usernamed").value;
    k.mmail = document.getElementById("maild").value;
    k.password =document.getElementById("passwordd").value;
    localStorage.setItem('llistUserr', JSON.stringify(userrrr));
    window.location.reload();
}

/// xóa 
var deleteUser = function (i) {
    userrrr.splice(i, 1);
    localStorage.setItem('llistUserr', JSON.stringify(userrrr));
    window.location.reload();
}
nguoidung();