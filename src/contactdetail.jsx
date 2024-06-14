import profilepic from "./assets/image/Profilepic.png"
import contactcard from "./assets/image/contactcard.png"
import messagebox from "./assets/image/messagebox.png"
import message from "./assets/image/message.png"
import profilename from "./assets/image/profilename.png"
import phone from "./assets/image/phone.png"
import mobile from "./assets/image/mobile.png"
import email from "./assets/image/email.png"
import linkedin from "./assets/image/linkedin.png"


function Experiencedetail (){

    return(
        <div className="body-outer-container">
            <div className="left-container">
                   <div className="contact-container">
                        <div className="inner-contact-container">
                            <img src={email} className="contact-icon"></img>
                            <p className="contact-text">Kriangkai.suk@hotmail.com</p>   
                        </div>
                        <div className="inner-contact-container">
                            <img src={linkedin} className="contact-icon"></img>
                            <p className="contact-text"><a href="http://www.linkedin.com/in/kriangkai-sukdi-b46463208" target="_blank">www.linkedin.com/in/kriangkai-sukdi-b46463208</a></p> 
                        </div>
                        <div className="inner-contact-container">
                            <img src={mobile} className="contact-icon"></img>
                            <p className="contact-text">062-0568683</p> 
                        </div>
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
    export default Experiencedetail
