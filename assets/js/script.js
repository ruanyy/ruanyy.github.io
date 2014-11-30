$(document).ready(function(){


  //   $("#pic").click(function(){
  //   $("#modal-box").show();
  // });
	
	// $("#pic").hover(function() {
	// 	$("#modal-box").
	// })
	
	var m = $("#pic").css("margin-left");
	var move = function() {
		$("#pic").animate({
			'margin-left': '20%'
		}, function() {
			$("#modal-box").fadeIn(1000);
		});
		

		$("#pic").off("click", move).on("click", back);
	}

	var back = function() {
		$("#modal-box").fadeOut(1000, function() {
			$("#pic").animate({
				'margin-left': m
			});
		});
		
		$("#pic").on("click", move).off("click", back);
	}
	$("#pic").on("click", move).off("click", back);

	$("#pic").hover(function() {
		$(".col-md-1 p").text("Thank you for visiting my website!");
	},
		function() {
		$(".col-md-1 p").text("Hi! This is Ying! First time to create a website by myself. Hope you will enjoy.");
	});

    // $("#Modal-header,#foot").click(function(){
    // $("#modal-container").hide();
    // });


  //   $("#pic").hover(function(){
  //   // $("#pic").addClass(pic-active);
  // });
	
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	// $("#modal-overlay").click(function(){
 //    $("#modal-container").hide();
 //    });


// QUESTION 6
  //   $("#pro-pic").click(function(){
  //     if ($('#modal-container').hasClass('modal-active')){
  //         $('#modal-overlay').removeClass('overlay-active');
  //         $('#modal-box-wrapper').removeClass('wrapper-active');
  //         $('#modal-box').removeClass('box-active');
  //     }else {
  //         $('#modal-overlay').addClass('overlay-active');
  //         $('#modal-box-wrapper').addClass('wrapper-active');
  //         $('#modal-box').addClass('box-active');
  //       setTimeout(function(){
  //           $("#modal-container").addClass('modal-active'); 
  //     }, 300);
  // }});
  // //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

  // // QUESTION 7
  //  $(".page-wrapper").click(function(){
  //   if ($('.page-wrapper').hasClass('wrapper-active')) {
  //       $('#sidebar-button').removeClass('button-active');
  //       $('.sidebar-container').removeClass('sidebar-active');
  //       $('.page-wrapper').removeClass('wrapper-active');
  //   }
  //  });











    $("#carousel-next").click(function(){
  var a=parseInt($('#carousel').css('margin-left').replace("px",""));
    if (a <= -3840) {
      return false;
    }
    else{
      $('#carousel').css({'margin-left':a-960 + "px"});
    }
  });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function(){
  var a=parseInt($('#carousel').css('margin-left').replace("px",""));
    if (a >= 0) {
      return false;
    }
    else{
      $('#carousel').css({'margin-left': a+960 + 'px'});
    }
  });

});


