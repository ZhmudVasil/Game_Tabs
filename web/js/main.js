$(document).ready(function() {
	$( ".tab" ).hide();
	$( ".tab:first" ).show();
	$( ".header div:first" ).addClass("active");

	$( ".header div" ).click(function(even) {
		$( ".header div" ).css("border-bottom","none");
		$( ".header div" ).removeClass("active");
		$(this).addClass("active");
		$(this).css("border-bottom","3px solid white");
		$( ".tab" ).hide();

		var selectTab = $(this).find("a").attr("href");
		$(selectTab).fadeIn();
	});

});