
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
  console.log(sav);
  return sav[(sav.length-1)];
}
function increaseRankBy(num){
   var sav = document.querySelectorAll('#ranked-list li');
   for(let i=0; i<sav.length; i++){
     sav[i].innerHTML =  parseInt(sav[i].innerHTML) + num;
   }
   return sav;
}
