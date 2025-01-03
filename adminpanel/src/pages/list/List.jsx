import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const List = () => {
  
  const url = "http://localhost:4000"

  const[list,setList] = useState([])

  const fetchList = async () => {
    const responce = await axios.get(`${url}/api/food/list`)
    console.log(responce.data.success);
    
    if (responce.data.success) {
      setList(responce.data.data)
    } else {
      toast.error("Error")
    }
  }
  
  useEffect(()=> {

  })
  
  return (
    <div className='list'></div>
  )
}

export default List