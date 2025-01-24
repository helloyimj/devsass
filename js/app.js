// top_btn
$(window).scroll(function () {

    // console.log($(this).scrollTop())

    if ($(this).scrollTop() > 600) {
        $(".wrap_side_btn").fadeIn();
        // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
    } else if ($(this).scrollTop() < 600) {
        $(".wrap_side_btn").fadeOut();
    }
});

$(document).on("click", ".wrap_side_btn .btn_top", function () {
  // $(document).on("click",".top_btn", function () {
    $("html, body").stop().animate({    
        scrollTop: 0,
    },
    "500"
    );
    return false;
});