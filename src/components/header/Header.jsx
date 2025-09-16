
import "../header/header.css"
import { logo, logo2, crisp, leap, maker } from "../../Images/CommonImage"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="practiceLogo">
                        <Link to="/"><img src={logo} className="practice" alt="Logo2" /></Link>
                        <Link to="https://www.education.gov.in" target="_blank"><img
                            src="https://anuvadini.aicte-india.org/static/media/logo_ministry.11253fa811fc588a94e7.png"
                            className="Logo2" alt="Logo2" /></Link>
                        <Link to="https://www.aicte.gov.in/" target="_blank"><img className="aicteLogo"
                            src={logo2} alt="Logo 1" /></Link>
                        <Link to="https://crispindia.net/" target="_blank"><img className="crisp"
                            src={crisp} alt="Logo 3" /></Link>
                        <Link to="https://makerbhavanfoundation.org/" target="_blank"><img className="maker"
                            src={maker} alt="Logo 4" /></Link>
                        <Link to="https://www.leap.respark.iitm.ac.in" target="_blank"><img className="leap"
                            src={leap} alt="Logo 5" /></Link>
                    </div>
                    <div className="authActions d-flex align-items-center">
                        <Link to="/login" className="btn-login">Login</Link>
                        <div className="dropdown">
                            <Link to="#" className="btn-register">Register</Link>
                            <ul className="dropdownMenu">
                                <li><Link to="/register/student">Student</Link></li>
                                <li><Link to="/register/faculty">Faculty</Link></li>
                                <li><Link to="/register/institute">Institute</Link></li>
                                <li><Link to="/register/industry">Industry</Link></li>
                                <li><Link to="/register/other">Other</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- <ul className="d-flex justify-content-end align-items-center menubars">
                        <li><Link to="javascript:void(0)">Home</Link></li>
                        <li><Link to="javascript:void(0)">About Us</Link></li>
                        <li><Link to="javascript:void(0)">Contact Us</Link></li>
                    </ul> --> */}
                </div>
            </div>
        </header>
    )
}

export default Header