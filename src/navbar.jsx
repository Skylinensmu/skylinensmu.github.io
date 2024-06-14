import { Link } from "react-router-dom"
function Navbar(){

return(
    <div className="nav-outer-container">
        <div className="nav-inner-container">
            <ul>
                <Link to="/" className="nav-link"><li>Home</li></Link>
                <Link to="/aboutme" className="nav-link"><li>About Me</li></Link>
                <Link to="/experience" className="nav-link"><li>Experience</li></Link>
                <Link to="/skills" className="nav-link"><li>Skills</li></Link>
                <Link to="/contact" className="nav-link"><li>Contact Me</li></Link>
                <a href="./assets/document/Kriangkai_CV_Update05_24.pdf" className="nav-link" download="Kriangkai_CV_Update05_24.pdf">
                <li>Resume</li></a>
            </ul>
        </div>
    </div>
)


}
export default Navbar