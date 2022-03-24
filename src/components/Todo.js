import React from 'react'

export default function Todo(props) {
    const completeHandler=(e)=>{
        e.preventDefault();
        props.setList( props.state.map(ele=>{
            console.log(props.id)
            if(ele.id==props.id){
                return {...ele,completed:!ele.completed}
            }
            else{
                return ele;
            }
        }))

       


    }
    const deleteHandler=(e)=>{
        e.preventDefault();
        props.setList(props.state.filter(ele=>ele.id!==props.id))


    }
  return (
    <div className='Todo'>
    <h2 style={props.completed?{textDecoration:"line-through"}:{textDecoration:""}}>{props.txt}</h2>
   <div className='btn-wrap' style={{width:"30%",height:"100%",display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
   <input type="checkbox" style={{height:"25px",width:"30%"}} checked={props.completed} onClick={completeHandler}></input>
   {/* <button onClick={completeHandler}>Complete</button>*/}
    <button style={{height:"30px",width:"30px",fontSize:"large",fontWeight:"bolder",}}onClick={deleteHandler}>X</button> 
    
   </div>
   </div>
  )
}
