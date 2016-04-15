$(function(){
	$("#navbutton").click(function(){
		$("#mobile-menu").slideToggle(200);
	});

	$(".readmore").click(function(event) {
		event.preventDefault();
		$("p#show-this-on-click, .readless").slideDown()
  				// .show();
  				$(this).hide();    
  			});
	$(".readless").click(function(event){
		event.preventDefault();
		$("p#show-this-on-click, .readless").slideUp()
  				// .hide();
  				$(".readmore").show();
  			});

	$(".learnmore").click(function(event) {
		event.preventDefault();
		$("span.hide").slideDown()
				  // .show();
				  $(this).hide(); 
				});

})