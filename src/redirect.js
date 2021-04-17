import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Fulllink, Getlink } from "./api";

function Redir()
{  let {id} = useParams();
   let {shortid} = useParams();
    // console.log(id,shortid);
    useEffect(async()=>{
        let o = {
            "shortid":shortid
           }
        console.log(id,o);
        let res = await Getlink(id,o);
        console.log(res);
        window.location.assign(res.data.link);
    },[])
    return <></>
}

export default Redir; 