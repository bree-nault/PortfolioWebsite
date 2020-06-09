function showAbout() {
    $('.portfolioSec').hide();
    $('.aboutSec').show();
  }
  
  $("#portfolio").click(function(){
               $(".aboutSec").hide();
               $(".portfolioSec").show()
          });
  
  $("#about").click(function(){
               $(".portfolioSec").hide();
               $(".aboutSec").show();
          });  

  $(showAbout);