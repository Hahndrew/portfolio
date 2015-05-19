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

        if ($(window).width() < 887) {
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


    // mainNav-mobile ------------------------------------------------------------
    // ---------------------------------------------------------------------------
    $(function () {
        $('.click-nav > ul').toggleClass('no-js js');
        $('.click-nav .js ul').hide();
        $('.click-nav .js').click(function(e) {
            $('.click-nav .js ul').slideToggle(200);
            $('.clicker').toggleClass('active');
            e.stopPropagation();
        });
        $(document).click(function() {
            if ($('.click-nav .js ul').is(':visible')) {
                $('.click-nav .js ul', this).slideUp();
                $('.clicker').removeClass('active');
            }
        });
    });

});//ready()