/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [size, setSize] = useState("42")
  const [img, setImg] = useState("regular")
  const [price, setPrice] = useState("1200")
  const [empty, setemptyq] = useState("1200")
 
 
useEffect(() => {
  console.log("useEffect called")
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/');
      // console.log(response.data.getNotes);
setData(response.data.getNotes)

    } catch (error) {
      console.error(error);
    }
  }
  getUser()

}, [empty])
console.log(data);



const listItems = data.map((ele,index) =>

<>
  <div className="radio"   >
  <input key={index} type="radio" id="html" name="fav_language" value={ele.name} defaultChecked  onClick={()=>setImg(ele.name)}/>
        <label htmlFor="html">{ele.name}</label>
      </div>
  </>
  
  );

  

const select=( id)=>{ 
console.log(id);
if (id=="42") {
  setPrice("1200")
  setSize("42")
}
else if(id=="43"){
  setPrice("1400")
  setSize("43")
}
else if(id=="44"){
  setPrice("1600")
  setSize("44")
}
else if(id=="45"){
  setPrice("1800")
  setSize("45")
}
}

  return (
    <>
      <div className="header">
       <div className="product">

    {(img=="regular")? <img src=" /jeans-blue.png" />: <img src=" /jeans-png.jpg" />}
        
      </div>
      <div className="addCart">
      <h3 > strechable Blue Narrow plus size jeans</h3>
        <span className="sizeSelect">size:{size}W</span>
      
       <div className="size1">
        <div  className="size" role="button" onClick={()=>select("42")}>42W</div> 
       <div className="size" role="button" onClick={()=>select("43")}  >43W</div>
        <div className="size" role="button" onClick={()=>select("44")}>44W</div>
        <div className="size" role="button" onClick={()=>select("45")}>45W</div> 
         </div>
      
     
       <div >
         <span>{listItems}</span>

      </div>

      <div className="text">
      Jeans - Buy Jeans for men, women & kids online in India at Myntra. Shop from the latest collections of jeans available in various brands,
      </div>
      <p className="card-price">
<span>&#8377;</span>{price} </p>

      <div className = "btncard">
      <button className="button-71" role="button"> Buy</button>
      <button className="button-78" role="button">AddCart</button>

      </div>




      </div>
      </div>
    </>
  )
}

export default App
