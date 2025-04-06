import Navbar from './Navbar'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);


  const fetchUser = async () =>{
    if(userData) return ;

    try{
      const res = await axios.get(BASE_URL+"/view",{
        withCredentials:true,
      });
      dispatch(addUser(res.data));
    }catch(err){
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err); 
    }
  };

  useEffect(()=>{
    fetchUser();
  },[]);


  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    
  )
}

export default Body;