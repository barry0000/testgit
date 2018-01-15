
var allDays=[31,28,31,30,31,30,31,31,30,31,30,31];
$(function(){
	$(".dateList>div").each(function(){
		for(var i=0;i<7;i++){
			$(this).append("<div class='day'></div>")
		}
	})
	var date=new Date();
	var year=date.getFullYear();
	if(year%4==0&&year%100!=0||year%400==0){
		allDays[1]=29 
	}
	var month=date.getMonth()+1;
	var day=date.getDay();
	getCalendar(year,month);
	$(".confirm").click(function(){
		if($.trim($("#yearchoice").val())==""||$.trim($("#monthchoice").val())==""){
			alert("请输入年份月份");
		}
		else if(isNaN($("#yearchoice").val())||isNaN($("#monthchoice").val())){
			alert("请输入正确年月");
		}else{
			var yearchoice=parseInt($("#yearchoice").val());
			var monthchoice=parseInt($("#monthchoice").val());
			if(yearchoice<1970||yearchoice>2199||monthchoice<1||monthchoice>12){
				alert("请输入正确年月");
			}
			else{
				getCalendar(yearchoice,monthchoice);
			}
		}
	});
});
function getCalendar(year,month){
	var thisMonth1=new Date(year+"-"+month+"-01");
	var monthDay1=thisMonth1.getDay();
	//上月
	var lastDay=month==1?allDays[11]:allDays[month-2];
	var dayStart=thisMonth1.getDay();
	var lastMonth=month==1?12:month-1;
	var yearOfLast=month==1?year-1:year;
	var nextMonth=month==12?1:month+1;
	var yearNextMonth=month==12?year+1:year;
	var count=0;
	//上月
	for(var i=0;i<dayStart;i++){
		$(".day").eq(i).html("<span title='"+yearOfLast+"-"+lastMonth+"-"+(lastDay-(dayStart-1)+i)+"' class='otherMonth'>"+(lastDay-(dayStart-1)+i)+"</span>")
		count++;
	}
	//本月
	for(var i=1;i<=allDays[month-1];i++){
		$(".day").eq(dayStart+i-1).html("<span title='"+year+"-"+month+"-"+i+"'>"+i+"</span>");
		count++;
	}
	//下月
	for(var i=count,tempdate=1;i<=42;i++,tempdate++){
		$(".day").eq(i).html("<span title='"+yearNextMonth+"-"+nextMonth+"-"+tempdate+"' class='otherMonth'>"+tempdate+"</span>");
	}
}
