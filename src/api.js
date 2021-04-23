import React from "react";
import axios from "axios"; 

export function Addlink(id,data)
{   
    console.log(id,data);
   return axios.post(`https://gokul-url-shortner-server.herokuapp.com/${id}`,data,{
    headers:{ authorization:window.localStorage.getItem("app_token")}
});
}
export function Getlink(id,data)
{  
    //console.log(id,data);
    return axios.post(`https://gokul-url-shortner-server.herokuapp.com/single/${id}`,data);
}
export function Fulllink(id)
{
    return axios.get(`https://gokul-url-shortner-server.herokuapp.com/full/${id}`,{
        headers:{ authorization:window.localStorage.getItem("app_token")}
    });
}
export function Deletelink(id,data)
{
    console.log(id,data);
    return axios.put(`https://gokul-url-shortner-server.herokuapp.com/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("app_token")}
    });
}
export function Getuser(data)
{
    return axios.post("https://gokul-url-shortner-server.herokuapp.com/login",data);   
}
export function Adduser(data)
{
    return axios.post("https://gokul-url-shortner-server.herokuapp.com/register",data);   
}
export function Sentmail(data)
{   
    console.log(data);
    return axios.post("https://gokul-url-shortner-server.herokuapp.com/email",data);
}
export function Resetpassword(id,data)
{
    return axios.post(`https://gokul-url-shortner-server.herokuapp.com/cpass/${id}`,data);
}