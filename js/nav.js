/*图书top开始*/
$("nav ul li a").click(function () {
    $("nav ul li>a").css("color","#000");
    $(".line").remove()
    $(this).append('<div class="line"></div>').css("color","rgba(255,127,3,1)")
})
/*图书top结束*/