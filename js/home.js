var activePage = 0;

$(document).ready(function () {
	// Page Initialization
	$('#about').hide();
	$('#filler').hide();
	// Header Stuff
	$('.header_button').click(function () {
		// changing active button id (cosmetic)
		$('#header_active').removeAttr('id');
		$(this).prop('id', 'header_active');
		// changing page according to button
		switch ($(this).attr('class')) {
			case 'header_button page_0':
				$('#home').show();
				$('#about').hide();
				$('#filler').hide();
				break;
			case 'header_button page_1':
				$('#home').hide();
				$('#about').show();
				$('#filler').hide();
				break;
			case 'header_button page_2':
				$('#home').hide();
				$('#about').hide();
				$('#filler').show();
				break;
			default:
				$('#home').show();
				$('#about').hide();
				$('#filler').hide();
				break;
		}
	});
});
