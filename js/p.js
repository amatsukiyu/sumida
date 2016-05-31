$(function(){
	$('.tab1').hover(function(){
		var tab1Color = $('.tab1').css('color');
		//$('.tab1-content').css('display','block');
		$('.tab1-content').slideDown();
		$('.tab1-content').css('background',tab1Color);
		
	},
	function(){
		//$('.tab1-content').css('display','none');
		$('.tab1-content').slideUp();
	});
	
	$('.tab2').hover(function(){
		var tab1Color = $('.tab2').css('color');
		//$('.tab1-content').css('display','block');
		$('.tab2-content').slideDown();
		$('.tab2-content').css('background',tab1Color);
		
	},
	function(){
		//$('.tab1-content').css('display','none');
		$('.tab2-content').slideUp();
	});
	
});