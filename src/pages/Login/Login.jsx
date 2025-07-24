import React from 'react'
import './Login.scss';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import logonoCigarrete from '../../assets/logonoCigarrete.png'
import FelipeAvatar from '../../assets/FelipeAvatar.png';

export const Login = () => {

  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
  }

  return (
    <>
      <div className="containerLogin_RegisterPrincipal">
        <div className="ContainerLoginCima">
          <img src={logonoCigarrete} alt="Logo noCigarette" />
          <GoogleLogin className="btnGoogle"
            type='standard'
            size='large'
            theme='outline'
            text='continue_with'
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
        <div className="ContainerLoginBaixo">
            <div className="ContainerLoginBaixoDireita">
              <h2>Diga não ao cigarro</h2>
              <div className="MsgEntreGoogle"><p>Entre com o Google</p></div>
              </div>
            <div className="ContainerLoginBaixoEsquerda"><img src={FelipeAvatar} alt="" /></div>
        </div>

      </div>
    </>
  )
}
