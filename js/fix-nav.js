var nav = $("nav");

wrap.on("scroll", function(e){
	if(this.scrollTop > 200){
	nav.addClass("fix");
	console.log("hola");
	}else{
	nav.removeClass("fix");
	}
});
