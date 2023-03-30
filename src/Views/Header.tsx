import "../App.css";
//import { faBell } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function onClickHandler(){
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
    });
}

function Header() {
    return (
        <nav className="navbar has-background-dark test-app-header" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                <img
                    src={require("../anime.png")}
                    alt="Logo"
                    width="auto"
                    height="auto"
                />
                </a>
                <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={onClickHandler}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">Home</a>
                    <a className="navbar-item" href="/about">Inventory List</a>
                    <a className="navbar-item" href="/about">Resources List</a>
                    <a className="navbar-item" href="/about">Profile</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;