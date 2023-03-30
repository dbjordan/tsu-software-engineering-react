import "../App.css";

function Footer() {
    return (
        <footer className="footer mt-auto has-background-dark pb-4 pt-4">
            <div className="content">
                <ul>
                    <li><a className="navbar-item" href="/">Home</a></li>
                    <li><a className="navbar-item" href="/about">About</a></li>
                    <li><a className="navbar-item" href="/about">Blogs</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;