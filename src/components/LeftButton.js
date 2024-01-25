import image from '../Images/angle-left.png'
import '../Styles/_rightButton.scss';
const LeftButton = () => {
  return (
    <img src={image} className='leftButton' alt='blank' onClick={()=>{document.dispatchEvent(new KeyboardEvent('keydown',{keyCode:'37'}))}}/>
  )
}

export default LeftButton
