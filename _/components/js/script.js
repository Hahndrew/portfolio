// Slider Init & Options ----------------------------------------
jQuery(document).ready(function($) {
	$('#slider').royalSlider({
		// options
		imageScaleMode: 'fit',
		imageScalePadding: 0,
		controlNavigation: 'none',
		autoScaleSlider: true,
		autoScaleSliderWidth: 1.5,
		autoScaleSliderHeight: 1,
		arrowsNavAutoHide: false,
		arrowsNavHideOnTouch: true,
		transitionSpeed: 350,
		globalCaption: true
	}); //royalSlider
});//ready()


// fullPage Init & Options ---------------------------------------
$(document).ready(function() {
    $('#fullpage').fullpage();
});