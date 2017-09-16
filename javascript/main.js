$(document).ready(function(){
	
	var i = 0;
	for (i = 0; i < localStorage.length; i++) {
		$('.filler').append('<div class="space">' + localStorage.getItem(i) + '</div>');
	}

	i = $('.filler').children().length;

	if (localStorage.length > 0) {
		$('.danktain').show();
	} else {
		$('.danktain').hide();
	}

	$('.button').on('click', function() {
		var $input = $('input[name=todo]').val();
		if ($input != "") {
			$('.filler').append('<div class="space">' + $input + '</div>');
			$('.danktain').show();
			
			localStorage.setItem(i, $('input[name=todo]').val());
			i += 1;

			$('input[name=todo]').val("");
		}
	});

	$('.dankform').submit(function() {
		var $input = $('input[name=todo]').val();
		if ($input != "") {
			$('.filler').append('<div class="space">' + $input + '</div>');
			$('.danktain').show();
			
			localStorage.setItem(i, $('input[name=todo]').val());
			i += 1;

			$('input[name=todo]').val("");
		}
	});

	$('.filler').on('click', '.space', function() {
		var $index = $('.filler').children().index(this);
		$(this).remove();

		localStorage.removeItem($index);
		if ($('.filler').children().length == 0) {
			$('.danktain').hide()
		}

		if ($index == $('.filler').children().length) {
			localStorage.removeItem($index);
		} else {
			for (i = $index; i < $('.filler').children().length; i++) {
				localStorage.setItem(i, localStorage.getItem(i+1));
			}
			localStorage.removeItem($('.filler').children().length);
		}
		
	});

	$('#clear').on('click', function() {
		localStorage.clear(); 
		location.reload(); //Took the easy way around ^_^
	});
	//We should add local storage to this! Local storage with appending is easier, but updating local storage 6132614324
	//after removing something is a bit trickier
	//We must shift the storage values of everything after the element removed up 1 (eg, 3 --> 2)
});
