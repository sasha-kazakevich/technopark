$(document).ready(function(){
    $("select.type").selecter({});
    $("select.brand").selecter({});
    $("#img-menu").on("click", function () {
        $("#menu").toggleClass("open");
    });
    $("#img-search").on("click", function() {
        $("#search").toggleClass("open");
    });
    $("#img-filter").on("click", function() {
    	$(".selector").toggleClass("open");
    });

    $(function(){
        var $type,$name,$attrType = "",$attrName = "",$minPrice = 500000,$maxPrice = 25000000;
        $("#type").change(function(){
            $type = ($(this).val());
            $type === "" ? $attrType = "" : $attrType = "[data-type='" + $type + "']";
            filter($attrType,$attrName,+$minPrice,+$maxPrice);
        });
        $("#brand").change(function(){
            $name = ($(this).val());
            $name === "" ? $attrName = "" : $attrName = "[data-name='" + $name + "']";
            filter($attrType,$attrName,+$minPrice,+$maxPrice);
        });
        $("#min-price").keyup(function() {
            $minPrice = $("#min-price").val();
            filter($attrType,$attrName,+$minPrice,+$maxPrice);
        });
        $("#max-price").keyup(function() {
            $maxPrice = $("#max-price").val();
            filter($attrType,$attrName,+$minPrice,+$maxPrice);
        });

        function filter($attrType,$attrName,$minPrice,$maxPrice){   
            $(".foto-camera").css("display","none"); 
            var $all = $(".foto-camera"+$attrType+$attrName+"");       
            $all.css("display","block");
            jQuery.each($all,function(){
               var $attr = $(this).attr("data-price");
               if (!(($attr > $minPrice) && ($attr < $maxPrice))){
                    $(this).css("display","none");
               }
            });
        }

    });
  
 });