import $ from "jquery";


$(document).click(function() {
	$('.dialog-confirm').slideUp(100, function () {
    $(this).remove();
  });
}); 

$(document).on('mouseover','.restore-sudoku',function() {
	const key = $(this).attr('data-sudoku');

	const detail = $('[data-detail="' + key + '"]');
	if (!$(detail).hasClass('active')) {
		$(detail).addClass('active');
	}

});

$(document).on('mouseleave','.restore-sudoku',function() {
	const key = $(this).attr('data-sudoku');

	const detail = $('[data-detail="' + key + '"]');

	console.log(key);

	if ($('[data-detail="' + key + '"]:hover').length === 0) {
		if ($(detail).hasClass('active')) {
			$(detail).removeClass('active');
		}
	}
});

$(document).on('mouseleave','.restore-detail',function() {
	if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
});

