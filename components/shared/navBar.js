import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" id="homeButton" href="#">
                All Cards <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="addCard">Add a Card</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter Cards
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <div class="dropdown-item" href="#" id="alphabetize" onmouseover="this.style.cursor='pointer'">Alphabetically</div>
              <div class="dropdown-item" href="#" id="langauge" onmouseover="this.style.cursor='pointer'">By Language</div>
              <div class="dropdown-item" href="#" id="dateSubmitted" onmouseover="this.style.cursor='pointer'">Date Submitted</div>
            </div>
          </li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Cards"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
