
var shoppingCart = (function () {
  cart = [];
  // Constructor
  function Item(id, name, img, price, count) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.count = count;
  }
  // Save cart
  function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  // Load cart
  function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  var obj = {};

  // Add to cart
  obj.addItemToCart = function (id, name, img, price, count) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, name, img, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item 

  obj.setCountForItem = function (id, count) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }
  //Remove
  obj.removeItemFromCartAll = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        var result = confirm("Bạn có muốn xóa sản phẩm này ?");
        if (result){
          cart.splice(item, 1);}
        break;
      }
    }
    saveCart();
  }
  // Total cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }
  //total
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(0));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(0);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }
  return obj;
})();


var pro = [];

function saveproduct() {
  sessionStorage.setItem('shopping', JSON.stringify(pro));
}
// Load cart
function loadproduct() {
  pro = JSON.parse(sessionStorage.getItem('shopping'));
}


// Add item
$('.add-cart').click(function (event) {
  event.preventDefault();
  var id = $(this).data('id');
  var name = $(this).data('name');
  var img = $(this).data('img');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(id, name, img, price, 1);
  displayCart();
});
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr class='cart'>" +
      "<td><img src='img/" + cartArray[i].img + "' style='width:100px'></td>" +
      "<td  class=' name-title'>" + cartArray[i].name + "</td>" +
      "<td>" + cartArray[i].price + "₫</td>" +
      "<td><button class='minus-item cart-count' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">-</button>" +
      "<input type='text' class='item-count ' data-name='" + cartArray[i].id + "' value='" + cartArray[i].count + "'>" +
      "<button class='plus-item cart-count ' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">+</button>" +
      "</td>" +
      "<td>" + cartArray[i].total + "₫</td>" +
      "<td><div class='delete-item' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + "><i class='bx bxs-trash'></i></div></td>"

      +
      "</tr>";
  }
  $('.show-cart-1').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

$('.show-cart-1').on("click", ".delete-item", function (event) {
  var id = $(this).data('id')
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
})

// -1
$('.show-cart-1').on("click", ".minus-item", function (event) {
  var id = $(this).data('id')
  shoppingCart.removeItemFromCart(id);
  displayCart();
})
// +1
$('.show-cart-1').on("click", ".plus-item", function (event) {
  var id = $(this).data('id')
  shoppingCart.addItemToCart(id);
  displayCart();
})

// Item count input
$('.show-cart-1').on("change", ".item-count", function (event) {
  var id = $(this).data('id');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(id, count);
  displayCart();
});

displayCart();


///// bar

// const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const circles = document.querySelectorAll(".circle");

// let currentActive = 1;
// next.addEventListener("click", ()=>{
//   currentActive++;
//   if(currentActive > circles.length){
//     currentActive = circles.length;
//   }
//   update();
// });
// prev.addEventListener("click", ()=>{
//   currentActive--;
//   if(currentActive < 1){
//     currentActive = 1;
//   }
//   update();

  
// });
// function update(){
//   circles.forEach((circle, idx)=>{
//     if(idx < currentActive){
//       circle.classList.add("active");
//     }
//     else{
//       circle.classList.remove("active");
//     }
//   });

//   const actives = document.querySelectorAll(".active");
//   progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 +"%";

//   if(currentActive ===1){
//     prev.disabled = true;
//   }
//   else if (currentActive == circles.length){
//     next.disabled = true;
//   }
//   else {
//     prev.disabled=false;
//     next.disabled= false;
//   }
// }


