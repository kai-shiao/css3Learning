function performAnimation(){
	function fadeIntoView(){
		$('button').eq(0).addClass('fadeIntoView');
	}
	function fadeFromView(){
		$('button').eq(0).removeClass('fadeIntoView').addClass('fadeFromView');
	}
	setTimeout(fadeFromView,3000);
}

function stopAnimation(){
	$currentClass=$('button').eq(0).attr('class');
	$('button').eq(0).removeClass($currentClass).addClass('display');
}

$('button').eq(0).on('click',performAnimation);
$('button').eq(0).on('dblclick',stopAnimation);
