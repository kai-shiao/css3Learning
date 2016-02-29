function performAnimation(){
	function fadeIntoView(){
		$('button').eq(0).addClass('fadeIntoView');
	}
	function fadeFromView(){
		$('button').eq(0).removeClass('fadeIntoView').addClass('fadeFromView');
	}
	fadeIntoView();
	setTimeout(fadeFromView,1000);
}

$('document').ready(performAnimation);