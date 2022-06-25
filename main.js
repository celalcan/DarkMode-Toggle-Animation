
   let framegenislik = document.querySelector("img").offsetWidth;
   let frameyukseklik = document.querySelector("img").offsetHeight;
    document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
     document.querySelector(".mobile-frame").style.width =framegenislik + "px";
     document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
     document.querySelector(".frame-mobil").style.width =framegenislik + "px";
 
window.addEventListener('resize', function(event){
    let framegenislik = document.querySelector("img").offsetWidth;
  let frameyukseklik = document.querySelector("img").offsetHeight;
   document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
    document.querySelector(".mobile-frame").style.width =framegenislik + "px";
    document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
    document.querySelector(".frame-mobil").style.width =framegenislik + "px";
});