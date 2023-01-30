var random=Math.random()*100;
btn.addEventListener('click', function onClick() {
   btn.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
   setInterval(function(){
      document.getElementById("head").style.backgroundColor="#" + Math.floor(Math.random()*16777215).toString(16);
   },2000)
 });
 