document.onload=(function(){
  let browserWidth = document.body.clientWidth;
  setTimeout(function(){
    document.querySelector(".menu").style.transition = ".5s";
  },1);
// Hide menu
  let menu = document.querySelector(".menuLabel");
    menu.onclick = () => {
      menu.childNodes.forEach(e =>{
        e.tagName == "DIV" ? e.classList.toggle("action") : false;
        });
        if(document.querySelector(".menu").style.transform != "translateX(0%)"){
        document.querySelector(".menu").style.transform = "translateX(0%)";
        document.querySelector(".menuLabel").style.position = "fixed";
        document.querySelector(".bodyWrapper").style.transform = "translateX(-59.7%)";
    }

   else {
     document.querySelector(".menu").style.transform = "translateX(100%)";
     document.querySelector(".menuLabel").style.position = "absolute";
     document.querySelector(".bodyWrapper").style.transform = "translateX(0%)";
  }
}
  // slaider fo header content
  let slaider = document.querySelector(".slaiderHeaderContainer");
  let dots = document.querySelectorAll(".dots");
  let offset;
  setTimeout(function(){
    offset = document.querySelector(".content").offsetWidth;
},50)
  slaider.style.left = 0;
    dots.forEach( (e,i) => {
      e.onclick = () => {
        console.log(offset)
        if(i == 0){
          slaider.style.left = 0;
          remove(dots,"activeted",0);
        }
        else if ( i == 1){
          slaider.style.left = -offset +"px";
          remove(dots,"activeted",1);
        }
        else {
          slaider.style.left = -offset*2+"px";
          remove(dots,"activeted",2);
      }
    }
    }
  )
// touch slaider
  let slaider1 = document.querySelector(".contentContainer");
  let touchStart, touchEnd;
  slaider1.addEventListener("touchstart",function(){
      touchStart = event.changedTouches[0].pageX;
  });
  slaider1.addEventListener("touchend",function(){
    touchEnd = event.changedTouches[0].pageX;
    if(touchStart>touchEnd){
      if(slaider.style.left == "0px"){
      slaider.style.left = -offset + "px";
      remove(dots,"activeted",1);
    }
      else if(slaider.style.left == -offset + "px"){
        slaider.style.left = -offset*2 + "px";
        remove(dots,"activeted",2);
      }
    }
    else {
      if(slaider.style.left == -offset * 2 + "px"){
      slaider.style.left = -offset + "px";
      remove(dots,"activeted",1);
    }
      else if(slaider.style.left == -offset + "px"){
        slaider.style.left = 0 + "px";
        remove(dots,"activeted",0);
    }
  }});
function remove(elem,_class,i){
  elem.forEach(e => e.classList.remove(_class));
  elem[i].classList.add(_class);
}
// Hover effects for section Features
  let buttons = document.querySelectorAll(".featuresContent");
  for(let i =0, j=3; i<buttons.length;i++){
  buttons[i].childNodes[5].onmouseover= function(){
    return hover(i,"hover",`imgs/${j}.png`)}

  buttons[i].childNodes[5].onmouseout= function(){
    return hover(i,"hover",`imgs/${i}.png`)
  };
  j++
}

function hover(i,_class,path){
 buttons[i].childNodes[1].classList.toggle(_class)
 buttons[i].childNodes[3].classList.toggle(_class)
 setTimeout(function(){
   buttons[i].childNodes[1].
   childNodes[0].style= "background-image:url(" + path + ")"},70)
}
// slaider for work section
let slaiderElements = document.querySelector(".workContainer");
let slaiderLeftButton = document.getElementById('left');
let slaiderRightButton = document.getElementById('right');
let slStyle = slaiderElements.style;
let slTouchWorkSect = document.querySelector(".slaiderMoveBlock");
let slElOffset;
setTimeout(function(){
  slElOffset = document.querySelector(".slaiderContainer").offsetWidth;
  slStyle.left = -slElOffset*2 + "px";
},1);
let nMoves = 4;
slaiderLeftButton.onclick = function(){
    if(slStyle.left == "0px") return false;
  slStyle.left = parseFloat(slStyle.left) + slElOffset + "px";
}
slaiderRightButton.onclick = function(){
  if(slStyle.left == -slElOffset*nMoves +"px") return false;
  slStyle.left = parseFloat(slStyle.left) + -slElOffset + "px";
}
  function checkResolution(){
    browserWidth = document.body.clientWidth;
    if(browserWidth<801) return  nMoves = 7;
     if(browserWidth<1201)return  nMoves = 6;
  }

  window.onresize = function(){
    setTimeout(function(){
      slElOffset = document.querySelector(".slaiderContainer").offsetWidth;
      slStyle.left = -slElOffset*2 + "px";
    },2);
  checkResolution();
  }
    checkResolution();
// touch slaider
slTouchWorkSect.addEventListener("touchstart",function(){
  touchStart = event.changedTouches[0].pageX;
  });
slTouchWorkSect.addEventListener("touchend", function(){
  console.log(touchStart + " " +touchEnd);
  touchEnd = event.changedTouches[0].pageX;
  if(touchStart > touchEnd){
    console.log(1);
    if(slStyle.left == -slElOffset*nMoves +"px") return false;
    slStyle.left = parseFloat(slStyle.left) + -slElOffset + "px";

  }
  else {
    if(slStyle.left == "0px") return false;
    slStyle.left = parseFloat(slStyle.left) + slElOffset + "px";
    console.log(2);
  }
})
// scroll animation
let btnLinks = document.querySelectorAll(".navLinks a");
let sections = document.querySelectorAll("section, header");
let btnUp = document.querySelector(".up");
function scrollAssign(btn1, btn2, section){
    btn1.onclick = () => scrollToElem(section);
    btn2.onclick = () => scrollToElem(section);
    function scrollToElem(section){
      event.preventDefault();
      section.scrollIntoView({block: "start", behavior: "smooth"})
  }
}

for(let i = 0, j = 6, s = 0; i<6;){
    if(i == 2){
      i++;
      j++;
      continue;
    }
    scrollAssign(btnLinks[i], btnLinks[j], sections[s])
    i++;
    j++;
    s++;
  }
  scrollAssign(btnUp, false, sections[0]);
  let btnsHideMenu = document.querySelectorAll(".menu ul li a");
   btnsHideMenu.forEach((e,i)=> {
      i != 2 ? e.onclick = function(){
        if(i>2) i--;
        event.preventDefault();
        console.log(sections[i])
        sections[i].scrollIntoView({block: "start", behavior: "smooth"});
        document.querySelector(".menu").style.transform = "translateX(100%)";
        document.querySelector(".menuLabel").style.position = "absolute";
        document.querySelector(".bodyWrapper").style.transform = "translateX(0%)";
        menu.childNodes.forEach(e =>{
          e.tagName == "DIV" ? e.classList.toggle("action") : false;
          });
     } : false;

   })
// opacity effects
let arrOpEffect = document.querySelectorAll(".contentContainer, .featuresBlock, .slaiderMoveBlock, .blog, .form")
let arrSection = document.querySelectorAll(".mainHeader, .secFeatures, .secWorks, .blogSec, .map");
let screenW = 0;
  arrOpEffect[0].style.cssText = "opacity: 1; transform: translateY(0);";
 document.addEventListener("scroll",function(){
   arrOpEffect.forEach((e,i) => {
     if(document.body.clientWidth<=1200) screenW = -900;
     if(arrSection[i].getBoundingClientRect().top < window.innerHeight &&
     -arrSection[i].getBoundingClientRect().bottom -screenW < window.innerHeight ){
       e.style.cssText = "opacity: 1; transform: translateY(0);"

     }
     else if (arrSection[i].getBoundingClientRect().top > window.innerHeight ){
        e.style.cssText = "opacity: 0; transform: translateY(40%);"
     }
     else {
       e.style.cssText = "opacity: 0; transform: translateY(-40%);"
     }

   })
 });
// link to github
   let btnsProfile = document.querySelectorAll(".button");
   btnsProfile.forEach(e => e.onclick = () => window.open("https://github.com/free3xm?tab=repositories"))
}())
