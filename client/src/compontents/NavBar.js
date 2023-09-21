import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = () => { 
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><img src={require("../photos and icons/icons/Text techies.png")} alt="..." style={{height: "30px"}}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/text simplification and summarization">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Template library">Template library</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Clause library">Clause library</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 More
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#"></Link></li>
                  <li><Link className="dropdown-item" to="#">Expert Assist</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="#">Prediction</Link></li>
                </ul>
              </li>
            </ul>
         </div>
         <Link to="/Profile" >
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
         </Link>
        </div>
      </nav>
    );
}

export default NavBar;