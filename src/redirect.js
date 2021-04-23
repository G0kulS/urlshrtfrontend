import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Fulllink, Getlink } from "./api";

function Redir()
{  
   let {shortid} = useParams();
    // console.log(id,shortid);
    useEffect(async()=>{
        let o = {
            "shortid":shortid
           }
        console.log(shortid,o);
        let res = await Getlink(shortid,o);
        console.log(res);
        window.location.assign(res.data.link);
    },[])
    return <></>
}

export default Redir; 