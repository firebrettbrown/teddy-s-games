const colors = [
'#b60303',
'#890202',
'#cd0404',
'#e40404',
'#262626',
'#4d4d4d',
'#666666',
'#bfbfbf',
'#5b0202',

]

function createSquare(){
  const section = document.querySelector('section');
  const square = document.createElement('span');

  var size = Math.random() * 15;

  square.style.width = 5 - size + 'px';
  square.style.height = 5 - size + 'px';

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
  const bg = colors[Math.floor(Math.random() * colors.length)];

  square.style.background = bg;
  
  section.appendChild(square);

  setTimeout(() =>{
    square.remove()
  },5000)
}

setInterval(createSquare, 0.0005)