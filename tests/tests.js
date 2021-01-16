//randomness
var firstnames = ['Adam', 'Alex', 'Al','Alexander','Aaron','Bradley','Bruce','Brandon','Charles','Carter','Casey','Chase','BOB','Derek','DJ','DuganSter','Eddy','Ethan','Helios','Brother Francis','Builda','John','Peter','Ese','Pablo','Ike','Willis','Walter','Wilt','Quentin','Ted','Ed','Kyle','Marvin','MJ','Rod','Raymond','Richard','George','Gavin','James','Jack','Aahron','James','John ','Robert','Bartholemew','Vilregard Autumnhoof',];
var lastnames = ['Wilkerson','Quenault','Oreo','Dugan','Hong','Tang','Willis','Owusu','Richmond','Wang','Zhang','Weaver','Banner','Yak','Lumber','Calorone','Qing','Apple','Rich','Young','Brown','Black'];
var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
var lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
//random events
var randomevent_1 = Math.floor(Math.random() * 50) + 5; 
var randomevent_2 = Math.floor(Math.random() * 40) + 5; 
var randomevent_2_2 = Math.floor(Math.random() *3) + randomevent_2 + 1;
var randomevent_3 = Math.floor(Math.random() * 5) + 1; 
var randomevent_4 = Math.floor(Math.random() * 150) + 5; 
var randomevent_5 = Math.floor(Math.random() * 150) + 5; 
var randomevent_6 = Math.floor(Math.random() * 150) + 5; 


//randomgains&losses
var randommeatloss1 = Math.floor(Math.random() * 16) + 3;

//date
var date = 1644;
//temperature
var heat=60;
//base
var x=0;
var lv=1;
var lv2=3;
var day=0;
var day1=0;
//morale 
var morale=100;
var maxmorale=105;
//logs
var logs=5;
var logcost=50;
var maximumlogs=15;
//gold
var gold=1;
var maxgold=10;
var goldcost=100;
//wood
var wood=200;
var woodcost=3;
var maximumwood=400;
//workers
var maximumworkers=2;
var workers=1;
//hunters
var hunters=0;
var maximumhunters=2;
//loggers
var loggers=0;
var maximumloggers=2;
//food
var meat=75;
var meatcost=7;
var maximummeat=200;
//upgrade costs
var upgradecost=100;
var workerupgradecost=1000;
var hunterupgradecost=50;
var loggerupgradecost=250;
var hutcost=100;
var storagecost=150;
var meatstoragecost=200;
var woodgatherercost=100000;
var goldupgradecost=500;
//townspeople 
var townspeople=hunters+workers+loggers;
var maxpeople=maximumhunters+maximumworkers+maximumloggers;
//consumption
var woodconsuption=-1;
var meatconsuption=-1;
var goldconsuption=0;
//IMPORTANT FUNCTIONS
//newday
function newday(){
  if (wood>0 && meat>0){
   meat+=meatconsuption;
   wood+=woodconsuption;
   gold+=goldconsuption;
   day+=1;
   day1+=1;
   morale-=1;
   textUpdate();
   if (gold>=maxgold){
     gold=maxgold;
   }
   if (day==1561){
     document.getElementById("storyline").innerHTML="Congratulations! You Survived 300 years and beat the game! Here's a cookie: 🍪";
     textUpdate();
   }

   if (day1==53){
     date+=1;
     day1-=52;
     document.getElementById("storyline").innerHTML="Congratulations! You survived your first year";
     textUpdate();
   }
   if (day==1){
    document.getElementById("storyline_two").innerHTML="Your Name is "+firstname+" "+lastname;
    create_gold();
   }
   if (day==randomevent_1){
    document.getElementById("storyline").innerHTML="Week "+randomevent_1+": A pack of wolves got into your meat supply (-7 Meat)";
    meat-=7;
    textUpdate();
   }
   if (day==randomevent_2){
    document.getElementById("storyline").innerHTML="Week "+randomevent_2+": A traveler approaches you, warning you of an upcoming famine in a few weeks";
    textUpdate();
   }
   if (day==randomevent_2_2){
    document.getElementById("storyline").innerHTML="Week "+randomevent_2_2+": A famine strikes your town. You lose "+randommeatloss1+" meat";
    meat-=randommeatloss1;
    textUpdate();
   }
   if (day==randomevent_3){
    document.getElementById("storyline").innerHTML="Week "+randomevent_3+": People from the town here about your town and buy some wood";
    wood-=10;
    x+=20;
    textUpdate();
   }
   if (day>=10 && x>=100000){
    document.getElementById("woodgatherer").innerHTML="Wood Gatherer($"+woodgatherercost+")";
    document.getElementById("storyline").innerHTML="Year 5! You unlocked the Wood Gatherer!";
   } 
  }
  if (wood<=0 || meat<=0 || morale<=0) {
   window.location.assign("gameover.html");
  }
}
//on click
function sellwood(){
  if (wood>0){
   x+=lv;
   wood-=1;
   textUpdate();
  }
}
function sellmaxwood(){
  if (wood>0){
   x+=wood*lv;
   wood=0;
   textUpdate();
  }
}
function sellmeat(){
  if (meat>0){
   x+=lv2;
   meat-=1;
   textUpdate();
  }
}
function sellmaxmeat(){
  if (meat>0){
   x+=meat*lv2;
   meat=0;
   textUpdate();
  }
}
//text update
function textUpdate(){
  if (goldconsuption==0){
    document.getElementById("p").innerHTML="$"+x;
    document.getElementById("town").innerHTML=workers+" Workers  |  "+hunters+" Hunters  |  "+loggers+" Loggers  ("+townspeople+"/"+maxpeople+")";
    document.getElementById("wood").innerHTML="Wood: "+wood+"/"+maximumwood;
    document.getElementById("meat").innerHTML="Meat: "+meat+"/"+maximummeat;
    document.getElementById("heat").innerHTML=heat+"° F";
    document.getElementById("sellwood").innerHTML="Sell Wood($"+lv+")";
    document.getElementById("sellmeat").innerHTML="Sell Meat($"+lv2+")";

    document.getElementById("newday").innerHTML="Week "+day1+", "+date;
    document.getElementById("buildhut").innerHTML="Hut ("+hutcost+" wood)";
    document.getElementById("buildstorage").innerHTML="Wood Storage ("+storagecost+" wood)";
    document.getElementById("meatstorage").innerHTML="Meat Storage ("+meatstoragecost+" wood)";
    document.getElementById("morale").innerHTML="Morale: "+morale;
  }
  if (goldconsuption>=1){
    document.getElementById("p").innerHTML="$"+x;
    document.getElementById("town").innerHTML=workers+" Workers  |  "+hunters+" Hunters  |  "+loggers+" Loggers  ("+townspeople+"/"+maxpeople+")";
    document.getElementById("wood").innerHTML="Wood: "+wood+"/"+maximumwood;
    document.getElementById("meat").innerHTML="Meat: "+meat+"/"+maximummeat;
    document.getElementById("heat").innerHTML=heat+"° F";
    document.getElementById("sellwood").innerHTML="Sell Wood($"+lv+")";
    document.getElementById("sellmeat").innerHTML="Sell Meat($"+lv2+")";

    document.getElementById("newday").innerHTML="Week "+day1+", "+date;
    document.getElementById("buildhut").innerHTML="Hut ("+hutcost+" wood)";
    document.getElementById("buildstorage").innerHTML="Wood Storage ("+storagecost+" wood)";
    document.getElementById("meatstorage").innerHTML="Meat Storage ("+meatstoragecost+" wood)";
    document.getElementById("morale").innerHTML="Morale: "+morale;
    document.getElementById("gold").innerHTML="Gold: "+gold+"/"+maxgold;

  }



}
//MARKETPLACE FUNCTIONS:
//buywood
function buywood(){
  if (x>=woodcost && wood+4<=maximumwood){
    wood+=4;
    x-=woodcost;
    textUpdate();
  }
}
//buymeat
function buymeat(){
  if (x>=meatcost && meat+3<=maximummeat){
    meat+=3;
    x-=meatcost;
    textUpdate();
  }
}
function buymaxmeat(){
  if (x>=meatcost){
    var meeat=Math.floor(x/lv2);
    wood+=meeat;
    x-=meeat*lv2;
    textUpdate();
  }
}
//TOWN FUNCTIONS
//build a hut, houses 3 people
function buildhut(){
  if (wood>=hutcost){
    maximumhunters+=1;
    maximumworkers+=1;
    maximumloggers+=1;
    maxpeople+=3;
    wood-=hutcost;
    hutcost+=150;
    textUpdate();
  }
}
function buildstorage(){
  if (wood>=storagecost){
    wood-=storagecost;
    storagecost+=100;
    maximumwood+=500;
    maximumlogs+=35;
    textUpdate();
  }
}
function buildmeatstorage(){
  if (wood>=meatstoragecost){
    wood-=meatstoragecost;
    meatstoragecost+=100;
    maximummeat+=250;
    textUpdate();
  }
}


function upgradeproducts(){
        if (x>=upgradecost){
         lv+=2;
         lv2+=6;
         x-=upgradecost;
         upgradecost*=3; 
         document.getElementById("u").innerHTML="Upgrade Woodcutters($"+upgradecost+")";
         textUpdate();

      }
}
function hireworkers(){
        if (x>=workerupgradecost && townspeople<maxpeople){
         lv*=2;
         lv2*=2;
         workers+=1;
         townspeople+=1;
         x-=workerupgradecost;
         meatconsuption-=1;
         workerupgradecost*=3;
         document.getElementById("hireworkers").innerHTML="Hire Workers($"+workerupgradecost+")";
         document.getElementById("workers").innerHTML="Workers: "+workers;

         textUpdate();

      }
}
function hirehunters(){
        if (x>=hunterupgradecost && townspeople<maxpeople){
          hunters+=1;
          x-=hunterupgradecost;
          townspeople+=1;
          hunterupgradecost*=3;
          meatconsuption+=3;
          document.getElementById("hirehunters").innerHTML="Hire Hunters($"+hunterupgradecost+")";
          document.getElementById("hunters").innerHTML="Hunters: "+hunters;
          textUpdate();
        }
}
function hireloggers(){
        if (x>=loggerupgradecost && townspeople<maxpeople){
          loggers+=1;
          x-=loggerupgradecost;
          townspeople+=1;
          hunterupgradecost *=3;
          meatconsuption-=1;
          woodconsuption+=3;
          document.getElementById("hireloggers").innerHTML="Hire Loggers($"+loggerupgradecost+")";
          document.getElementById("loggers").innerHTML="Loggers: "+loggers;

          textUpdate();

        }
}
function buildmine(){
        if (wood>=goldupgradecost){
          wood-=goldupgradecost;
          goldupgradecost *=3;
          goldconsuption+=1;
          document.getElementById("gold").innerHTML="Gold: "+gold+"/"+maxgold;
          document.getElementById("buildmine").innerHTML="Mine ("+goldupgradecost+" wood)";

          textUpdate();

        }
}
//events
function campfire(){
  if (wood>=3){
   wood-=3;
   morale+=5
   heat+=1;
   textUpdate();
   if (morale>=maxmorale){
     morale=maxmorale;
     textUpdate();
   }
  }
}
function woodgatherer(){
  if(x >= woodgatherercost){
    x -= woodgatherercost;
    woodgatherercost*=2;
    document.getElementById("woodgatherer").innerHTML="Wood Gatherer($"+woodgatherercost+")";
    textUpdate();
  setInterval(() => {
    wood+=1;
    textUpdate();
    if (wood>=maximumwood){
      wood=maximumwood-1;
    }
}, 100)
  }
}
function meatgatherer(){
  if(x >= meatgatherercost){
    x -= meatgatherercost;
    meatgatherercost*=2;
    textUpdate();
  setInterval(() => {
    meat+=1;
    textUpdate();
    if (meat>=maximummeat){
      meat=maximummeat-1;
    }
}, 100)
  }
}
