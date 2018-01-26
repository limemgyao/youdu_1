/*轮播图开始*/
var num=0;
var con=$(".con")
$(".btn li").each(function (index,ele) {
    $(this).click(function () {
        num=index;
        $(".btn li").css("background","rgba(255,96,0,.3)");
        $(this).css("background","#FF7202");
        $(".ban li").css({"opacity":0,"z-index":1}).eq(num).css({"opacity":1,"z-index":2})
    })
});
var t=setInterval(move,3000);
function move(){
    num++;
    if(num==$(".btn li").length){
        num=0
    }
    if(num==-1){
        num=$(".btn li").length-1;
    }
    $(".btn li").css("background","rgba(255,96,0,.3)").eq(num).css("background","#FF7202");
    $(".ban li").css({"opacity":0,"z-index":1}).eq(num).css({"opacity":1,"z-index":2})
}
con.mouseover(function () {
    clearInterval(t);
})
con.mouseout(function () {
    t=setInterval(move,3000)
})
$(".prev").click(function () {
    num-=2;
    move();
})
$(".next").click(function () {
    move();
})
/*轮播图结束*/
/*作家开始*/
$(".c1 a").click(function () {
    $(".c1 a").removeClass("select_a1");
    $(this).addClass("select_a1")
})
/*作家结束*/
/*nav开始*/
$("nav a").click(function () {
    $("nav a").removeClass("select_a");
    $(this).addClass("select_a");
})
/*nav结束*/
/*top开始*/
$(".login").click(function () {
    $(".login").removeClass("select_a");
    $(this).addClass("select_a");
})
/*top结束*/
/*购物车 收藏夹开始*/
var shopping=$(".shopping");
shopping.mousemove(function () {
    shopping.addClass("select_a");
})
shopping.mouseout(function () {
    shopping.removeClass("select_a")
})
var collect=$(".collect")
collect.mouseover(function () {
    collect.addClass("select_a");
})
collect.mouseout(function () {
    collect.removeClass("select_a");
})
/*购物车 收藏夹结束*/

































