import { useState } from 'react';
import './Modal.css'
import './Myform.css';
import Modal from './Modal';

export default function Mylist() {
 const [showmodal,setshowmodal] =useState(false);
const [forminput,setforminput]=useState({
    name:"",
    phone:"",
    age:30,
    angestelt:false,
    salary:"500$"
});
 const active=(forminput.name==""||forminput.phone==""||forminput.age=="");
 //const condition=(forminput.name.length<3&&forminput.phone.length>8&&forminput.phone.length<13);
 const condition=(forminput.name.length>3 && forminput.phone.length>8 && forminput.phone.length<13 &&forminput.age>17 &&forminput.age<90);
 console.log("condition :"+condition);
  return (
<div>
    <div  className='center' >

  
      <form 
      onSubmit={
        
        (e)=>{
        
            e.preventDefault();
       
            setshowmodal(!active);
           

        
        }}
      
      style={{ marginTop: '205px', width: '50vw', flexDirection: 'column', backgroundColor: 'blue', }} className="center form">
        <h1>Requesting a Loan</h1>
        <hr style={{color:'white'}} />
        <label>Name :</label>
        <input onChange={(e)=>{ setforminput({...forminput,name:e.target.value})}}  value={forminput.name} />
        <label>Phone:</label>
        <input onChange={(e)=>{ setforminput({...forminput,phone:e.target.value})}}  value={forminput.phone} />
        <label>Age :</label>
        <input onChange={(e)=>{ setforminput({...forminput,age:e.target.value})}}  value={forminput.age} />
      
        <label>
        Sind Sie Angestllt <br />
        </label>  
        <input  onClick={(e)=>{ setforminput({...forminput,angestelt:e.target.checked}) }}   checked={forminput.angestelt} type="checkbox" />
    
        <label>Salary</label>  
        <select onChange={(e)=>{ setforminput({...forminput,salary:e.target.value})}}  value={forminput.salary}>
          <option>500$</option>
          <option>200$</option>
          <option>350$</option>
        </select>
        <div className="center">
          <button   disabled={active}   className={active?"btn-disactive":"btn-active"} onClick={()=>{ }}>
               Submit</button>
        </div>
   
      </form>
      <Modal className='error' error={!condition} isdone={showmodal} />
    </div>
    </div>
  );
}