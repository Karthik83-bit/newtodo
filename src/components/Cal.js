import React from 'react'

export default function Cal({ele,month,presentDay,weekDay}) {
  return (
      <div className='cal-box' style={presentDay===ele?{backgroundColor:"rgb(247, 95, 95)",color:"white"}:{backgroundColor:"white"}}>
            <h4>{ele}</h4>
          
            <h6>{month}</h6>
            <div style={presentDay===ele?{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:"white"}:{display:"none"}}></div>
            
      </div>
   

       


    
  )
}
