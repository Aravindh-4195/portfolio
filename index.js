$(".menu").click(function(){
    $("nav").addClass("mini-nav");
    $(".menu"). css({"display":"none"});
    $(".grid-item1").css({"display":"none"});
    $(".grid-item").css({"display":"block"});
    $(".close").css({"display":"block"});
});
$(".close").click(function(){
    $("nav").removeClass("mini-nav");
    $(".menu"). css({"display":"block"});
    $(".grid-item1").css({"display":"block"});
    $(".grid-item").css({"display":"none"});
    $(".close").css({"display":"none"});
});


// $(".intrest-col").mouseenter(
//     function(){
//         $(".intrest-name").css({"display":"block"}).animate({left:'200px'});
//     }
// );
// $(".intrest-col").mouseleave(
//     function(){
//         $(".intrest-name").animate({left:'20px'}).delay(100).css({"display":"none"});
//     }
// );
// $("body").mouseenter(
//     function(){
        
//     }
// );