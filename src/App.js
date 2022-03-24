
import './App.css';
import { useState } from 'react';
import List from './components/List';
import Cal from './components/Cal';
import cloud from './components/shine-white-cloud-svgrepo-com.svg'
let days=7*(new Date().getDate()/7)
let presentDay=new Date().getDate()
let month=new Date().toLocaleDateString('default',{month:'long'})
let weekday=new Date().toLocaleDateString('default',{weekday:'long'})

let presWeek=[];
for(let i=0;i<7;i++){
    presWeek[i]=days+i;
    console.log("this"+presWeek[i])
}

function App() {


  const [Input, setInput] = useState("")
  const [list, setlist] = useState([]);
  const [value, setvalue] = useState()
  const[option,setOptions]=useState("All")





  const handleInpChange=(e)=>{
    console.log(e.target.name)
   setInput([e.target.name]=e.target.value)
}

const submitHandler=(e)=>{
  console.log(e);
  e.preventDefault();
  if(Input==""){
    alert("Please type something...");
    return;
}
  
  setlist([...list,{id:list.length,text:Input,completed:false}]);
  setInput("")
}

const changeHandler=(e)=>{
  
  setOptions([e.target.name]=e.target.value)
}
const noOfDays=()=>{
  console.log("this,",new Date().getDate())
  var noOfDays=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
  console.log( noOfDays)
}
noOfDays()

  return (
    <div className="App">
      <div className='cont-l'>
      <div className="header">
      <div className='col1'>
      <h1 style={{color:"white",fontFamily:'sans-serif',fontSize:"70px"}}>{new Date().getHours() +":"+((new Date().getMinutes().length==1)?"0"+new Date().getMinutes():new Date().getMinutes())}</h1>
    <h3>{weekday}</h3>
  
    <div className='cal-wrap'>
    <div className='cal'>
   {
     presWeek.map(ele=>{
       console.log(weekday)
       return <Cal weekday={weekday} presentDay={presentDay} ele={ele} month={month}/>
     })
   }
  
    </div>
  
    </div>
      </div>
 
     <img class="cloud1" src={cloud}></img>
     <img class="cloud2" src={cloud}></img>
    
    </div>
    <div className='main-todo'>
    <form className='src-wrap' method='post'>
        <input className="src" placeholder='name' name="Input" type="text" onChange={handleInpChange} value={Input}></input>
        <input className='sub-btn' type="submit" name="sub-btn" class="sub-btn" onClick={submitHandler}></input>
      </form>
      <select  value={value} onChange={changeHandler} >
      <option  > all</option>
      <option  >completed</option>
      <option >uncompleted</option>
   
      </select>
      <List filter={option} state={list}  setlist={setlist}/>
      </div>
      </div>
      <div className='cont-r'>

      </div>
    </div>
  );
}

export default App;
