var startX;
var startY;
var index=0;
$(function(){
	$(".tableFu").on("touchstart", function(e) {

　　　　e.preventDefault();
　　　　startX = e.originalEvent.changedTouches[0].pageX;
　　　　startY = e.originalEvent.changedTouches[0].pageY;
　　});
　　$(".tableFu").on("touchmove", function(e) {
　　　　e.preventDefault();
　　　　var moveEndX = e.originalEvent.changedTouches[0].pageX;
　　　　var moveEndY = e.originalEvent.changedTouches[0].pageY;
　　　　var X = moveEndX - startX;
　　　　var Y = moveEndY - startY;

　　　　if ( X > 0 &&index<2) {
	        index++;
	        $(".tableFu").scrollLeft($(".tableFu").width()*index);
	        $("#indexchoice>span").children().eq(index).addClass("active").siblings().removeClass("active");
　　　　}
　　　　else if ( X < 0 ) {
　　　　　　 index--;
	        $(".tableFu").scrollLeft($(".tableFu").width()*index);
	         $("#indexchoice>span").children().eq(index).addClass("active").siblings().removeClass("active");
　　　　}
　　　
　　});
	$("#add").click(function(){
		location.href="newworkarrange.html";
	})
})
