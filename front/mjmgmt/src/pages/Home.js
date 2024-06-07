import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditModal from "../components/EditModal";


const Home = () => {
  const { user, authTokens } = useContext(AuthContext);
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    if (authTokens && user) {
      const buscarAnuncios = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/user/anuncios/', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${authTokens.access}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            //ordenar anúncios por data de criação (mais recentes primeiro)
            data.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
            setAnuncios(data);
            console.log(data)
          } else {
            console.error('Erro ao buscar anúncios.');
          }
        } catch (error) {
          console.error('Erro ao buscar anúncios: ', error);
        }
      };

      buscarAnuncios();
    }
  }, [authTokens, user]);

  const handleChangeStatus = async (id, newStatus) => {
    //const confirmationText = newStatus === 'Disponível'
    //  ? 'Tem certeza que deseja mudar o status do anúncio para disponível?'
    //  : 'Tem certeza que deseja mudar o status do anúncio para indisponível?';

    //const confirmation = window.confirm(confirmationText);

    //if(!confirmation){
    //  return;
    //}

    try {
      const response = await fetch(`http://localhost:8000/api/editar-anuncio/${id}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        // Update the local state after successful update
        const updatedAnuncios = anuncios.map(anuncio => {
          if (anuncio.id === id) {
            return { ...anuncio, status: newStatus };
          }
          return anuncio;
        });
        setAnuncios(updatedAnuncios);
      } else {
        console.error('Erro ao atualizar status do anúncio.');
      }
    } catch (error) {
      console.error('Erro ao atualizar status do anúncio: ', error);
    }
  };

  const handleChangePublicado = async (id, newPublicado) => {
    
    //const confirmationText = newPublicado
    //  ? 'Tem certeza que deseja tornar o anúncio público?'
    //  : 'Tem certeza que dseja tornar o anúncio privado?';

    //const confirmation = window.confirm(confirmationText);

    //if(!confirmation){
      //return;
    //}

    try {
      const response = await fetch(`http://localhost:8000/api/editar-anuncio/${id}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicado: newPublicado })
      });

      if (response.ok) {
        // Update the local state after successful update
        const updatedAnuncios = anuncios.map(anuncio => {
          if (anuncio.id === id) {
            return { ...anuncio, publicado: newPublicado };
          }
          return anuncio;
        });
        setAnuncios(updatedAnuncios);
      } else {
        console.error('Erro ao atualizar status do anúncio.');
      }
    } catch (error) {
      console.error('Erro ao atualizar status do anúncio: ', error);
    }
  };


  return (
    <div className="py-10 px-10 h-auto bg-neutral-200">
      <div className="TITULO-PAGINA flex items-center justify-center gap-3">
        <h1 className="text-3xl font-medium text-gray-900">Meus Anúncios</h1>
        <Link to='/criar-anuncio'>
          <button className='flex text-white font-semibold bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 rounded text-sm'>Criar Anúncio</button>
        </Link>
      </div>

    <div className="LISTA-ANUNCIOS flex py-5 flex-wrap md:justify-center gap-3">
    {anuncios.map((anuncio) => (
        <div key={anuncio.id} className="bg-neutral-100 lg:w-1/4 md:w-1/2 w-full rounded p-3">
          <div className="IMAGENS-ANUNCIOS relative block overflow-hidden h-48">
          <div className={`status-ball absolute top-3 cursor-pointer left-2 w-4 h-4 rounded-full ${
                anuncio.publicado && anuncio.status === 'Disponível' ? 'bg-green-500' :
                (anuncio.publicado || anuncio.status === 'Disponível') ? 'bg-yellow-500' :
                'bg-red-500'
              }`}>
                <span className="tooltip-text">
                  {anuncio.publicado && anuncio.status === 'Disponível' ? 'Publicado e Disponível' :
                  (anuncio.publicado && anuncio.status === 'Indisponível') ? 'Publicado e Indisponível' :
                  (!anuncio.publicado && anuncio.status === 'Disponível') ? 'Privado e Disponível' :
                  'Privado e Indisponível'}
                </span>
              </div>

            {anuncio.images && anuncio.images.length > 0 && (
              <img src={anuncio.images[0].images} className="w-full h-full object-center block object-cover"/>
            )}

            <button 
              onClick={() => handleChangePublicado(anuncio.id, !anuncio.publicado)}
              className="absolute top-2 right-2 p-2 bg-white hover:bg-gray-100 active:bg-gray-100 rounded "
            >
              {anuncio.publicado ? (
                <FaLock />
              ) : (
                <FaLockOpen />
              )}
            </button>
          </div>

          <div className="text-gray-900 font-medium text-lg mt-1">
            <Link to={`/anuncio/${anuncio.id}`} className="hover:underline">
              {anuncio.titulo}
            </Link>
          <div className="flex justify-between mt-2">
              <button onClick={() => handleChangeStatus(anuncio.id, anuncio.status === 'Disponível' ? 'Indisponível' : 'Disponível')}>
              {anuncio.status && 
                <div className={` uppercase text-xs font-medium rounded-md px-2 py-1 ${anuncio.status === 'Disponível' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
                  {anuncio.status}
                </div>
              }
              </button>
              <button 
                className="bg-gray-200 text-gray-400 hover:bg-gray-300 w-7 h-7 rounded"
              >
                <div className="w-full flex justify-center items-center">
                  <Link to={`anuncio/${anuncio.id}/editar`}>
                    <MdEdit />
                  </Link>
                </div>
              </button>
              
            </div>
            <div>
             
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home