
getFirstSelector('div');
nestedTarget();
deepestChild();
increaseRankBy(3);
// window.addEventListener('load', getFirstSelector(), false);
// window.addEventListener('load', nestedTarget(), false);
// window.addEventListener('load', deepestChild(), false);

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}
function deepestChild(){
  var sav = document.querySelectorAll('#grand-node div');
  return sav[(sav.length-1)];
}
function increaseRankBy1(num){
   var sav = document.querySelectorAll('.ranked-list li');
   console.log(sav);

   for(let i=0; i<sav.length; i++){
     console.log(sav[i].innerHTML);
     sav[i].innerHTML =  parseInt(sav[i].innerHTML) + num;
   }
   console.log(sav);
   return sav;
}
function increaseRankBy(num){
   var sav = document.querySelectorAll('.ranked-list');
   console.log(sav);

   for(let i=0; i<sav.length; i++){
     console.log(sav[i].innerHTML);
     sav[i].innerHTML =  parseInt(sav[i].innerHTML) + num;
   }
   console.log(sav);
   return sav;
}
