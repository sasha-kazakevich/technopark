$(document).ready(function(){
    $("select.type").selecter({
    	label: "любого типа"
    });
    $("select.brand").selecter({
    	label: "любого бренда"
    });
    $("#img-menu").click(function(){
    	$("#menu").toggle("fast");
	});
	$("#img-search").click(function(){
     	$("#search").toggle("fast");
	});
	$("#img-filter").click(function(){
		$(".selector").toggle("fast");
	});

 });


