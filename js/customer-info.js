  //Show hide swap order--account
  $(document).ready(function(){
    $("#show-account").show();
    $("#show-order").hide();
    $("#account-event").click(function(){
        $("#show-account").show();
        $("#show-order").hide();

    });
    $("#order-event").click(function(){ 
    $("#show-account").hide();
        $("#show-order").show()
    });
});
