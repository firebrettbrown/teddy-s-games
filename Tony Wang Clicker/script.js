var x = 0;
var lv = 10;
var moretonyscost = 100;
var tonybotcost = 500;
function oncl(){
   x+=lv;
   textUpdate();
    
}
function textUpdate(){
    document.getElementById("p").innerHTML=x+" tonys";
};
function upgrade(){
  if (x>= moretonyscost){
    lv*=2;
    x-=moretonyscost;
    moretonyscost*=2;
    document.getElementById("moretonys").innerHTML= "More Tonys $" + moretonyscost;
    textUpdate();
  }
}
function tonybot(){
  if (x>= tonybotcost){
   lv*=5;
    x-=tonybotcost;
    tonybotcost*=5;
    document.getElementById("tonybot").innerHTML= "Tony Bot $" + tonybotcost;
    textUpdate();

  }
}
