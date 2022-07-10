
   function myFunction(){
    let framegenislik = document.querySelector("#rect").offsetWidth;
   let frameyukseklik = document.querySelector("#rect").offsetHeight;
   console.log(framegenislik, frameyukseklik);
    document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
     document.querySelector(".mobile-frame").style.width =framegenislik + "px";
   }
   let kayma=0;
   function myFunction2(){
   kaymaf();
    
    document.querySelector(".mode-circle").style.marginRight = "0px";
   }
   function kaymaf(){
    kayma+=0.15;
    if(kayma<2.638){
    setTimeout(function(){kaymaf()},8);       
     } 
     document.querySelector(".mode-circle").style.transform = "translateX(-"+kayma+"vw)";
     document.querySelector(".moon").setAttribute('style', 'fill:green');

}
   
     /* document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
     document.querySelector(".frame-mobil").style.width =framegenislik + "px"; */
 
window.addEventListener('resize', function(event){
    let framegenislik = document.querySelector("#rect").offsetWidth;
    let frameyukseklik = document.querySelector("#rect").offsetHeight;
   document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
    document.querySelector(".mobile-frame").style.width =framegenislik + "px";
    document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
    document.querySelector(".frame-mobil").style.width =framegenislik + "px";
});