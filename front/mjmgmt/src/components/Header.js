import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

const Header = () => {
  let { user, logoutUser, authTokens } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const buscarDadosUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`
          },
        });
        
        if(response.ok){
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.erro('Falha ao buscar utilizador.')
        }
      } catch(error){
        console.error('Erro:', error)
      } 
    };

    buscarDadosUser();
  },[authTokens]);

  return (
    <header className="text-white bg-red-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row justify-center items-center">
        {user ? (
          <>
            <Link to='/'>
              <div className="ml-3 pb-3 md:pb-0 font-light text-2xl">MJManagement</div>
            </Link>
            <div className="md:ml-auto flex self-center text-[11px] uppercase">Bem vindo,&nbsp;<div className="font-bold">{userInfo ? userInfo.first_name : ''}</div>.&nbsp;<Link to="/" className="underline">Meus Anúncios</Link>&nbsp;/ Configurações /&nbsp; 
            <a className="underline cursor-pointer" onClick={logoutUser}>Logout</a>
          </div>
        </>
        ) : (
          <div className="flex justify-center items-center md:mb-0">
          <Link to='/'>
            <div className="ml-3 text-2xl font-light">MJManagement</div>
          </Link>
        </div>
        )}
        
  </div>
</header>
  )
}

export default Header