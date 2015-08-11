$(document).ready(function(){
    $("select.type").selecter({
    	label: "любого типа"
    });
    $("select.brand").selecter({
    	label: "любого бренда"
    });

    $("#img-menu").on("click", function () {
        $("#menu").toggleClass("open");
    });
    $("#img-search").on("click", function() {
        $("#search").toggleClass("open");
    });
    $("#img-filter").on("click", function() {
    	$(".selector").toggleClass("open");
    });
 });
