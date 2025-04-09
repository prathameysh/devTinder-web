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
  console.log("data from Bodyjsx :"+userData );


  const fetchUser = async () =>{
    if(userData) return ;

    try{
      const res = await axios.get(BASE_URL+"/view",{
        withCredentials:true,
      });
      dispatch(addUser(res.data));
      console.log("Fetched user:", res.data);
    }catch(err){
      if (err.status === 401) {
        navigate("/login"); 
      } else {
        console.error("Fetch user failed:", err);
      }
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