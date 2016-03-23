
$( document ).ready(function() {
  // Handler for .ready() called.


  $(".readmore").click(function(event) {
  	event.preventDefault();
  	$("p.hide").slideDown()
  				.show();
  	$(this).hide();    
  });
  $(".readless").click(function(event){
  	event.preventDefault();
  	$("p.hide").slideUp()
  				.hide();
  	$(".readmore").show();
  });

  $(".learnmore").click(function(event) {
  	event.preventDefault();
  	$("span.hide").slideDown()
				  .show();
  	$(this).hide(); 
  });

});


