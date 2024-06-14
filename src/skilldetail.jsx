import profilepic from "./assets/image/Profilepic.png"
import contactcard from "./assets/image/contactcard.png"
import messagebox from "./assets/image/messagebox.png"
import message from "./assets/image/message.png"
import profilename from "./assets/image/profilename.png"
import phone from "./assets/image/phone.png"
import html5 from './assets/image/html5.png'
import css3 from './assets/image/css3.png'
import js from './assets/image/js.png'
import react from './assets/image/react.png'
import mongodb from './assets/image/mongo.png'
import sql from './assets/image/sql.png'
import nodejs from './assets/image/nodejs.png'



function Skilldetail (){

    return(
        <div className="body-outer-container">
            <div className="left-container">
                <div className="skill-container">
                   <div className="Upper-container">
                        <p className="topic-skill">Application Support:</p>
                        <p className="desc-skill">Arcus Air hospital information system, troubleshooting, technical support</p>
                        <p className="topic-skill">Healthcare Knowledge: </p>
                        <p className="desc-skill">In-depth understanding of hospital workflows, outpatient (OPD) and inpatient (IPD) operations</p>
                        <p className="topic-skill">Business Analysis:</p>
                        <p className="desc-skill"> Requirement gathering, process improvement, data analysis</p>
                        <p className="topic-skill">Communication & Collaboration:</p>
                        <p className="desc-skill"> Effective communication with healthcare professionals and IT teams, user training and support</p>
                        <p className="topic-skill">Problem-Solving:</p>
                        <p className="desc-skill"> Strong analytical skills, ability to identify and resolve technical issues efficiently</p>
                    </div>
                    <div className="Lower-container">
                        <p className="topic-skill">Technical Skill/Tools</p>
                        <div className="skill-icon-container">
                            <img src={html5} className="skill-icon"></img>
                            <img src={css3} className="skill-icon"></img>
                            <img src={js} className="skill-icon"></img>
                            <img src={react} className="skill-icon"></img>
                            <img src={mongodb} className="skill-icon"></img>
                            <img src={sql} className="skill-icon"></img>
                            <img src={nodejs} className="skill-icon"></img>
                        </div>
                        
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
    export default Skilldetail
