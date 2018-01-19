import $ from "jquery";


$(document).click(function() {
	$('.dialog-confirm').slideUp(100, function () {
    $(this).remove();
  });
}); 