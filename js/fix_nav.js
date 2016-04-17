var nav = $("nav");
wrap.on("scroll"function(e){
	if(this.scrollTop > 147){
	nav.addClass("fix");
	}
	else{
	nav.removeClass("fix");
	}
}
