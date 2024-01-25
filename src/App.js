import { useState } from "react";
import {register} from 'swiper/element/bundle';
import Details from "./components/Details";
import Overview from "./components/Overview";
import LeftButton from "./components/LeftButton";
import RightButton from "./components/RightButton";
import RSVP from "./components/RSVP";
import './Styles/app.scss';
import ThankYou from "./components/ThankYou";

function App() {
//register swiper
register();
console.log(process.env.REACT_APP_URL)

const [rsvpShowing, setRsvpShowing]= useState(false)
const [thankyouShowing, setThankyouShowing]=useState({showing:false, status:null})

  return (
    <div className="App">
      <swiper-container loop='false' speed='200' navigation='false' pagination='true' keyboard='true'>
        <swiper-slide>
          <Overview setRsvpShowing={setRsvpShowing}/>
        </swiper-slide>
        <swiper-slide>
          <Details/>
        </swiper-slide>
      </swiper-container>

      <RightButton/>
      <LeftButton/>

      {rsvpShowing===true?<RSVP setRsvpShowing={setRsvpShowing} setThankyouShowing={setThankyouShowing}/>:null};

      {thankyouShowing.showing===true?<ThankYou status={thankyouShowing.status}/>:null}

    </div>
  );
}

export default App;
