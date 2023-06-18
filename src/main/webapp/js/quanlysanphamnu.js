var productt =[];
function save(){
    localStorage.setItem('listProductt' ,JSON.stringify(productt));
}
function load(){
    productt =JSON.parse(localStorage.getItem('listProductt'));
}
if (localStorage.getItem("listProductt") != null) {
    load();
}
var productAdmin = function () {
    var listProduct1 = "";
    for (var i in productt) {
        var data = JSON.parse(JSON.stringify(productt[i]))
        var listProduct1 = '<tr>'
        listProduct1 += '<td>' + data.id + '</td>'
        listProduct1 += '<td>' + data.namen + '</td>'
        listProduct1 += '<td> <img src="img/' + data.imgn + '" width="50"></td>'
        listProduct1 += '<td> <img src="img/' + data.img2n + '" width="50"></td>'
        listProduct1 += '<td>' + data.pricen + '</td>'
        listProduct1 += '<td>' + data.pricean + '</td>'
        listProduct1 += '<td><button onclick="updateProduct(' + i + ')" class="btn-them-2" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button></td>'
        listProduct1 += '<td><button onclick="deleteProduct(' + i + ')" class="btn-them-1"><i class="fas fa-trash"></i></button></td>'
        listProduct1 += '</tr>'
        document.getElementById("product-adminn").innerHTML += listProduct1;
    } //save()
}
//// thêm sản phẩm
var addProduct = function () {
    var Product = {
        id: "SP" + parseInt(productt.length + 1),
        namen: document.getElementById("namen").value,
        imgn: document.getElementById("imgn").value,
        img2n: document.getElementById("img2n").value,
        pricen: document.getElementById("pricen").value,
        pricean: document.getElementById("pricean").value,
        linkn: document.getElementById("linkn").value,
    }
    productt.push(Product);
    localStorage.setItem('listProductt', JSON.stringify(productt));
    window.location.reload();
}


///// sửa sản phẩm

var updateProduct = function (i) {
    var k =productt[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("namedn").value = k.namen;
    document.getElementById("imgdn").value = k.imgn;
    document.getElementById("imgen").value = k.img2n;
    document.getElementById("pricedn").value = k.pricen;
    document.getElementById("pricexn").value = k.pricean;
    document.getElementById("linkkn").value = k.linkn;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Đồng ý</button>';

}
var submitUpdate = function (i) {
    var k = productt[i];
    k.id = document.getElementById("idd").value;
    k.namen = document.getElementById("namedn").value;
    k.imgn = document.getElementById("imgdn").value;
    k.img2n = document.getElementById("imgen").value;
    k.pricen = document.getElementById("pricedn").value;
    k.pricean = document.getElementById("pricexn").value;
    k.linkn = document.getElementById("linkkn").value;
    localStorage.setItem('listProductt', JSON.stringify(productt));
    window.location.reload();
}

///xóa

var deleteProduct = function (i) {
    var result = confirm("Bạn có muốn xóa sản phẩm này ?");
    if (result) {
        productt.splice(i, 1);
        localStorage.setItem('listProductt', JSON.stringify(productt));
        window.location.reload();
    }
}

productAdmin();
//    localStorage.clear();