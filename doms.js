// examine the document objects//

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Good Bye';
//headerTitle.innerHTML='<h3>HELLO</h3>';
header.style.borderBottom ='solid 3px #000';
var heading=document.getElementById('main');
heading.style.color='green'
//GETELEMENTBYCLASSNAME//

//var items=document.getElementsByClassName('list-group-item');
//console.log(items);