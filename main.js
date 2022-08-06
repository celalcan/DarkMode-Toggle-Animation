
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

   function myFunction3(){
    kaymaf2();
   }

   function kaymaf(){
   
    document.getElementById('kutu').src="./kutu-2.png ";
    document.getElementById('kutu2').src="./kutu-2.png ";
     document.querySelector(".mode-circle-ft").style.transform = "translateX(-"+49+"%)";
     document.querySelector(".mode-button").style.background = "#D9D9D9";
     document.querySelector(".mode-circle").style.background = "#ffff";
     document.querySelector(".mode-circle-ft").style.Color = "#ffff";
     document.querySelector(".mobile-frame").style.background= "#ffff";
     document.querySelector(".alt-box").style.background= "#eee";
     const nodeList = document.querySelectorAll(".alt-box-1");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "#C0C0C0";
}
     const nodeList2 = document.querySelectorAll(".alt-box-2");
for (let i = 0; i < nodeList2.length; i++) {
  nodeList2[i].style.color = "#5F5F5F";
}
     const nodeList3 = document.querySelectorAll(".alt-box-3-yazi");
for (let i = 0; i < nodeList3.length; i++) {
  nodeList3[i].style.color = "#000";
}
     document.querySelector(".alt-boxa").style.background= "#eee";
     document.querySelector(".moon").style.transform = "rotate(0deg)";
     document.querySelector(".sun").style.transform = "rotate(260deg)";
     document.querySelector(".yazi").style.color = "black";
     var paths = document.querySelectorAll(".sun"),
     i;
      for (let i = 0; i < paths.length; ++i) {
        console.log(paths[i]);
         console.log(paths.length);
          paths[i].setAttribute('style', 'stroke:#FFB928');
      }
      var pathss = document.querySelectorAll(".moonn"),
      i;
       for (let i = 0; i < pathss.length; ++i) {
         console.log(pathss[i]);
          console.log(pathss.length);
           pathss[i].setAttribute('style', 'fill:#5555');
       }
}
   function kaymaf2(){
    
     document.querySelector(".mode-circle-ft").style.transform = "translateX("+0+"px)";
     document.getElementById('kutu').src="./kutu.png ";
     document.getElementById('kutu2').src="./kutu.png ";
     document.querySelector(".mode-button").style.background = "#fff";
     document.querySelector(".mode-circle").style.marginRight = "0.26vw";
     document.querySelector(".mode-circle").style.background= "#D9D9D9";
     document.querySelector(".mobile-frame").style.background= "black";
     document.querySelector(".alt-box").style.background= "#1B1A1D";
     const nodeList = document.querySelectorAll(".alt-box-1");
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].style.color = "#5C5C5C";
     }
          const nodeList2 = document.querySelectorAll(".alt-box-2");
     for (let i = 0; i < nodeList2.length; i++) {
       nodeList2[i].style.color = "#DBD7D7";
     }
          const nodeList3 = document.querySelectorAll(".alt-box-3-yazi");
     for (let i = 0; i < nodeList3.length; i++) {
       nodeList3[i].style.color = "#ffff";
     }
     document.querySelector(".alt-boxa").style.background= "#1B1A1D";
     document.querySelector(".moon").style.transform = "rotate(-24deg)";
     document.querySelector(".sun").style.transform = "rotate(-260deg)";
     document.querySelector(".yazi").style.color = "#ffff";
     var paths = document.querySelectorAll(".sun"),
     i;
      for (let i = 0; i < paths.length; ++i) {
        console.log(paths[i]);
         console.log(paths.length);
          paths[i].setAttribute('style', 'stroke:#CFCFCF');
      }
      var pathss = document.querySelectorAll(".moonn"),
      i;
       for (let i = 0; i < pathss.length; ++i) {
         console.log(pathss[i]);
          console.log(pathss.length);
           pathss[i].setAttribute('style', 'fill:black');
       }
}
   
     /* document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
     document.querySelector(".frame-mobil").style.width =framegenislik + "px"; */
 
window.addEventListener('resize', function(event){
    let framegenislik = document.querySelector("#rect").offsetWidth;
    let frameyukseklik = document.querySelector("#rect").offsetHeight;
   document.querySelector(".mobile-frame").style.height = frameyukseklik + "px";
    document.querySelector(".mobile-frame").style.width =framegenislik + "px";/* 
    document.querySelector(".frame-mobil").style.height = frameyukseklik + "px";
    document.querySelector(".frame-mobil").style.width =framegenislik + "px"; */
});