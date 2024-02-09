import { useEffect, useState } from 'react'
function DataDisplay({data}){

return(
    <>
  {data ? 
        data.map((Post)=>{
            return <div key={Post.id} style={{border:"1px solid black" , display:"flex" ,padding:"22px" , margin:"22px"}}>
                <p style={{padding:"12px",margin:"12px"}}>{Post.id}</p>
                <h5 style={{padding:"12px",margin:"12px"}}>{Post.title}</h5>
                <h3 style={{padding:"12px",margin:"12px"}}>{Post.body}</h3>
            </div>
        })
     : <p>Wait.. data loading</p>}
    
    </>
)    
}

export default DataDisplay