// Slider Init & Options ----------------------------------------
jQuery(document).ready(function($) {
	$('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6').royalSlider({
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
    $('#fullpage').fullpage({
    	// Layout
    	verticalCentered: false,

    	// Navigation
    	anchors: ['home', 'product-definition', 'research-analysis', 'interaction-design', 'wireframe-prototype', 'usability-evaluation', 'frontend-programming'],
    	navigation: true,
    	navigationPosition: 'right',
    	slidesNavigation: false,

    	// Scrolling
    	loopHorizontal: false,

    	// Design
    	controlArrows: false


    });
});

// fullPage Methods ------------------------------------
// $.fn.fullpage.setAutoScrolling(true);