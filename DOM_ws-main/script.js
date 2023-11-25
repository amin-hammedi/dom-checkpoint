var inc_btns = document.getElementsByClassName("plus");
var dec_btns = document.getElementsByClassName("minus");

for (let i = 0; i < inc_btns.length; i++) {
  inc_btns[i].addEventListener("click", inc);
}

function inc(e) {
  var clicked_btn = e.target;
  var parent_div = clicked_btn.parentElement;
  var value = Number(parent_div.querySelector("p").innerHTML);
  value++;
  parent_div.querySelector("p").innerHTML = value;
  var parenttd = parent_div.parentElement;
  var parenttr = parenttd.parentElement;
  var price = parenttr.querySelector(".unitPrice").innerHTML;
  var sum = Number(price) * Number(value);
  parenttr.querySelector(".price").innerHTML = sum;
  total();
}

for (let i = 0; i < dec_btns.length; i++) {
  dec_btns[i].addEventListener("click", dec);
}

function dec(e) {
  var clicked_btn = e.target;
  var parent_div = clicked_btn.parentElement;
  var value = Number(parent_div.querySelector("p").innerHTML);
  if (value > 0) {
    value--;
  }
  parent_div.querySelector("p").innerHTML = value;
  var parenttd = parent_div.parentElement;
  var parenttr = parenttd.parentElement;
  var price = parenttr.querySelector(".unitPrice").innerHTML;
  var sum = Number(price) * Number(value);
  parenttr.querySelector(".price").innerHTML = sum;
  total();
}
var prices = document.querySelectorAll(".price");
var totalprice = document.querySelector("#total");
function total() {
  var totalsum = 0;
  for (let i = 0; i < prices.length; i++) {
    totalsum += Number(prices[i].innerHTML);
  }
  totalprice.innerHTML = totalsum;
}

var likebuttons = document.querySelectorAll(".like");

function colorchange(e) {
  var x = e.target;
  if (x.style.color != "red") {
    x.style.color = "red";
  } else {
    x.style.color = "black";
  }
}

for (let i = 0; i < likebuttons.length; i++) {
  likebuttons[i].addEventListener("click", colorchange);
}

var delete_btns = document.querySelectorAll(".delete");

function rem(e) {
  var y = e.target;
  var z = y.parentElement;
  var a = z.parentElement;
  var d = a.parentElement;
  var tr = d.parentElement;
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  total();
  tr.remove();
}

for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", rem);
}
