import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';

function Login() {
    const dispatch= useDispatch();
  return (
    <div>
        <button onClick={() => {
            dispatch(login({name:"Selin", age:25, email:"myMail@gmail.com"}))
        }}>
            Login
        </button>

        <button onClick={() => {
            dispatch(logout({name:"Selin", age:25, email:"myMail@gmail.com"}))
        }}>
            LOGOUT
        </button>
    </div>
  )
}

export default Login;