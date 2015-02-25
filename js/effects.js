/*
if(window.innerHeight > window.innerWidth){
    $('#orientation').css('visibility', 'visible');
}
*/

$('.menu-facebook').hover(function(){
    $('.menu-facebook img').attr("src", "icons/facebook.png");
}, function(){
    $('.menu-facebook img').attr("src", "icons/facebook_gs.png");
});

$('.menu-linkedin').hover(function(){
    $('.menu-linkedin img').attr("src", "icons/linkedin.png");
}, function(){
    $('.menu-linkedin img').attr("src", "icons/linkedin_gs.png");
});

$('.menu-github').hover(function(){
    $('.menu-github img').attr("src", "icons/github.png");
}, function(){
    $('.menu-github img').attr("src", "icons/github_gs.png");
});

$('.menu-steam').hover(function(){
    $('.menu-steam img').attr("src", "icons/steam.png");
}, function(){
    $('.menu-steam img').attr("src", "icons/steam_gs.png");
});

$('.menu-playstation').hover(function(){
    $('.menu-playstation img').attr("src", "icons/playstation.png");
}, function(){
    $('.menu-playstation img').attr("src", "icons/playstation_gs.png");
});

$('.link-cell').hover(function(){
    $('.link-cell a h3').attr("color", "white");
}, function(){
    $('.link-cell').attr("background-color", "#5c8f26");
});