const inputAdd = document.getElementById('search-add');
const addButton = document.getElementById('Addbutton');
addButton.addEventListener('click', () => {
  // delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'delete';
  deleteButton.id = 'done';

  // input 
  let inputItem = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';

  // image
  let imageSearch = document.createElement('img');
  imageSearch.src = 'img/broccoli.jpg'; 
  imageSearch.width = '40';
  // bar added 
  let bar = document.createElement('br');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = "value";
  checkbox.id = "id";

  
  // append all item
  inputAdd.append(deleteButton,  imageSearch, inputItem, checkbox, bar);

  deleteButton.addEventListener('click', () => {
    console.log('delete done');
  });

  inputItem.addEventListener('keyup', () => {
    console.log(inputItem.value);

  });
});



// fetch("http://localhost:3000/search")
// .then(res => res.json())
// //.then(data =>{})