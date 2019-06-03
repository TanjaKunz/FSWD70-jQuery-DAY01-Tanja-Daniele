$(document).ready(function(){
	$("a").attr("href", "http://www.codefactory.wien");

	$("code").css("color", "red");

	$("ol > li").css("background-color", "#2a7b90");

	$("form textarea").attr("placeholder", "Express your opinion");

	$("img").attr("src", "https://codefactory.wien/wp-content/uploads/2019/05/Logo-new.png");

	$("blockquote").css({
		"background-color": "orange",
		"font-style": "italic"
	})

	$("#logo").css("color", "black");
	$(".blog").css("color", "white");

	$(".date").remove();

	$(".sidemenu:first li:last").after("<li><a>New Template</a></li> <li><a>Order Template</a></li> <li><a>Contact Us</a></li>");

	$("#content-wrap p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");


	




});