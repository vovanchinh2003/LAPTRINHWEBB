var settingMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingMenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}


const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const myChartt = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Tiktok'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],

        }]
    },
    options: {
        responsive: true,
    }
});

const myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ],
        datasets: [{
            label: 'Earning',
            data: [40200, 10090, 30000, 55400, 6200, 36000, 8800, 5578, 25622, 84044, 60285, 90000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        options: {
            responsive: true,
        }
    }
});


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
        nguoidung1 = ' <td width="60px"><div class="imgBx"><img src="img/nguoidung.jfif" alt=""></div></td><td><h4>'+data.username +'</h4><small>Việt Nam</small></td><td><i class="bx bx-user-circle"></i><i class="bx bx-bell"></i><i class="bx bx-phone"></i></td>'
        nguoidung1 += '</tr>'
        document.getElementById("ql-nguoidungs").innerHTML += nguoidung1;
    }
    saveUser();
}
nguoidung();