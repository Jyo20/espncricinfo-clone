
// import {navbar} from './components/navbar.js';
// let nav=document.getElementById("navbar");
// nav.innerHTML=navbar()


//--------------------------------------------

function slideShow(){
    const arr=[
        "https://tpc.googlesyndication.com/simgad/1378243772812852118?",
        "https://tpc.googlesyndication.com/simgad/11388728182676893077?",
        "https://tpc.googlesyndication.com/simgad/8352670465493422605?",
        "https://tpc.googlesyndication.com/simgad/6532961064546860741?"
    ];
    let i=0;
    let div=document.getElementById("slider");
    let img=document.createElement("img");
   img.src=arr[0];

   div.append(img);
   i=i+1;

   setInterval(function(){
       if(i==4){
        i=0;
       }
       img.src=arr[i];
       i=i+1;
       div.append(img);
   },3000)
}
slideShow();
