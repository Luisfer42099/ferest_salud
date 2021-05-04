$(window).scroll(function(){
    if($("#menu").offset().top > 10){
        $("#menu").addClass("bg-inverse");
    } else {
        $("#menu").removeClass("bg-inverse");
    }
});