var userrrr =[];
var loadUser = function(){
    userrrr =  JSON.parse(localStorage.getItem('llistUserr'))
}
//if(localStorage.getItem("listUser")!=null){

    loadUser();
//}
var nameF = document.getElementById('name');
var pass = document.getElementById('pass');
function validatedn(){
    var uu = document.getElementById("username1").value;

    if(uu.length == 0){
        nameF.innerHTML ='Vui lòng nhập tên';
        return false;
    }
    if(!uu.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)){
        nameF.innerHTML = ''
        return false;
    }
    nameF.innerHTML = '';
    // return true;
}

function validatepass(){
        var pu1 = document.getElementById("password1").value;
        var required = 9;
        var left = required - pu1.length;
        if(left > 0){
            pass.innerHTML ='Bạn nhập mật khẩu nhiều hơn' + left;
            return false;
        }
        pass.innerHTML = '';
        return true;
}

function validate(){
    var uu = document.getElementById("username1").value;
    var pu1 = document.getElementById("password1").value;

    if(!validatedn() || !validatepass()){ 
        var k = 0;
        for(var i in userrrr){
            k++;
            var data = JSON.parse(JSON.stringify(userrrr[i]))
            if(
                ((uu == data.username)&&
                (pu1 == data.password)
                &&(data.role == "admin")   ))
                {
                    alert("Đăng nhập thành công");
                    location.assign("admin.html");
                    return true;
                }
                if(
                    ((uu == data.username)&&
                    (pu1 == data.password)
                    && (data.role=="userr")) )
                {
                    alert("Đăng nhập thành công");
                    k=i;
                    window.location.href='trangchu.html';
                    return true;
                }
        }
        if(k==userrrr.length){
            alert("Tài khoản không có !!!");
            document.getElementById("username1").value="";
            document.getElementById("password1").value="";
            return true;
        }
    }
}
// if (p1.length <= 1 &&
    //     (p1.match(chu) ||
    //         p1.match(so) ||
    //         p1.match(kyhieu))) no = 1;
    // if (p1.length >= 2 &&
    //     ((p1.match(chu) &&
    //             p1.match(so)) ||
    //         (p1.match(so) &&
    //             p1.match(kyhieu)) ||
    //         (p1.match(chu) &&
    //             p1.match(kyhieu)))) no = 2;
    // if (p1.length >= 2 &&
    //     p1.match(chu) &&
    //     p1.match(so) &&
    //     p1.match(kyhieu)) no = 3;
    // if(no==1){
    //     yeu.innerHTML ="Mật khẩu của bạn yếu";
    //     return false;        
    // }
    // if (no==2){
    //     yeu.style.display = "none";
    //     binhthuong.innerHTML="Mật khẩu bình thường";
    //     return false;
    // } 
    // if (no==3){
    //     binhthuong.style.display = "none";
    //     manh.innerHTML=""
    //     return true;
    // }


// const sli = document.querySelector(".sli");
// const fir = document.querySelector(".fir");
// const pre = document.querySelector(".prev-1");
// const next1 = document.querySelector(".next-1");
// const prea = document.querySelector(".prev-2");
// const nexta = document.querySelector(".next-2");
// const proText = document.querySelectorAll(".step p");
// const proCheck = document.querySelectorAll(".step .check");
// const bullet = document.querySelectorAll(".step .bullet");


// let max = 1;
// let current = 1;


// fir.addEventListener("click", function(){
//     sli.style.marginLeft = "-25%";
//     // bullet[current -1].classList.add("active");
//     proText[current -1].classList.add("active");
//     proCheck[current -1].classList.add("active"); 
//     current +=1;
// });
// next1.addEventListener("click", function(){
//     sli.style.marginLeft = "-25%";
//     // bullet[current -1].classList.add("active");
//     proText[current -1].classList.add("active");
//     proCheck[current -1].classList.add("active");
//     current +=1;
// });

// pre.addEventListener("click", function(){
//     sli.style.marginLeft = "0%";
//     // bullet[current -2].classList.remove("active");
//     proText[current -2].classList.remove("active");
//     proCheck[current -2].classList.remove("active");
//     current -=1;
// });
// nexta.addEventListener("click", function(){
//     sli.style.marginLeft = "-25%";
//     // bullet[current -2].classList.remove("active");
//     proText[current -2].classList.remove("active");
//     proCheck[current -2].classList.remove("active");
//     current -=1;
// });