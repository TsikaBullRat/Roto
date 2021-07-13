import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink exact to="/" className="navbar-brand">ROTO</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end
            " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                    <NavLink exact to="/about" className="nav-link">About Us</NavLink>
                    <NavLink exact to="/programs" className="nav-link">Programs</NavLink>
                    <NavLink exact to="/teams" className="nav-link">Teams</NavLink>
                    <NavLink exact to="/contacts" className="nav-link">Contacts</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header