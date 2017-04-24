var isFormValid = false;

$(document).ready(function(){
	
	checkitem();
	
	$(".form input").on("change paste keyup", function(){
		name = $("#name").val();
		surname = $("#surname").val();
		$(".initname").text(name);
		if( name.length >= 3 && surname.length >=3 ) {
			console.log(name + ", " + surname);
			isFormValid = true;
			forcePause();
			$("#myCarousel").children('.right.carousel-control').removeClass("disabled");
			$(".form").addClass("valid").removeClass("invalid");
			$(".form").parent().addClass("formValid").removeClass("formInvalid");
		} else {
			console.log("Name and Surname should be at least 3 letters");
			isFormValid = false;
			forcePause();
			$("#myCarousel").children('.right.carousel-control').addClass("disabled");
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
		console.log("started");
	} else {
		//set the disabled attribute to true for the carousel's nav elements
		carouselNavElements.prop('disabled', true);
		console.log("paused");
	}
}

$('#myCarousel').on('slid.bs.carousel', checkitem);

function checkitem()	// check function
{
    var $this = $('#myCarousel');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.left.carousel-control').addClass("disabled");
        $this.children('.right.carousel-control').removeClass("submit")

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
        $this.children('.left.carousel-control').removeClass("disabled")
    }
}







// $('#myCarousel').bind('slid.bs.carousel', function() {
//     currentIndex = $('item.active').index() + 1;
//    	console.log(currentIndex);
// });


	//var myCarousel = $("#myCarousel");
	// //bind forcePause() to the slide event for our carousel
	// myCarousel.on('slide.bs.carousel', { pauseAmount: 5000 }, forcePause);

	// /**  setTimeout and disable all carousel navigation   *
	//  *    properties for the duration of the pause         */
	// function forcePause(event) {
	//     //extract pauseAmount from our bound data
	//     var pauseAmount = event.data.pauseAmount

	//     //get all the navigation properties of myCarousel
	//     var carouselNavElements = myCarousel.find(
	//         "a[href='#myCarousel'], li[data-target='#myCarousel']"
	//     );

	//     //set the disabled attribute to true for the carousel's nav elements
	//     carouselNavElements.prop('disabled', true);
	//     //console.log('pause started');

	//     //set the timer with the pauseAmount
	//     // setTimeout(function(){
	//     //     console.log('pause finished');

	//     //     //"reenable" the nav elements
	//     //     carouselNavElements.prop('disabled', false);
	//     // }, pauseAmount);

	//     //    var listItem = $( "formInvalid" );
	//     // alert( "Index: " + $( "li" ).index( listItem ) );
	// }

