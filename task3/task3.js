// queryselector//
/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #c5f';
var input=document.querySelector('input');
input.value='Hello World';


var submit= document.querySelector('input[type="submit"]');
submit.value="SEND"


var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';*/

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';

/*var secondlastitem = document.querySelector('.list-group-item:nth-child(3)');
secondlastitem.style.color = 'black';*/

document.querySelector('.list-group-item:nth-child(3)').style.visibility = 'hidden';
//QUERYSELECTORALL//
/*var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='HELLO';*/

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green'
}
 var seconditem=document.querySelectorAll('li.list-group-item')
 seconditem[1].style.color= 'green'

/*var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor = 'grey'
}*/