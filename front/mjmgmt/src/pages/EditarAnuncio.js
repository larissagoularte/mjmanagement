import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate,useParams } from "react-router-dom";

const EditarAnuncio = () => {
  const { authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [anuncio, setAnuncio] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    renda: '',
    tipologia: '',
    localidade: '',
    cidade: '',
    status: '',
    publicado: '',
    link_maps: '',
    data_entrada: '',
    area: '',
    certificado_energetico: '',
    animais_domesticos: '',
    casas_banho: '',
    condicao_uso: '',
    tipo_imovel: '',
    caucao: '',
    fiador: '',
    prazo_contrato: '',
    infos_contrato: '',
    garagem: '',
    estacionamento: '',
    mobiliado: '',
    elevador: '',
    tipo_eletricidade: '',
    capacidade_lotacao: '',
    wifi: '',
    limpeza_quinzenal: '',
    despesas: '',
    fumadores: '',
  });

  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const buscarAnuncio = async () => {
      try {
        const response = await fetch(`http://localhost:8000:/api/anuncio/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if(response.ok){
          const data = await response.json();
          setAnuncio(data);
          setFormData({
            titulo: data.titulo,
            descricao: data.descricao,
            renda: data.renda,
            tipologia: data.tipologia,
            localidade: data.localidade,
            cidade: data.cidade,
            status: data.status,
            publicado: data.publicado,
            link_maps: data.link_maps,
            data_entrada: data.data_entrada,
            area: data.area,
            certificado_energetico: data.certificado_energetico,
            animais_domesticos: data.animais_domesticos,
            casas_banho: data.casas_banho,
            condicao_uso: data.condicao_uso,
            tipo_imovel: data.tipo_imovel,
            caucao: data.caucao,
            fiador: data.fiador,
            prazo_contrato: data.prazo_contrato,
            infos_contrato: data.infos_contrato,
            garagem: data.garagem,
            estacionamento: data.estacionamento,
            mobiliado: data.mobiliado,
            elevador: data.elevador,
            tipo_eletricidade: data.tipo_eletricidade,
            capacidade_lotacao: data.capacidade_lotacao,
            wifi: data.wifi,
            limpeza_quinzenal: data.limpeza_quinzenal,
            despesas: data.despesas,
            fumadores: data.fumadores,
          })

        } else {
          alert('Falha ao carregar anuncio.')
        }
      } catch (error){
        console.error('Erro: ', error);
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
        } else {
          console.error('Falha ao buscar imagens.');
        }
      } catch(error) {
        console.error('Erro ao buscar imagens: ', error);
      }
    };
    
    buscarAnuncio();
    buscarImagens();
  }, [id, authTokens]);


  
  return (
    <>
    <div className="CONTENT bg-neutral-100 md:p-12 p-6">
      <h3 className="text-3xl tracking-wide mb-5">Editar Anúncio</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="INFORMACOES-ANUNCIO">
          <h2 className="text-lg font-medium tracking-wide border-b border-gray-300 mb-3">Informações de Anúncio</h2>
          <div className="INFOS grid md:grid-cols-2 grid-cols-1 gap-4">
          
            <div className="INFOS-COL-1 w-full h-full mb-4 flex flex-col gap-2">
              <div className="TITULO">
                <div className="tracking-wide font-bold text-sm mb-1">Título</div>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={""}
                  onChange={""}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                />
              </div>
              
              <div className="DESCRICAO ">
                <div className="tracking-wide font-bold text-sm mb-1">Descrição</div>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={''}
                  onChange={''}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg p-3 text-sm w-full h-full md:mb-2"

                />
              </div>
            </div>

            <div className="INFOS-COL-2 grid grid-cols-1 gap-2">
              <div className="RENDA-TIPOLOGIA-LOCALIZACAO grid grid-cols-2 gap-2">
                <div className="RENDA">
                  <div className="tracking-wide font-bold text-sm mb-1">Renda</div>
                  <input
                    type="text"
                    id="renda"
                    name="renda"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>

                <div className="TIPOLOGIA">
                  <div className="tracking-wide font-bold text-sm mb-1">Tipologia</div>
                  <input
                    type="text"
                    id="tipologia"
                    name="tipologia"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>

                <div className="LOCALIZACAO">
                  <div className="tracking-wide font-bold text-sm mb-1">Localização</div>
                  <input
                    type="text"
                    id="localidade"
                    name="localidade"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>
                
                <div className="CIDADE">
                  <div className="tracking-wide font-bold text-sm mb-1">Cidade</div>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>
              </div>
              
              <div className="LINK-MAPS">
                  <div className="tracking-wide font-bold text-sm mb-1">Link para mapa</div>
                  <input
                    type="text"
                    id="link_maps"
                    name="link_maps"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
              </div>
            </div>
          </div>
        </div>

        <div className="CARACTERISTICAS-IMOVEL">
          <h2 className="text-lg font-medium tracking-wide border-b border-gray-300 mb-3">Informações de Anúncio</h2>
          <div className="CARACTERISTICAS-IMOVEL flex flex-col gap-2">
            <div className="INPUTS grid grid-cols-3 gap-2">
              <div className="CASAS-BANHO">
                <div className="tracking-wide font-bold text-sm mb-1">Casas de Banho</div>
                  <input
                    type="text"
                    id="casas_banho"
                    name="casas_banho"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>

                <div className="AREA">
                  <div className="tracking-wide font-bold text-sm mb-1">Área</div>
                  <input
                    type="number"
                    id="area"
                    name="area"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>

               <div className="LOTACAO">
                <div className="tracking-wide font-bold text-sm mb-1">Lotação Máxima</div>
                <input
                  type="number"
                  id="capacidade_lotacao"
                  name="capacidade_lotacao"
                  value={""}
                  onChange={""}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                />
              </div>
            </div>

            <div className="SELECTS grid md:grid-cols-3 grid-cols-2 gap-2">
              <div className="CONDICAO-USO">
                <div className="tracking-wide font-bold text-sm mb-1">Condição de Uso</div>
                <select
                  id="condicao_uso"
                  name="condicao_uso"
                  value={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm w-full"
                >
                  <option value=""></option>
                  <option value="Novo">Novo</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>

              
              <div className="TIPO-IMOVEL">
                <div className="tracking-wide font-bold text-sm mb-1">Tipo de Imóvel</div>
                <select
                  id="tipo_imovel"
                  name="tipo_imovel"
                  value={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm w-full"
                >
                  <option value=""></option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Quarto">Quarto</option>
                  <option value="Quinta">Quinta</option>
                </select>
              </div>

              <div className="CERTIFICADO-ENERGETICO">
                <div className="tracking-wide text-sm font-bold mb-1">Certificado Energético</div>
                <select
                  id="certificado_energetico"
                  name="certificado_energetico"
                  value={""}
                  onChange={""}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm w-full"
                >
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </div>

              <div className="TIPO-ELETRICIDADE">
                <div className="tracking-wide text-sm font-bold mb-1">Tipo de Eletricidade</div>
                <select
                  id="tipo_eletricidade"
                  name="tipo_eletricidade"
                  value={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm w-full"
                >
                  <option value=""></option>
                  <option value="Elétrico">Elétrico</option>
                  <option value="Gás">Gás</option>
                  <option value="Gás/Elétrico">Gás/Elétrico</option>
                </select>
              </div> 

              <div className="ANIMAIS-DOMESTICOS">
                <p className="tracking-wide text-sm font-bold mb-1">Animais Domésticos</p>
                <select
                  id="animais_domesticos"
                  name="animais_domesticos"
                  value={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm w-full"
                >
                  <option value=""></option>
                  <option value="Permitido">Permitido</option>
                  <option value="Não permitido">Não permitido</option>
                  <option value="Gato">Apenas Gato</option>
                  <option value="Cão">Apenas Cão</option>
                </select>
              </div>
            </div>

            <div className="CHECKS flex flex-wrap">
              <div className="GARAGEM flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="garagem"
                  name="garagem"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Garagem</p>
              </div>
              
              <div className="ESTACIONAMENTO flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="estacionamento"
                  name="estacionamento"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Estacionamento</p>
              </div>

              <div className="MOBILIADO flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="mobiliado"
                  name="mobiliado"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Mobiliado</p>
              </div>
              
              <div className="ELEVADOR flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="elevador"
                  name="elevador"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Elevador</p>
              </div>
              
              <div className="WIFI flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="wifi"
                  name="wifi"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Wifi</p>
              </div>

              <div className="LIMPEZA flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="limpeza_quinzenal"
                  name="limpeza_quinzenal"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Limpeza Quinzenal</p>
              </div>
              
              <div className="FUMADORES flex items-center gap-1 pr-2">
                <input
                  type="checkbox"
                  id="fumadores"
                  name="fumadores"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Não fumadores</p>
              </div>
            </div>
          </div>
        </div>

        <div className="CONTRATO">
          <h2 className="text-lg font-medium tracking-wide border-b border-gray-300 mb-3">Condições Contratuais</h2>
          <div className="CONDICOES-CONTRATUAIS grid grid-cols-2 gap-4">
            <div className="COL-1-CONTRATO grid grid-cols-1 gap-2">
              <div className="PRAZO">
                <div className="tracking-wide font-bold text-sm mb-1">Prazo do contrato</div>
                  <input
                    type="text"
                    id="prazo_contrato"
                    name="prazo_contrato"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                  />
                </div>

                <div className="OBSERVACOES">
                  <div className="tracking-wide font-bold text-sm mb-1">Observações</div>
                  <textarea
                    id="infos_contrato"
                    name="infos_contrato"
                    value={''}
                    onChange={''}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg p-3 text-sm w-full h-full md:mb-2"

                  />
                </div>
            </div>
            
            <div className="COL-2-CONTRATO flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="CAUCAO">
                  <div className="tracking-wide font-bold text-sm mb-1">Caução</div>
                    <input
                      type="number"
                      id="caucao"
                      name="caucao"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                    />
                </div>

                <div className="DATA-ENTRADA">
                  <div className="tracking-wide font-bold text-sm mb-1">Data de entrada</div>
                    <input
                      type="date"
                      id="data_entrada"
                      name="data_entrada"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-full"
                    />
                </div>
              </div>
              <div className="FIADOR flex gap-1 items-center">
                <input
                  type="checkbox"
                  id="fiador"
                  name="fiador"
                  checked={""}
                  onChange={""}
                  className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
                />
                <p className="tracking-wide">Fiador</p>
            </div>
            </div>  
            
          </div>
        </div>

        <div className="IMAGENS">
          <h2 className="text-lg font-medium tracking-wide border-b border-gray-300 mb-3">Imagens</h2>
          
          <div className="flex flex-wrap gap-2">
          {imagens.map((imagem, index) => (
            <div className="bg-white rounded p-2">
              <div key={index} className='w-24 h-24'>
                <img src={imagem.images} alt={`Imagens do imóvel`} className='w-full h-full object-cover'/>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      
    </div>
    
  </>
  
  )

}

export default EditarAnuncio