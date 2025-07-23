import React from 'react'
import './Login.scss';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
  }

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/TESTE")
        }}
        onError={() => console.log("Login Fail")}
         />
    </>
  )
}
