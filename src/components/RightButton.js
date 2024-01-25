import image from '../Images/angle-left.png'
import '../Styles/_rightButton.scss';
const RightButton = () => {

  return (
    <img src={image} alt='blank' className='rightButton' onClick={()=>{document.dispatchEvent(new KeyboardEvent('keydown',{keyCode:'39'}))}}/>
  )
}

export default RightButton
