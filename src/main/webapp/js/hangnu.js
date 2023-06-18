const itemssliderbar = document.querySelectorAll(".cartegory-left-li");
itemssliderbar.forEach(function (menu, index) {
    menu.addEventListener("click", function () {
        menu.classList.toggle("block")
    })
})
var productt = []
var pro = [];

function saveproduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
}
// đẩy mảng product vào local
function Save() {
    localStorage.setItem('listProductt', JSON.stringify(productt))
}

//lấy sản phẩm 
function load() {
    productt = JSON.parse(localStorage.getItem('listProductt'));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProductt") != null) {
    load();
}
if (localStorage.getItem("listProductt") == null) {
    Save();
}
var listLocal = function () {
    var listproduct1 = "";
    for (var i in productt) {
        var data = JSON.parse(JSON.stringify(productt[i]))
        var
            listproduct1 = '<div class="cart">';
        listproduct1 += '<a ><img  class="anh1" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" src="img/' + data.imgn + '" alt="..."></a>';
        listproduct1 += '<a ><img  class="anh2" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" src="img/' + data.img2n + '" alt="..."></a>';
        listproduct1 += '<div class="card-title" ><a href="' + data.link + '"  class="proo" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '">' + data.namen + '</a></div>';
        listproduct1 += '<div class="price">' + data.pricen + '₫</div>';
        listproduct1 += '<span style="--clr: rgb(255, 89, 0)" class="pricea">' + data.pricean + '<sup>%</sup></span>'
        listproduct1 += '<span class="add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listproduct1 += '<a>';
        listproduct1 += '<i class="bx bx-shopping-bag"></i>';
        listproduct1 += '</a>';
        listproduct1 += '</span>';
        listproduct1 += '</div>';
        listproduct1 += '</div>';
        document.getElementById("ban-chay").innerHTML += listproduct1;
    }
    Save();

}
listLocal();
//// hiệu ứng thêm sản phẩm vài giỏ hàng ///
$(document).on('click', '.add-cart', function (e) {
    e.preventDefault();
    $(document).find('.add-cart').addClass('disable');
    // var self =$(this);
    var parent = $(this).parents('.cart');
    var src = parent.find('img').attr('src');
    var cart = $(document).find('#cart-shop');

    var parTop =parent.offset().top;
    var parLeft =parent.offset().left;
    $('<img/>',{
        class:'anh12',
        src :src
    }).appendTo('body').css({
        "top":parTop,
        "left": parseInt(parLeft)+parseInt(parent.width()) - 50
    });
    setTimeout(function(){
        $(document).find('.anh12').css({
            "top":cart.offset().top,
            "left":cart.offset().left
        });
        setTimeout(function(){
            $(document).find('.anh12').remove();
            $(document).find('.add-cart').removeClass('disable');
        },1000);
    },500)
});
