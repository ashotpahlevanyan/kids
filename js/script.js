$(document).ready(function(){
	$(".btn").on("click", function(){
		console.log("hello");
	});
	checkitem();
	var listItem = document.getElementByClassName( "formInvalid" );
	alert( "Index: " + $( "li" ).index( listItem ) );
});
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
    } else {
        $this.children('.carousel-control').show();
        $this.children('.right.carousel-control').removeClass("submit");
        $this.children('.left.carousel-control').removeClass("disabled")
    }
}