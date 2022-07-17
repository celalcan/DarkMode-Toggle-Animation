
    var svgDoc;
    function changeColor() {
        svgDoc = a.contentDocument;
        // get the inner element by id
        var paths = svgDoc.querySelectorAll("path");
        // add behaviour
        for (i = 0; i < paths.length; i++) {
            paths[i].setAttribute('style', 'fill:pink');
        }
    }

    var a = document.getElementById("alphasvg");

    // It's important to add an load event listener to the object,
    // as it will load the svg doc asynchronously
    a.addEventListener("load", function () {

        // get the inner DOM of alpha.svg
        svgDoc = a.contentDocument;
        // get the inner element by id
        var paths = svgDoc.querySelectorAll("path");
        // add behaviour
        for (i = 0; i < paths.length; i++) {
            paths[i].setAttribute('style', 'fill:green');
        }

    }, false);
  
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
    /* kayma+=0.15;
        if(kayma<2.638){
    setTimeout(function(){kaymaf()},8);       
     } 
     document.querySelector(".mode-circle").style.transform = "translateX(-"+kayma+"vw)"; */
     document.querySelector(".mode-circle-ft").style.justifyContent = "flex-start";
     document.querySelector(".mode-circle-ft").style.Color = "#ffff";
     var paths = document.querySelectorAll(".sun"),
     i;
      for (let i = 0; i < paths.length; ++i) {
        console.log(paths[i]);
         console.log(paths.length);
          paths[i].setAttribute('style', 'stroke:green');
      }
     
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