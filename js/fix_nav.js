window.onscroll = function(){myFunction()};

  function myFunction(){
    console.log("scrolling");
    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
      document.getElementById("nav").className = "fix";
    }
    else{
      document.getElementById("nav").className = "";
    }
      }