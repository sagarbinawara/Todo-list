import './list.css';

 const List = (prop) =>{

    const rightToggleStyle = {
        backgroundColor: prop.passob.completedtime ? '#9ecbfc' : ' #007BFF',
        cursor: prop.passob.completedtime ? '' : 'pointer'
     };


    return(
        <div className="linestyle">
        {
            prop.passob.completed?( <li><del>{prop.passob.value}</del>  {prop.passob.completedtime} </li>):(<li> {prop.passob.value}  </li>)
        }
        <button  disabled={prop.passob.completedtime} onClick={()=> prop.onselect(prop.passob.id)} className="complatetaskbutton" style={rightToggleStyle} >Complete</button>
       </div>
    )
}

export default List