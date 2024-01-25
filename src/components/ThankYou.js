import ReactDOM from "react-dom";
import '../Styles/_thankYou.scss';
import Blocker from "./Blocker";


const ThankYou = ({status}) => {

    return ReactDOM.createPortal(
        <>
            <div className="thankYouContainer">
                <div id='tyCont1'>
                    <p className="pageTitle">Thanks for the RSVP!</p>
                    {status===true?<p id='thankyouBody'>See you Feb 8th!</p>:<p>Hopefully see you soon!</p>}
                </div>
                
                <br></br>
                <p id='goodbye'>This box will close automatically. If you'd like to RSVP for somebody else, just fill out the form again :)</p>
            </div>
            <Blocker id='ThankyouBlocker'/>
        </>,
    document.getElementById('portal')
    )
  }

export default ThankYou
