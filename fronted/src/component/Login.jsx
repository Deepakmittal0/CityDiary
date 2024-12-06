import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div>
    {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        </form>
        <h3 className="font-bold text-lg">Login</h3>

        <div className='mt-4 space-y-2'>
          <span>Email</span><br />
          <input type="email" placeholder='Enter your email'className='w-80 px-3 py-1 border rounded-md outline-none' /><br />
          </div>

         <div className='mt-6 space-y-2'>
          <span className='mt-12'>Password</span><br />
          <input type="password" placeholder='Enter your password'className='w-80 px-3 py-1 border rounded-md outline-none' />
          </div>

      <div className=' flex justify-around mt-4'>
        <button className='bg-pink-500 p-2 text-white rounded-md px-3 py-1 hover:bg-pink-700 '>Login</button>
        <p>Not registered? <Link to='/signup' className='text-blue-500 underline'>Sign up</Link></p>
      </div>
      </div>
    </dialog></div>
  )
}

export default Login