const inputAdd = document.getElementById('search-add');
const addButton = document.getElementById('Addbutton');
let searchImg = 'broccoli';


// search db.json and filter it 
const searchStates = async searchText =>{ 
  const res = await fetch("http://localhost:3000/search");
  const states = await res.json();


    // get matches to current text input 
    let matches = states.filter(state => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      if(state.name.match(regex)  ){ 
        return state.name.match(regex);
      }
    });
    // empty search box 
    if(searchText.length === 0){ matches = []; matchList.innerHTML = ''}
    //console.log(matches)
    console.log(matches);
    console.log(!matches);
    outputHtml(matches);
  };
// show result in html 
const outputHtml = matches => {
  if(matches.length > 0 && matches){
    if(matches){ 
    const htmls = document.createElement('div');
    htmls.zindex= 1;
    htmls.id= 'ones';
    matches.map(match => `
      <div>
        <img src="${match.image}" width="40"><h1>${match.name} </h1>
      </div>
    `).join('');
    matchList.innerHTML = htmls;
    }

  } 

}





addButton.addEventListener('click', () => {
  // delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'delete';
  deleteButton.id = 'done';

 
  // image
  let imageSearch = document.createElement('img');
  imageSearch.src = 'img/'+ searchImg +'.jpg'; 
  imageSearch.width = '40';
  // input 
  let inputItem = document.createElement('input');
  inputItem.type = 'search';
  inputItem.placeholder = 'noe';
  inputItem.onclick = search();

  // match list div 
  let matchList = document.createElement('div');
  matchList.id = 'matchList'
  // bar added 
  let bar = document.createElement('br');
  // add checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = "value";
  checkbox.id = "id";


  // append all item
  inputAdd.append(deleteButton,  imageSearch, inputItem, checkbox,matchList, bar);

  deleteButton.addEventListener('click', () => {
    console.log('delete done');
  });

   function search(){ inputItem.addEventListener('keyup', () => searchStates(inputItem.value));  console.log(inputItem.value); };
 
});


// button clone list
function cloneTodo(){
  let node = document.getElementById('cloneList');
  let clone = node.cloneNode(true);
  document.getElementById("displayCloneList").append(clone);
}

// button delete
function deletebtn(){
  let list = document.getElementById("displayCloneList");
  list.remove();
}
// button background image
  let chgBtn = document.querySelector('body');
function backgrountUser1(){  chgBtn.style.backgroundImage = `url('./img/img1.webp')`;  }
function backgrountUser2(){  chgBtn.style.backgroundImage = `url('./img/img2.jpg')`;  }
function backgrountUser3(){  chgBtn.style.backgroundImage = `url('./img/img3.jpg')`;  }
function backgrountUser4(){  chgBtn.style.backgroundImage = `url('./img/img4.jpg')`;  }
function backgrountUser5(){  chgBtn.style.backgroundImage = `url('./img/img5.jpg')`;  }


