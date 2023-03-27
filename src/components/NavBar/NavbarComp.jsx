import logo from "../../assets/df.png";
import "./greeting.css";
const NavbarComp = () => {

  const handleLogout = () => {
    localStorage.removeItem(`user`);
  }


  return (
    <>
      <nav className="navbar flex-column navbar-expand-lg navbar-dark custom-bg">
        <img src={logo} width="30" height="30" alt="" />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-column justify-content-start"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-column ">
            <li className="nav-item">
              <a className="nav-link " href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-cog"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-align-justify"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={handleLogout}>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
