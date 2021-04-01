import { useState,useEffect } from "react";
const axios = require("axios");


function GetTasks() {
  let url = "http://localhost:5000/api/v1/tasks";
  const [tasks , setTasks] = useState([]);
  useEffect(()=>{
    axios.get(url)
    .then(function (response) {
      // handle success
      setTasks(response.data)
      // console.log(response);
      // console.log(response.data);
     
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
  },[])
 
 
 return tasks;
}

export default GetTasks
