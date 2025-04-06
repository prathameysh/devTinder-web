import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {


  const user= useSelector((store)=>store.user);




  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">

      <div className="flex flex-1 justify-start">
        <a className="btn btn-ghost text-xl flex items-center gap-2"><img className="h-6 w-6" src="vite.svg" alt="logo" />devTinder</a>
      </div>
  
      {user &&(<div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <img className="w-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>)}

    </div>
    </>
  )
}

export default Navbar