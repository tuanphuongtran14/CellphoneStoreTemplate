//Function để lấy vị trí hiện tại của item trong class
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

//xử lý việc tăng giảm giá tiền khi đổi số lượng
for (var i=0; i<quantityProducts.length;i++)
{
    quantityProducts[i].oninput = function(e) {
    
        index=indexInClass(quantityProducts,e.target);
        var price= 8990000; // giá lấy từ data
        price=price*quantityProducts[index].value;
        textPrice= (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.'); 
        textPrice=textPrice.slice(0,-3)+"₫";
        priceProducts[index].textContent=textPrice;
        var total =0;

        for (var j=0; j<quantityProducts.length;j++)
        {
            total = total+parseInt(quantityProducts[j].value);

        }
        total=total*8990000;
        textTotal=(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.'); 
        textTotal=textTotal.slice(0,-3)+"₫";
        document.getElementsByClassName('total-price')[0].textContent=textTotal;
    }
}
