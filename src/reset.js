import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Resetpassword, Sentmail } from "./api";



export default function Reset()
{   
   let[pass,upass] = useState("");
   let[cpass,ucpass] = useState("");
   let[mes,umes] = useState("");
   let {id} = useParams();
    return <div class="container-fluid">
         <div class="row">
          <div class="offset-4 col-4">   
          <form class="regcenter" onSubmit={
             async (e)=>{
               e.preventDefault();
               if(pass===cpass)
               {
                   let o = {password:pass}
                   let res = await Resetpassword(id,o);
                   umes(res.data.message);
                   upass("");
                   ucpass("");
               }
               else
               {
                   umes("Password must be identical")
               }
              
             }
         }>
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Enter the New password</label>
         <input type="text" class="form-control" id="exampleFormControlInput1"  required value={pass} onChange={
            (e)=>{
                upass(e.target.value);
                
            }
          
        } minLength="8" required/>
         <label for="exampleFormControlInput1" class="form-label">Re-enter the New password</label>
         <input type="text" class="form-control" id="exampleFormControlInput1"  required value={cpass} onChange={
            (e)=>{
                ucpass(e.target.value);   
            }
        } minLength="8" required/>
         <div>{mes}<br/></div>
         <button class="btn btn-primary" type="submit">Submit</button> <Link to="/"><a class="lef">Home</a></Link> 
         
        </div>
        
        
        
        
        
        
        </form></div></div></div>
}