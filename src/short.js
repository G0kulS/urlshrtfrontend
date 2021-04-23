import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Addlink, Deletelink, Fulllink } from "./api";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Short()
{   
    let sl = window.location.href.split("/");
    sl = sl[0]+"//"+sl[2]+"/i/" ;
    let [link,ulink]= useState("");
    let [slink,uslink] = useState("");
    let [fl,ufl] = useState([]);
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function generateString() {
    let result = "";
    const charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;}
    let {id} = useParams();
    useEffect(async ()=>{
        let arr = await Fulllink(id);
        //console.log(arr);
        ufl([...(arr.data)]);
    },[])

    return<form onSubmit={
         async (e)=>{
            e.preventDefault();
            let i = generateString();
            let obj = {
               "shortid":i,
               "link":link
            }
            await Addlink(id,obj);
            let arr = await Fulllink(id);
            ufl([...(arr.data)]);
            let temp = window.location.href.split("/");
            console.log(temp);
            uslink(temp[0]+"//"+temp[2]+"/i/"+i);
            
        }
    }> 
    <div class="container-fluid row">
     <div class="col-md-4">
       <ul class="list-group">
      <li class="list-group-item active" aria-current="true">List of Links</li>
      {
        fl.map((item)=>{
            return <li class="list-group-item">
             <div>Link :<a href={item.link} target="_blank">{item.link}</a></div>
             <div>Short link :<a href={sl+item.shortid} target="_blank">{sl+item.shortid}</a></div>
             <button type="button" class="btn-close bt" onClick={async()=>{
                 
                 let o = {
                  "shortid":item.shortid
                 }
                 console.log(id,o);
                    await Deletelink(id,o);
                 let arr = await Fulllink(id);
                  ufl([...(arr.data)]);
             }}></button>
            </li>
        })
      }
      </ul>    
     </div>
     <div class="col-md-8">   
     <div className="logout"><Link to ="/"><button className="btn btn-warning"onClick={()=>{
         window.localStorage.removeItem("app_token");
     }} >Logout</button></Link></div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Enter the Link here</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="https://......." value ={link} onChange={(e)=>{
        ulink(e.target.value)
    }} requireds/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Shortened Link</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={slink}/>
    <button class="btn btn-primary" type="button" onClick={()=>{
        ulink("")
        uslink("")
    }
    }>clear</button> 
    <button class="btn btn-primary" type="submit">Get Link</button> 
</div></div></div></form>
}


export default Short;