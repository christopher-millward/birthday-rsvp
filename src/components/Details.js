import '../Styles/_details.scss'
import img from '../Images/skii-hill-2.jpg'

const Details = () => {

  return (
    <div id='detailsContainer'>
      <p className='pageTitle' id='detailsTitle'>DETAILS</p>
     
      <div id='detailsInfo'>
        <div id='themeInfo' className='detailsInfoSection'>
          <p className='sectionTitle'>Theme</p>
          <div className='sectionBody'>
            <p><b>Snowpants or no pants! </b>
            <br/>
            Either wear snow pants or no pants at all. Any form of underwear is accepted in lieu of pants (boxers, thong, longjohns, jockstrap, etc.). The general rule is: if you could wear it into a restaurant, you shouldn't be wearing it to this party. </p>
            <br/>
            <p><b>Note:</b> You will be asked to leave if you do not show up in theme.</p>
            <br/>
            <p className='sectionTitle'>The <i>W</i>s</p>
            <table>
              <tr>
                <td><b>Where: </b></td>
                <td>157 Mill St.</td>
              </tr>
              <tr>
                <td><b>When: </b></td>
                <td>Feb 8th, 9 pm</td>
              </tr>
              <tr>
                <td><b>Why: </b></td>
                <td>Christopher turns 28</td>
              </tr>
            </table>
          </div>

  
          
        </div>

      </div>
    <img src={img} alt='blank' id='detailsImg'/>
    </div>
  )
}

export default Details
