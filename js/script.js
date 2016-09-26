$(document).ready(function(){

		$(".schedule_description").hide();

		$(".schedule_item").click(function(){
					$(this).next().animate({
					height: "toggle"
				},
					"slow", "easeOutBounce");
			});
});
