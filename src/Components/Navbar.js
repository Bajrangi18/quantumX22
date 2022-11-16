import './Navbar.css';
const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid" id="NavBar"><center>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-4">
                        <button type="button" className="btn btn-link text-decoration-none text-light fs-4" id="HomeButton">HOME</button>
                        </li>
                        <li className="nav-item px-4">
                        <button type="button" className="btn btn-link text-decoration-none text-light fs-4" id="EventsButton">EVENTS</button>
                        </li>
                        <li className="nav-item px-4">
                        <button type="button" className="btn btn-link text-decoration-none text-light fs-4" id="GalleryButton">GALLERY</button>
                        </li>
                        <li className="nav-item px-4">
                        <button type="button" className="btn btn-link text-decoration-none text-light fs-4" id="ContactButton">CONTACT</button>
                        </li>
                    </ul>
                    </div>
                    </center>
                </div>
                </nav>
        </div>
    );
}


export default Navbar