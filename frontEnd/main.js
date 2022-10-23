let userBackGrButton = document.getElementById('backGrSelect');
userBackGrButton.append(backGrBtn());


// background button 
function backGrBtn(){
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        select background image
      </button>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
        <li class="d-inline">
          <img src="img/img1.webp" class="img-fluid img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="img/img2.jpg" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="img/img3.jpg" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="img/img4.jpg" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
        <li class="d-inline">
          <img src="img/img5.jpg" class="img-thumbnail" alt="..." width="20%" height="auto">
        </li>
      </ul>
    </div>
    `;
    return div;
}



