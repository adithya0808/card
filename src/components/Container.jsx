import "../assets/css/Container.css"
import trc from "../assets/images/trash.png"
import Button from "./Button"
const Container = () => {
  return (
    <div className="container" id="container">
        <div className="cardx" id="cards">
            <div className="del-img" id="del-img">
                  <img src={trc} alt="trash can" className="trc"/>
            </div>
            <h1 className="del-text">Do you want to delete?</h1>
            <div className="but-space">
              <Button />
            </div>
        </div>
    </div>
  )
}

export default Container