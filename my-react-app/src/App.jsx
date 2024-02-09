import { useState } from 'react'
import './App.css'
import DataDisplay from './component/DataDisplay'

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)

function handleFetchReq(){
  fetchData();
}

 
  async function fetchData(){
    setLoading(true)
try {
  let res=await fetch('https://jsonplaceholder.typicode.com/posts')
  let ResData=await res.json()
  
  setData(ResData)
  setLoading(false)
} catch (error) {
  console.log(error);
}
  }
  return (
    <>
    <button onClick={handleFetchReq}>Request</button>
   
 
   <DataDisplay data={data}/>
  
   
    
    </>
  )
}

export default App