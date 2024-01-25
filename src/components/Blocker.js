import ReactDOM from "react-dom";
import '../Styles/_blocker.scss';

const Blocker = ({id}) => {
  return ReactDOM.createPortal(
    <div className="blocker" id={id}>
      
    </div>,
  document.getElementById('portal')
  )
}

export default Blocker
