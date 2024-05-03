 document.getElementById('increase');
 document.getElementById('decrease');
 document.getElementById('reset'); 
 document.getElementById('label');
 let count = 0;

 increase.onclick = function(){
    count++;
    label.textContent = count;
 }
 decrease.onclick = function(){
    count--;
    label.textContent = count;
 }
 resetbtn.onclick = function(){
    count = 0;
    label.textContent = count;
 }

 
