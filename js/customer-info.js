var account = document.getElementById("show-account")
var order = document.getElementById("show-order")
var changePasswordShow = document.getElementById("change-password__show")
var changePassword = document.querySelector("input[name=change-password]")


changePasswordShow.style.display = "none"
account.style.display = "block"
order.style.display = "none"


function customerToggle() {
    document.getElementById('account-event').addEventListener("click", function() {
        account.style.display = "block"
        order.style.display = "none"
        bill.style.display = "none";

    });
    document.getElementById('order-event').addEventListener("click", function() {
        account.style.display = "none"
        order.style.display = "block"
        bill.style.display = "none";
    });
}
customerToggle()

changePassword.addEventListener( 'change', function() {
    if(this.checked) {
        changePasswordShow.style.display = "flex"
    } else {
        changePasswordShow.style.display = "none"
    }
});