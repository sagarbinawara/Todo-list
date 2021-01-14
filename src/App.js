
import {
  useState
} from 'react';
import moment from 'moment';
import Entertask from './entertask.js'
import List from './list.js'
import './App.css';

function App() {


  const [ivalue, gettasklist] = useState("")
  const [showtask, updatetasklist] = useState([])


  const showinputfield = () => {
      if (ivalue !== '') {
          updatetasklist((oldval) => {
              let uniqueid = new Date().getTime()
              let obj = {
                  id: uniqueid,
                  completed: false,
                  value: ivalue,
                  completedtime: ''
              }
              return [...oldval, obj]
          })
          gettasklist("")
      }

  }

  const collectinputtext = (e) => {
      gettasklist(e.target.value)
  }


  const deleteList = (id) => {
      updatetasklist((oldval) => {
          return oldval.map((singlelist, index) => {

              if (singlelist.id === id) {
                  const date = new Date();
                  let ctime = moment(date).format('hh:mm:ss');
                  singlelist['completed'] = true
                  singlelist['completedtime'] = ctime
                  return singlelist
              } else
                  return singlelist
          })

      })

  }
  return ( 
    <div className="App">
           <h2> Todo List</h2>
             <Entertask getinputtext={collectinputtext} displayinput={showinputfield} newvalue={ivalue}/> 
           <ul className="orderlisting">
             {showtask.map((item,index)=>{
            return <List passob={item} key={index} onselect={deleteList}/>
            })}
           </ul>
         </div>
  );
}

export default App;
