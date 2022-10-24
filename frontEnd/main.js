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

  // image
  let imageSearch = document.createElement('image');
  //imageSearch.src = 'frontEnd/img/broccoli.jpa'; 

  // append all item
  inputAdd.append(deleteButton, inputItem, imageSearch);

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