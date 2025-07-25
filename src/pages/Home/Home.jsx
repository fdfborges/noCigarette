import React from 'react'
import './Home.scss';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();

  }

  return (
    <>
      <div className="containerLoginRegisterPrincipal">
        <div className='headerLoginRegister'>
          <p>noCigarrete</p>
          <p className='LoginSubtitle'>A no noCigarrete é a aplicação que te fará parar com seu vicio, ter uma vida mais saudável, mais anos de vida. parar com seu vicio, ter uma vida mais saudável, mais anos de vida.</p>
        </div>
        <div className='MeioLoginRegister'>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <div className='FooterLoginRegister'>
          <div className="FooterLineOr">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <GoogleLogin className="btnGoogle"
            type='standard'
            size='large'
            theme='filled_black'
            text='sign_in_with'
            shape='square'
            logo_alignment='left'
            width={""}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse)
              console.log(jwtDecode(credentialResponse.credential));
              navigate("/Sondagem");
            }}
            onError={() => console.log("Login Fail")} />
        </div>


      </div>
    </>
  )
}
