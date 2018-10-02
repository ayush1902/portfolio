var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('websites.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('interfaces.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('experiences.')
    .pauseFor(1500)
    .start();
var navigate = function(e) {
		var currentAttrValue = $(this).attr('href');		
		// Show/Hide Tabs
		$(currentAttrValue).fadeIn().siblings().hide();
		// // Change/remove current tab to active
		$(this).addClass('highlighted').siblings().removeClass('highlighted');
		e.preventDefault();
	}
var work_hl = function(e) {
	var currentAttrValue = $(this).attr('href');
}
$(document).ready(function() {
	$('.menu a').on('click', navigate);

});
