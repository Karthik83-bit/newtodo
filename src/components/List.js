import React from 'react'
import Todo from './Todo'

function List(props) {
    console.log("from list",props)
    if(props.filter==="completed"){
     
   {  return (
    
     
    <div className="List-wrap">
      {
       props.state.map(ele=>{
         if(ele.completed){
        return <Todo completed={ele.completed}  id={ele.id} txt={ele.text} state={props.state} setList={props.setlist} />
         }
         }
       )
     }

     </div>
   
 
)
   }
 
      
    }
    if(props.filter==="uncompleted"){
     
      {  return (
       
        
       <div className="List-wrap">
         {
          props.state.map(ele=>{
            if(!ele.completed){
           return <Todo completed={ele.completed}  id={ele.id} txt={ele.text} state={props.state} setList={props.setlist} />
            }
            }
          )
        }
   
        </div>
      
    
   )
      }
    
         
       }
    else{
  return (
    

     
      <div className="List-wrap">
        {
         props.state.map(ele=><Todo completed={ele.completed}  id={ele.id} txt={ele.text} state={props.state} setList={props.setlist} />)
       }
 
       </div>
     
   
  )}
}

export default List