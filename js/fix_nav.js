window.onscroll = function(){myFunction()};
  function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return((elemTop>= docViewTop)&&(elemBottom<=docViewBottom))
   }




  function myFunction(){

    function showNav(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
      document.getElementById("nav").className = "fix";
    }
    else{
      document.getElementById("nav").className = "";
    }
}
	function scrollView(){
    if(isScrolledIntoView(".front-end")){
    document.getElementById("bar-html").classList.add("html");
    document.getElementById("bar-css").classList.add("css");
    document.getElementById("bar-javascript").classList.add("js");
    document.getElementById("bar-jquery").classList.add("jquery");
    document.getElementById("bar-php").classList.add("php");
    document.getElementById("bar-wp").classList.add("wp");
    document.getElementById("bar-mysql").classList.add("mysql");
   }
}
    showNav();
    scrollView();
      }