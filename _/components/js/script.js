// Slider Init & Options ----------------------------------------
$(document).ready(function($) {

    // fullPage Init & Options ---------------------------------------------------
    // ---------------------------------------------------------------------------
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

    // Set austoScrolling to false at tablet and mobile breakpoints
    $(window).resize(function() {

        if ($(window).width() < 887 || $(window).height() < 790) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }

    }); //end of resize()


    // Slider Init & Options -----------------------------------------------------
    // ---------------------------------------------------------------------------
	$('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6').royalSlider({
		// options
		imageScaleMode: 'fit',
		imageScalePadding: 0,
		controlNavigation: 'none',
		autoScaleSlider: true,
		autoScaleSliderWidth: 960,
		autoScaleSliderHeight: 540,
		arrowsNavAutoHide: false,
		arrowsNavHideOnTouch: true,
		transitionSpeed: 350,
		globalCaption: true

	}); //royalSlider

});//ready()