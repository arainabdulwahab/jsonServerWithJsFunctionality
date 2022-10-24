const inputAdd = document.getElementById('search-add');
const addButton = document.getElementById('Addbutton');
addButton.addEventListener('click', () => {

});



fetch("http://localhost:3000/search")
.then(res => res.json())
//.then(data =>{})