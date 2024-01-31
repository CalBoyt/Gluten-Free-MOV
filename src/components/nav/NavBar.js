import { Link, useNavigate } from "react-router-dom"
import GFMOV from './images/GFMOV.png'
import './Nav.css';

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" >
            <img src={GFMOV} className="image is-1by1" />
          </a>
      
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item active ">
                <Link className="navbar_link " to="/restaurants">Restaurants</Link>
            </a>
      
            <a className="navbar-item active">
                <Link className="navbar__link" to="/requests">Request a Restaurant Review</Link>
            </a>

            <a className="navbar-item active">
                <Link className="navbar__link" to="/messages">Message Board</Link>
            </a>

            {
                localStorage.getItem("active_user")
                    ? <li className="navbar-item active navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("active_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
          </div>
      
          
        </div>
      </nav>

        
    )
}
