//TRAVERSING THE DOM//

var itemlist = document.querySelector('#items');

//parent node property

//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = 'orange';
//console.log(itemlist.parentNode.parentNode.parentNode);

//parent element property

//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = 'orange';
//console.log(itemlist.parentElement.parentElement.parentElement);

//childnode property

//console.log(itemlist.childNodes);

//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor = 'yellow'

//First child

//console.log(itemlist.firstChild);

//first element child

//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'Hello 1';

//last child

//console.log(itemlist.lastChild);

//first element child

//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'Hello 1';

//next sibling

//console.log(itemlist.nextSibling);

//nextelement sibling

//console.log(itemlist.nextElementSibling);

//previous sibling

//console.log(itemlist.previousSibling);

//previous element sibling

//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';

//create element

// create a div
 var newDiv = document.createElement('div');
//add class
 newDiv.className= 'HELLO';

//add id
newDiv.id= 'hello1';

//att  attr
newDiv.setAttribute('title','Hello Div');

//create a text node
var newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

 console.log(newDiv);


newDiv.style.fontSize = '30px'

 container.insertBefore(newDiv, h1);