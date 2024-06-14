import profilepic from "./assets/image/Profilepic.png"
import contactcard from "./assets/image/contactcard.png"
import messagebox from "./assets/image/messagebox.png"
import message from "./assets/image/message.png"
import profilename from "./assets/image/profilename.png"
import phone from "./assets/image/phone.png"
import Experience from './Experience';

function Experiencedetail (){

    return(
        <div className="body-outer-container">
            <div className="left-container">
                   <div className="experience-container">
                        <div className="inner-experience-container">
                            <p className="experience-text">Peroid: 2016-2019</p>
                            <p className="experience-text">Role: IPD Nurse</p>
                            <p className="experience-text">Company: Dental Hospital, Faculty of Dentistry, Mahidol University</p>   
                        </div>
                        <div className="inner-experience-container">
                            <p className="experience-text">Peroid: 2019-2022</p>
                            <p className="experience-text">Role: OPD Nurse</p>
                            <p className="experience-text">Company: Dental Hospital, Faculty of Dentistry, Mahidol University</p>
                        </div>
                        <div className="inner-experience-container">
                            <p className="experience-text">Peroid: October 2022 - Present</p>
                            <p className="experience-text">Role:Senior Application Support</p>
                            <p className="experience-text">Company: Greenline Synergy (BDMS Group)</p>
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
