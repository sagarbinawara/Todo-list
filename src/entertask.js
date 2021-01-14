
import './entertask.css'

const Entertask =(props)=>{

    return(
        <div className="submittaskdiv">
           <input type="text" placeholder="Enter task" onChange={props.getinputtext} value={props.newvalue}/>
           <button onClick={props.displayinput} className="entertaskbutton">Enter Task</button>
        </div>
    )
}

export default Entertask