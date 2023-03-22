import logo from "../../assets/df.png";
import "./greeting.css";
const NavbarComp = () => {
  return (
    <>
      <nav class="navbar flex-column navbar-expand-lg navbar-dark custom-bg">
        <img src={logo} width="30" height="30" alt="" />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-column justify-content-start"
          id="navbarNav"
        >
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <a class="nav-link " href="#">
                <i class="fas fa-home"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-cog"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-align-justify"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
