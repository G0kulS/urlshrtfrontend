import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sentmail } from "./api";



export default function Fpass()
{   
    let[email,uemail] = useState("");
    let[mes,umes] = useState("");

    return <div class="container-fluid">
         <div class="row">
          <div class="offset-4 col-4">   
          <form class="regcenter" onSubmit={
             async (e)=>{
               e.preventDefault();
               let o = {email:email}
               let res = await Sentmail(o);
               console.log(res);
               umes(res.data.message);
               uemail("");
             }
         }>
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Enter your Email-ID</label>
         <input type="text" class="form-control" id="exampleFormControlInput1"  required value={email} onChange={
            (e)=>{
                uemail(e.target.value);
            }
          
        }/>
         <div>{mes}<br/></div>
         <button class="btn btn-primary" type="submit">Submit</button> <Link to="/"><a class="lef">Home</a></Link> 
         
        </div>
        
        
        
        
        
        
        </form></div></div></div>
}