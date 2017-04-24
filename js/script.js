var isFormValid = false;

$(document).ready(function(){
	
	checkitem();
	var minLength = 1;
	$(".form input").on("change paste keyup", function(){
		var name = $("#name").val().trim();
		var surname = $("#surname").val().trim();
		$(".initname").text(name);
		if( name.length >= minLength && surname.length >= minLength ) {
			isFormValid = true;
			forcePause();
			$("#myCarousel").children('.right.carousel-control').removeClass("disabled");
			$("#myCarousel").children('.left.carousel-control').removeClass("disabled");
			$(".form").addClass("valid").removeClass("invalid");
			$(".form").parent().addClass("formValid").removeClass("formInvalid");
		} else {
			isFormValid = false;
			forcePause();
			$("#myCarousel").children('.right.carousel-control').addClass("disabled");
			$("#myCarousel").children('.left.carousel-control').addClass("disabled");
			$(".form").addClass("invalid").removeClass("valid");
			$(".form").parent().addClass("formInvalid").removeClass("formValid");
		}
	});

	//this is already built-in functionality for anchors in bootstrap, just add support for li
	$('body').on('click', 'li.disabled', function(event) {
	    event.preventDefault();
	});
});

function forcePause() {
	var carouselNavElements = $('#myCarousel').find(
		"a[href='#myCarousel'], li[data-target='#myCarousel']"
	);
	if(isFormValid) {
		//set the disabled attribute to false for the carousel's nav elements
		carouselNavElements.prop('disabled', false);
	} else {
		//set the disabled attribute to true for the carousel's nav elements
		carouselNavElements.prop('disabled', true);
	}
}

$('#myCarousel').on('slid.bs.carousel', checkitem);

function checkitem()	// check function
{
    var $this = $('#myCarousel');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.left.carousel-control').addClass("disabled");
        $this.children('.right.carousel-control').removeClass("submit");

        // But show right arrow
        $this.children('.right.carousel-control').show();
    } else if ($('.carousel-inner .item:last').hasClass('active')) {
        // Hide right arrow
        $this.children('.right.carousel-control').addClass("submit");
        $this.children('.left.carousel-control').removeClass("disabled");

        // But show left arrow
        $this.children('.left.carousel-control').show();
    } else if($('.carousel-inner .item.withForm').hasClass('active')) {
    	forcePause();
    	if(!isFormValid) {
			$("#myCarousel").children('.right.carousel-control').addClass("disabled");
    	}
    } else {
        $this.children('.carousel-control').show();
        $this.children('.right.carousel-control').removeClass("submit");
        $this.children('.left.carousel-control').removeClass("disabled");
    }
}
