$('document').ready(function() {
	
	//For .table-hover class--------------------------------------------------------------------------------
	
	/*
	 * on function (or delegate function in the previous jquery versions) allows to dynamically 
	 * assign event handler to the present and future nodes.
	 */
	$('.table-hover').on('hover', 'td', function(event) {
		
		$(this).parent().toggleClass('hover'); //add or remove class to the current row
		
		var index = $(this).index(); //index of the current column
		$('.table-hover col').eq(index).toggleClass('hover'); //add or remove class to the current column
		
	});
	
	
	//For .table-disappearance class-------------------------------------------------------------------------
	
	var EXPAND_TEXT = "input <small>(click to expand)</small>";
	var REDUCE_TEXT = "input <small>(click to reduce)</small>";
	var KEY = "input" //the key for select all th contains input word
	
	var firstRow = $('.table-disappearance tbody th:first').parent();
	var titleRow = $('<tr><th colspan="5">' + EXPAND_TEXT + '</th></tr>');
	
	titleRow
		.addClass('group')
		.insertBefore(firstRow)
		.click(function() {
			if ( $(this).hasClass('open')) {
				$(this).siblings(':contains(' + KEY + ')').fadeOut('normal');
				$(this).find('th').html(EXPAND_TEXT);
			} else {
				$(this).siblings(':contains(' + KEY + ')').fadeIn('normal');
				$(this).find('th').html(REDUCE_TEXT);
			}
			
			$(this).toggleClass('open');
		})
		.siblings(':contains(' + KEY + ')') //or .siblings().slice(0, n) for select n siblings
		.fadeOut('fast');
});