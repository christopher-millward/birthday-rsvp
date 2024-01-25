// import { useState } from 'react';
import '../Styles/_rsvp.scss';
import Blocker from './Blocker';

const RSVP = ({setRsvpShowing, setThankyouShowing, setRsvpStatus}) => {
  const url=process.env.REACT_APP_URL;

  const onSubmitNo= (e)=>{
    e.preventDefault();
    //package data
    const data={
      fname:document.getElementById('fname').value,
      lname:document.getElementById('lname').value,
      attending:false
    }

    //quick validation
    if(data.fname===''||data.lname===''){ //if any fields are empty
      alert('Bruh - enter your first and last name')

    }else{ //if all fields good

      //package data so DB (GoogleSheets) can accept as a form submission (what it's expecting)
      var newData= new FormData()
      newData.append('fname', data.fname)
      newData.append('lname', data.lname)
      newData.append('attending', data.attending)

      // show thank you msg (this will automatically fade after 4 seconds)
      setThankyouShowing({showing:true,status:false});
      setRsvpShowing(false) //close the RSVP box for cleaner UI
      
      //post data to API
      fetch (url, {method:"POST", body:newData})//didn't await anything here because it's a simple app and I'm not worried about debugging/ handling errors. Very small consequence if anything goes wrong here.

      //after 4 seconds, stop showing the RSVP and the Thank you
      setTimeout(()=>{
        setThankyouShowing({showing:false,status:null})
      },4000)
    }
  }


  const onSubmitYes= (e)=>{
    e.preventDefault();

    //package data
    const data={
      fname:document.getElementById('fname').value,
      lname:document.getElementById('lname').value,
      attending:true
    }

    //quick validation
    if(data.fname===''||data.lname===''){ //if any fields are empty
      alert('Bruh - enter your first and last name')

    }else{ //if all fields good
      //package data so DB (GoogleSheets) can accept as a form submission (what it's expecting)
      var newData= new FormData()
      newData.append('fname', data.fname)
      newData.append('lname', data.lname)
      newData.append('attending', data.attending)

      // show thank you msg (this will automatically fade after 4 seconds)
      setThankyouShowing({showing:true,status:false});
      setRsvpShowing(false) //close the RSVP box for cleaner UI
      
      //post data to API
      fetch (url, {method:"POST", body:newData}) //didn't await anything here because it's a simple app and I'm not worried about debugging/ handling errors. Very small consequence if anything goes wrong here.

      //after 4 seconds, stop showing the RSVP and the Thank you
      setTimeout(()=>{
        setThankyouShowing({showing:false,status:null})
      },4000)
    }
  }

  const onExit=()=>{
    setRsvpShowing(false)
  }

  return (
    <>
        <Blocker id='regularBlocker'/>
        <div id='RSVPContainer'>
          <button id='exit' onClick={onExit}>X</button>
          <p className='pageTitle' id='RSVPtitle'>RSVP</p>
          <form id='RSVPForm'>

            <div className='nameContainer'>
              <div className='formInputContainer'>
                <input placeholder='First Name' id='fname' name='fname' className='nameInput' type='text' autoComplete='off'></input>
              </div>
              
              <div className='formInputContainer'>
                <input placeholder='Last Name' id='lname' className='nameInput' name='lname' type='text' autoComplete='off'></input>
              </div>
            </div>

            <div className='formButtons'>
              <button className='formSubmit' type='submit' id='rsvpYES' onClick={onSubmitYes}>RSVP YES</button>
              <button className='formSubmit' type='submit' id='rsvpNO' onClick={onSubmitNo}>RSVP NO</button>
            </div>
          </form>

        </div>
    </>
  )
}

export default RSVP
