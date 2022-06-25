var framegenislik = document.querySelector("img").offsetWidth;
var frameyukseklik = document.querySelector("img").offsetHeight;

console.log(framegenislik, frameyukseklik);
window.onscroll = function(){

    document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
    document.querySelector(".mobile-frame").style.width =framegenislik + "px";
}