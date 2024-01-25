import '../Styles/_overview.scss';
import skii from '../Images/skii-3.png';

const Overview = ({setRsvpShowing}) => {

  return (
    <div id='overviewContainer'>
      
      <div className='overviewText'>
        <p id='OVtitle1'>SNOWPANTS</p>
        <p id='OVtitle2'>OR</p>
        <p id='OVtitle3'>NO PANTS</p>
        <span id='OVhorBar'/>
        <p id='OVdate'>February 8th, 2023</p>
      </div>
      
      <button className='overviewButton' id='detailsButton' onClick={()=>{document.dispatchEvent(new KeyboardEvent('keydown',{keyCode:'39'}))}}>
      DETAILS
      </button>

      <button className='overviewButton' id='RSVPButton' onClick={()=>{setRsvpShowing(true);console.log('clicked')}}>
      RSVP
      </button>
    
      <img src={skii} className="skiiImage" alt='blank'/>
    </div>
  )
}

export default Overview
