import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { formatDate } from "../utils/formatarData";

//icons
import { FaLocationDot, FaPeopleRoof, FaHouse} from "react-icons/fa6";
import { FaCalendarAlt, FaCat, FaToilet, FaFaucet, FaBed } from "react-icons/fa";
import { TbMeterSquare } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";

const DetalhesAnuncio = () => {
  const { id } = useParams();
  const [anuncio, setAnuncio] = useState(null);
  const [imagens, setImagens] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const buscarAnuncio = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/anuncios/${id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.ok){
          const data = await response.json();
          setAnuncio(data);
        } else {
          console.error('Falha ao buscar anúncio.');
        }
      } catch (error) {
        console.error('Erro ao buscar anúncio: ', error)
      }
    };

    const buscarImagens = async () => {
      try {
        const response = await fetch (`http://localhost:8000/api/anuncios/${id}/imagens/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.ok){
          const data = await response.json();
          setImagens(data);
          if (data.length > 0) {
            setSelectedImage(data[0]);
          }
        } else {
          console.error('Falha ao buscar imagens.');
        }
      } catch(error) {
        console.error('Erro ao buscar imagens: ', error);
      }
    };

    buscarAnuncio();
    buscarImagens();
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImage(imagens[index]);
    setCurrentIndex(index);
  }

  const handleNext = () => {
    if (currentIndex < imagens.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(imagens[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(imagens[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  if (!anuncio) {
    return <div>Anúncio não existe.</div>
  }

  return (
    <div className="CONTENT w-full flex flex-col md:flex-row bg-neutral-200 text-gray-900">

      <div className="GALERIA md:w-6/12 md:px-3 md:py-2 p-2 md:ml-2 mx-2 my-5 h-full rounded bg-neutral-100">
        <div className="flex flex-col gap-1">

          <div className="MAIN-IMAGEM relative main-img h-[500px]">
            {selectedImage && <img src={selectedImage.images} className="w-full h-full object-contain" alt='Imagens do anúncio'/>}
            <div className="text-right mt-2 absolute top-1 right-1 text-white bg-slate-900 text-sm rounded bg-opacity-40 p-1">
              {currentIndex + 1}/{imagens.length}
            </div>
          
            <button 
              className="MAIN-IMG-PREV-BTN absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button 
              className="MAIN-IMG-NEXT-BTN absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
              onClick={handleNext} 
              disabled={currentIndex === imagens.length - 1}
            >
              &gt;
            </button>
          </div>

          <div className="TAB-GALERIA relative md:w-[650px] w[300px]">
            <button 
              className="TAB-GALERIA-PREV-BTN absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-1 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
              onClick={() => scrollGallery('left')}
            >
              &lt;
            </button>

            <div ref={galleryRef} className="TAB-GALERIA-IMGS flex overflow-hidden">
              {imagens.map((imagem, index) => (
                <div key={index} className={`h-20 w-20 flex-shrink-0 overflow-hidden mx-1 ${currentIndex === index ? 'selected' : ''}`}>
                  <img src={imagem.images} alt={`Imagens do imóvel`} className="h-full w-full object-cover cursor-pointer" onClick={() => handleImageClick(index)} />
                </div>
              ))}
            </div>

            <button 
              className="TAB-GALERIA-NEXT-BTN absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
              onClick={() => scrollGallery('right')}
            >
              &gt;
            </button>
          </div>
          
        </div>
      </div>

      <div className="INFOS md:my-5 my-2 p-10 mx-2 md:mr-2 flex flex-col items-start rounded h-full bg-neutral-100">
        <div className="TITULO-LOCALIZACAO flex flex-wrap items-center gap-2 mb-2">
          <h1 className="TITULO text-2xl text-gray-900">{anuncio.titulo}</h1>
          {anuncio.link_maps ? (
            <a href={anuncio.link_maps} className="text-red-600 underline flex gap-1">
              <FaLocationDot />
              <div className="LOCALIZACAO-LINK text-sm">{anuncio.localidade}, {anuncio.cidade}</div>
            </a>
          ) : (
            <div className="LOCALIZACAO-SEM-LINK flex gap-1">
              <FaLocationDot />
              <div className="text-sm">{anuncio.localidade}, {anuncio.cidade}</div>
            </div>
          )}
        </div>

        <h2 className="VALOR-RENDA font-bold text-2xl mb-2 text-gray-900">${anuncio.renda}</h2>

        <div className="TAGS flex flex-wrap gap-1 mb-4">
          {anuncio.status && 
           <div className={`font-light uppercase text-xs font-medium rounded-md px-2 py-1 ${anuncio.status === 'Disponível' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            {anuncio.status}
          </div>
          }
  
          {anuncio.tipologia &&
            <div className="uppercase inline-block py-1 px-2 rounded bg-red-400 text-white text-xs font-medium tracking-widest">
              {anuncio.tipologia}
            </div>
          }
          
          {!anuncio.fumadores && 
          <div className="uppercase text-xs font-light bg-red-400 text-white font-medium rounded-md px-2 py-1">
            Não fumadores
          </div>
          }

          {anuncio.tipo_eletricidade && 
            <div className="uppercase text-xs font-light bg-red-400 text-white font-medium rounded-md px-2 py-1">
              {anuncio.tipo_eletricidade}
            </div>
          }

          {anuncio.condicao_uso && 
            <div className="uppercase text-xs font-light bg-red-400 text-white font-medium rounded-md px-2 py-1">
              {anuncio.condicao_uso}
            </div>
          }


          {[
            { value: anuncio.mobiliado, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.mobiliado ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Mobiliado
            </div>
            },
            { value: anuncio.fiador, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.fiador ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Fiador
            </div>
            },
            { value: anuncio.wifi, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.wifi ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Wifi
            </div>
            },
            { value: anuncio.limpeza_quinzenal, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.limpeza_quinzenal ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Limpeza Quinzenal
            </div>
            },
            { value: anuncio.garagem, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.garagem ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Garagem
            </div>
            },
            { value: anuncio.estacionamento, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.estacionamento ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Estacionamento
            </div>
            },
            { value: anuncio.elevador, content:
              <div className={`uppercase text-xs font-light font-medium rounded-md px-2 py-1 ${anuncio.elevador ? 'bg-red-400 text-white' : 'bg-gray-300 text-white'}`}>
              Elevador
            </div>
            }
          ].sort((a,b) => b.value - a.value)
            .map((tag, index) => (
              <React.Fragment key={index}>
                {tag.content}
              </React.Fragment>
            ))
          }
        
        </div>

        <div className="DESCRICAO flex flex-col items-start mb-3">
          <h3 className="text-gray-900 font-medium text-xl mb-1 tracking-wide title-font">DESCRIÇÃO</h3>
          <p className="text-gray-900 font-normal text-wrap">{anuncio.descricao}</p>
        </div>
        
        <hr class="w-full h-[1px] mx-auto border-0 bg-gray-200 mb-3" />

        <div className="CARACTERISTICAS flex flex-col items-start mb-5">
          <h3 class="text-gray-900 font-medium text-xl tracking-wide title-font mb-1">CARACTERÍSTICAS</h3>
            
          <div className="TABELA-CARACTERISTICAS flex flex-wrap min-w-96">
          
          {anuncio.tipo_imovel && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b ">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaHouse />
                  Tipo do Imóvel 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.tipo_imovel}</div>
              </div>
            }

          {anuncio.tipologia && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaBed />
                  Tipologia 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.tipologia}</div>
              </div>
            }

            {anuncio.casas_banho && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b ">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaToilet />
                  Casas de Banho 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.casas_banho}</div>
              </div>
            }

            
            {anuncio.area && 
              <div className="md:w-1/2 w-full flex items-center justify-between py-2 px-4 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <TbMeterSquare />
                  Área 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.area}</div>
              </div>
            }
            {anuncio.certificado_energetico && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <MdElectricBolt />
                  Certificado Energético 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.certificado_energetico}</div>
              </div>
            }

            {anuncio.despesas && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaFaucet />
                  Despesas
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.despesas}</div>
              </div>
            }

            {anuncio.animais_domesticos && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaCat />
                  Animais Domésticos 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.animais_domesticos}</div>
              </div>
            }
            
          
            {anuncio.caucao && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <PiHandDepositBold />
                  Caução 
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.caucao}</div>
              </div>
            }
            {anuncio.capacidade_lotacao && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b ">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaPeopleRoof />
                  Lotação máxima
                </div>
                <div className="font-bold text-md text-gray-900">{anuncio.capacidade_lotacao} pessoas</div>
              </div>
            }

            {anuncio.data_entrada && 
              <div className="md:w-1/2 w-full flex items-center justify-between p-2 border-b">
                <div className="font-light text-md text-gray-800 flex items-center gap-2">
                  <FaCalendarAlt />
                  Disponível a partir de
                </div>
                <div className="font-bold text-md text-gray-900">
                  {formatDate(anuncio.data_entrada)}
                </div>
              </div>
            }
          </div>
      </div>
      
      {(anuncio.prazo_contrato || anuncio.infos_contrato) && (
        <div className="CONDICOES_CONTRATO flex flex-col items-start mt-1 ">
          <h3 className="mb-2 text-gray-900 font-medium text-xl tracking-wide title-font">CONDIÇÕES CONTRATUAIS</h3>
          {anuncio.prazo_contrato && (
            <div className="flex gap-1 items-center">
              <div className="text-sm font-bold uppercase">Prazo:</div>
              <div className="text-sm">{anuncio.prazo_contrato}</div>
            </div>
          )}
          {anuncio.infos_contrato &&(
            <div className="mt-2 flex flex-col">
              <div className="uppercase tracking-wide font-light text-sm">Observações:</div>
              <div>{anuncio.infos_contrato}</div>
            </div>
          )}
        </div>        
        )}
    </div>
  </div>
  );
}

export default DetalhesAnuncio;
