import React, { Component ,useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shopping from './component/Shopping';
import Naav from './component/Naav';
import Shopcard from './component/Shopcard';
import c1 from "./Photos/shopC1.jpg";
import c2 from "./Photos/shopC2.jpg";
import c3 from "./Photos/shopC3.jpg";
import c4 from "./Photos/shopC4.jpg";
import c5 from "./Photos/shopC5.jpg";
import c6 from "./Photos/shopC6.jpg";
import c7 from "./Photos/shopC7.jpg";
import c8 from "./Photos/shopC8.jpg";
import { Found } from './component/Found';

 const App =(props)=> {

  const[Proudect,setProudect] =useState( [
    { id: 0, name: "Hood", price: 120, img: c1,count:1 },
    { id: 1, name: "Shirt", price: 100, img: c2,count:1 },
    { id: 2, name: "Shirt", price: 200, img: c3,count:1 },
    { id: 3, name: "Shirt", price: 320, img: c4,count:1 },
    { id: 4, name: "Shirt", price: 210, img: c5,count:1 },
    { id: 5, name: "Shirt", price: 110, img: c6,count:1 },
    { id: 6, name: "Jeans", price: 150, img: c7,count:1 },
    { id: 7, name: "Jeans", price: 180, img: c8,count:1 },
  ]) 
const [dataCard,setdataCard]=useState([])
let add=(obj)=>{
 let data=dataCard
 let newData=data.map((e)=> {
  if(e.id!==obj.id){
   return  e
  } else{
    return e.count ++
  } 
 }).filter(e=> isNaN(e))
 setdataCard( [...newData,obj])
}
console.log(dataCard);
let remove=(obj)=>{
let data=[...dataCard]
let newdata=data.map((e)=>{
if(e.id==obj.id){
e.count =1
}
return e
}).filter(e=>e!==obj)
 
setdataCard(newdata)
}

let increment=(obj)=>{
let data=dataCard
let newdata=data.map((e)=>{
if(e.id==obj.id){
  e.count ++
}  
return e
})
setdataCard([...newdata])
}

let decrement=(obj)=>{
let data=dataCard
let newData=data.map((e)=>{
  if(e.id==obj.id)
  if(e.count>1){
    e.count --
  }
 return e
})
setdataCard([...newData])
}


  return(
    <div> 

     <Naav data={dataCard}/>
     
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<Found />}/>

      <Route path='/Shopping' element={<Shopping fan={add} data={Proudect}/>}/>
      <Route path='/Shopcard' element={<Shopcard data={dataCard}  remove={remove} increment={increment} decrement={decrement} />}/>
    </Routes>
    </div>
   

  );
}

export default App;
