//GetElementById()
// const title = document.getElementById('main-heading');

//GetElementByClassName()
// const listItems = document.getElementsByClassName('list-items');

//GetElementByTagName()
// const listItems = document.getElementsByTagName('li');

//querySelector()
// const container = document.querySelector('div');

//querySelectorAll()
// const container = document.querySelectorAll('div');


//Styling elements
const title = document.querySelector('#main-heading');

title.style.color = 'red';

const listItems = document.querySelectorAll('list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '6rem';
}


//Create element
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding element
ul.append(li);

//Modifying the text
li.innerText = 'X-men';

//Modifying - Attributes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

//Modifying - Class
li.classList.add('list-items');
li.classList.remove('list-items');

//Remove element
li.remove();