import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo / Name */}

            <Link to="/" className="navbar-logo">
                Gouthaman Asokan
            </Link>


            {/* Navigation Links */}

            <div className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/experience">
                    Experience
                </Link>

                <Link to="/projects">
                    Projects
                </Link>

                <Link to="/research">
                    Research
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

            </div>

        </nav>
    )
}

export default Navbar