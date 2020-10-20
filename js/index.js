$(document).ready(function(){ 
    $("#i2").click (function (){
      $(".pp2").toggle(),
      $(".ii2").toggle();  
    });
    $("#p2",).click (function (){
      $(".ii2").toggle(),
      $(".pp2").toggle();
     });
     $("#i1").click (function (){
      $(".pp1").toggle(),
      $(".ii1").toggle();  
    });
    $("#p1").click (function (){
      $(".ii1").toggle(),
      $(".pp1").toggle();
     });
     $("#i3").click (function (){
      $(".pp3").toggle(),
      $(".ii3").toggle();  
    });
    $("#p3").click (function (){
      $(".ii3").toggle(),
      $(".pp3").toggle();
     });
      
    $
    $("#carrae").hide();
$("#image1").animate({opacity:1});
$("#image1").hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $("#carrae").fadeIn();
},
  function(){
    $(this).stop().animate({opacity:1},500);
  $("#carrae").fadeOut()});
 ///////////////////////////////////// 
  $("#orange").hide();
  $("#image2").animate({opacity:1});
  $("#image2").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $("#orange").fadeIn();
  },
    function(){
      $(this).stop().animate({opacity:1},500);
    $("#orange").fadeOut()});
////////////////////////////////////////////////
    $("#ontario").hide();
  $("#image3").animate({opacity:1});
  $("#image3").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $("#ontario").fadeIn();
  },
    function(){
      $(this).stop().animate({opacity:1},500);
    $("#ontario").fadeOut()});
///////////////////////////////////////
$("#black").hide();
$("#image4").animate({opacity:1});
$("#image4").hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $("#black").fadeIn();
},
  function(){
    $(this).stop().animate({opacity:1},500);
  $("#black").fadeOut()});
  ///////////////////////////////////////////
  $("#day").hide();
  $("#image5").animate({opacity:1});
  $("#image5").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $("#day").fadeIn();
  },
    function(){
      $(this).stop().animate({opacity:1},500);
    $("#day").fadeOut()});
    //////////////////////////////////////////
    $("#butto").hide();
    $("#image6").animate({opacity:1});
    $("#image6").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $("#butto").fadeIn();
    },
      function(){
        $(this).stop().animate({opacity:1},500);
      $("#butto").fadeOut()});
      //////////////////////////////////////////
      $("#burned").hide();
      $("#image7").animate({opacity:1});
      $("#image7").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $("#burned").fadeIn();
      },
        function(){
          $(this).stop().animate({opacity:1},500);
        $("#burned").fadeOut()});
        ///////////////////////
        $("#girrafe").hide();
        $("#image8").animate({
          opacity:1});
        $("#image8").hover(function(){
          $(this).stop().animate({opacity:.4},200);
          $("#girrafe").fadeIn();
        },
          function(){
            $(this).stop().animate({opacity:1},500);
          $("#girrafe").fadeOut()});
          $("#contact-form").submit(function(){
            var email =$("#email").val();
            var name =$("#name").val();
            var message=$("#message").val();
              alert(name + " your message was recieved!" + " thank you for contacting us");
            })
            });   
                 