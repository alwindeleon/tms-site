$(document).ready(function(){
  $.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };

      $({deg: 0}).animate({deg: angle}, args);
    });
  };
  $(".button").click(function(){
    var arrow = $("#arrow");
    var self = this;
    var id = $(self).attr('id').split('-')[0];
  
  ///// set template ////////
    if(id == "about"){
      $('.template').find("#title").text(aboutTitle);
      $('.template').find("#body").text(aboutBody);
    }else if(id == "rules"){
      $('.template').find("#title").text(rulesTitle);
      $('.template').find("#body").text(rulesBody);
    }else if(id == "mpp"){
      $('.template').find("#title").text(mppTitle);
      $('.template').find("#body").text(mppBody);
    } else if(id == "tools"){
      $('.template').find("#title").text(aboutTitle);
      $('.template').find("#body").text(aboutBody);
    } else if(id == "tips"){
      $('.template').find("#title").text(tipsTitle);
      $('.template').find("#body").text(tipsBody);
    } else if(id == "fc"){
      $('.template').find("#title").text(fcTitle);
      $('.template').find("#body").text(fcBody);
    };

    $('.page-content').animate({top:"-20%"},1000);
    $('.template').css("top","120%").show();
    $('.template').animate({
      top: "50%"
    },1000).find("#arrow").animateRotate(180,1500);
   
  });
  
  $("#arrow").click(function(){
    $('.template').animate({
      top: "200%"
    },1000);
    $('.page-content').animate({top:"50%"},1000);
  });



});
