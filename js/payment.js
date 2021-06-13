function indexInClass(collection, node) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] === node)
        return i;
    }
    return -1;
  }

var quantityProducts = document.getElementsByClassName('ml-2 quantity__input');
var priceProducts= document.getElementsByClassName('card-text item-price');
var test=document.getElementById('price1');

for (var i=0; i<quantityProducts.length;i++)
{
    quantityProducts[i].oninput = function(e) {
    
        console.log(indexInClass(quantityProducts,e.target));
        index=indexInClass(quantityProducts,e.target);
        var price= 8990000;
        price=price*quantityProducts[index].value;
        textPrice= (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.'); 
        textPrice=textPrice.slice(0,-3)+"₫";
        console.log(textPrice);
        priceProducts[index].textContent=textPrice;
        
    }
}
