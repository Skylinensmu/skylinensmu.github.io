import profilepic from "./assets/image/Profilepic.png"
import contactcard from "./assets/image/contactcard.png"
import messagebox from "./assets/image/messagebox.png"
import message from "./assets/image/message.png"
import profilename from "./assets/image/profilename.png"
import phone from "./assets/image/phone.png"

function Aboutdetail (){

    return(
        <div className="body-outer-container">
            <div className="left-container">
                   <div className="about-container">
                        <p className="aboutme-text">Hi everyone! I’m Kriangkai Sukdi, but you can call me Sky.</p>
                        <p className="aboutme-text">I hold a Bachelor of Nursing Science from Mahidol University, where I graduated with First Class Honors and a GPA of 3.87.</p>
                        <p className="aboutme-text">I am an experienced healthcare professional transitioning into technology roles. With six years of nursing experience in both outpatient (OPD) and inpatient (IPD) settings, I have developed a deep understanding of hospital business and workflow. Additionally, I have over a year of experience in application support for the Arcus Air hospital information system, which has enhanced my technical problem-solving skills. </p>
                        <p className="aboutme-text">I am proficient in HTML, CSS, JavaScript, MongoDB, MySQL, React, and Node.js, and I am excited to leverage my diverse skills in this new career path.</p>
                    </div>
            </div>
                   
            
            <div className="right-container">
                <img src={profilepic} id="profilepic"></img>
                <img src={contactcard} id="contactcard"></img>
                <img src={messagebox} id="messagebox"></img>
                <img src={message} id="message"></img>
                <img src={profilename} id="profilename"></img>
                <img src={phone} id="phone"></img>
                <h1 id="bg-text">KRIANGKAI  SUKDI</h1>
            </div>

        </div>
    )
    
    
    }
    export default Aboutdetail
