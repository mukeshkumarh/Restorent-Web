import React, { useState } from "react";
import "./Restorent.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
export default function Restorent() {
  const[Data,setData]=useState(Menu);
  const Filteritem =(category)=>{
const updatedata =Menu.filter((currentItem)=>{
  
  return currentItem.category === category;
  
});
setData(updatedata) 
  }

  return (
    <>
    <nav className="Nav-Contanar">
    <div className="btn-group">
    <button className="breakfast" onClick={()=>Filteritem('breakfast')}>Breakfast</button>
<button className="lunch" onClick={()=>Filteritem('lunch')}>Lunch</button>
<button className="dinner" onClick={()=>Filteritem('dinner')}>Dinner</button>
<button className="All" onClick={()=>setData(Menu)}>All</button>
    </div>
      
     </nav>
     <MenuCard Data={Data}/> 
           
    </>
  );
}
