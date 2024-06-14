import profilepic from "./assets/image/Profilepic.png"
import contactcard from "./assets/image/contactcard.png"
import messagebox from "./assets/image/messagebox.png"
import message from "./assets/image/message.png"
import profilename from "./assets/image/profilename.png"
import phone from "./assets/image/phone.png"

function Landingpage (){

    return(
        <div className="body-outer-container">
            <div className="left-container">
                   <div className="welcome-container">
                        <p id="firstline-text">Welcome to Profile of</p>
                        <p id="secondline-text">Kriangkai</p>
                        <p id="thirdline-text">Sukdi</p>
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
    export default Landingpage

  

