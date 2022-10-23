// background change
let userBackGrButton = document.getElementById('backGrSelect');

// fetch user data 
fetch('http://localhost:3000/backgroundImage')
.then((response) => response.json())
.then(json => {
    json.map(data =>{
        userBackGrButton.append(backGrBtn(data.image1,data.image2,data.image3,data.image4,data.image5));
    });
});
// background button 
function backGrBtn(image1,image2,image3,image4,image5){
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        select background image
      </button>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
        <li class="d-inline">
          <img src="${image1}" class="img-fluid img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="${image2}" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="${image3}" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="${image4}" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="${image5}" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
      </ul>
    </div>
    `;
    return div;
}



