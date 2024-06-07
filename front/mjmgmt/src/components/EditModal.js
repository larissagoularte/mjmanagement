import React, { useState } from "react";

const EditModal = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="OVERLAY fixed inset-0 bg-black bg-opacity-30 overflow-y-auto flex justify-center items-center z-50">
        <div className="MODAL z-50 absolute rounded-lg mt-20 max-w-3xl overflow-y-auto md:p-auto " onClick={(e) => e.stopPropagation()}>
          <div className="relative p-6 border-0 rounded-xl shadow-lg flex flex-col w-full bg-white">
            <h1 className="text-3xl tracking-wide mb-5">Editar Anúncio</h1>

          <form onSubmit={""} className="flex flex-wrap gap-4 w-full">
            <div className="flex flex-col md:flex-row">
            <div className="w-1/2">
              <div className="INFORMACOES-GERAIS flex flex-col w-full border-b border-gray-200">
                <h2 className="text-lg font-medium tracking-wide mb-1">Informações Gerais</h2>
              </div>

              <div className="w-1/2 flex gap-4 ">
                <div className="TITULO-DESCRICAO flex flex-col gap-2">
                  <div className="TITULO flex flex-col gap-2 ">
                    <p className="tracking-wider text-sm">Título*</p>
                    <input
                      type="text"
                      id="titulo"
                      name="titulo"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-46"
                    />
                  </div>

                  <div className="DESCRICAO flex flex-col gap-2">
                    <p className="tracking-wider text-sm">Descrição*</p>
                    <textarea
                      id="titulo"
                      name="titulo"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-full px-3 py-2 w-46 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="RENDA-TIPOLOGIA flex gap-4">
                    <div className="RENDA flex flex-col gap-2">
                      <p className="tracking-wider text-sm">Renda*</p>
                      <input
                        type="text"
                        id="renda"
                        name="renda"
                        value={""}
                        onChange={""}
                        className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-36"
                      />
                    </div>

                    <div className="TIPOLOGIA flex flex-col gap-2">
                      <p className="tracking-wider text-sm">Tipologia*</p>
                      <input
                        type="text"
                        id="tipologia"
                        name="tipologia"
                        value={""}
                        onChange={""}
                        className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-36"
                      />
                    </div>
                  </div>
                  
                  <div className="LOCALIZACAO-CIDADE flex gap-4">
                    <div className="LOCALIZACAO flex flex-col gap-2">
                      <p className="tracking-wider text-sm">Localização*</p>
                      <input
                        type="text"
                        id="localidade"
                        name="localidade"
                        value={""}
                        onChange={""}
                        className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-36"
                      />
                    </div>

                    <div className="CIDADE flex flex-col gap-2">
                      <p className="tracking-wider text-sm">Cidade*</p>
                      <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        value={""}
                        onChange={""}
                        className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-36"
                      />
                    </div>
                  </div>

                  <div className="LINK-MAPS flex flex-col gap-2">
                    <p className="tracking-wider text-sm">Link para o mapa</p>
                    <input
                      type="text"
                      id="link_maps"
                      name="link_maps"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="CARACTERISTICAS-IMOVEL flex flex-col border-b border-gray-200">
                <h2 className="text-lg font-medium tracking-wide mb-1">Cararacterísticas do Imóvel</h2>
              </div>

              <div className="flex gap-2">
                <div className="CASAS-BANHO flex flex-col gap-2">
                  <h3 className="tracking-wide text-sm">Casas de Banho</h3>
                    <input
                      type="number"
                      id="casas_banho"
                      name="casas_banho"
                      value={""}
                      onChange={""}
                      className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 w-36 text-sm"
                    />
                </div>

                <div className="AREA flex flex-col gap-2">
                  <p className="tracking-wider text-sm">Área</p>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 w-36 text-sm"
                  />
                </div>

                <div className="LOTACAO flex flex-col gap-2">
                  <p className="tracking-wider text-sm">Lotação Máxima</p>
                  <input
                    type="number"
                    id="capacidade_lotacao"
                    name="capacidade_lotacao"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm w-36"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="CONDICAO-USO flex flex-col gap-2">
                  <h3 className="tracking-wide text-sm">Condição de Uso</h3>
                  <select
                    id="condicao_uso"
                    name="condicao_uso"
                    value={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm "

                  >
                    <option value=""></option>
                    <option value="Novo">Novo</option>
                    <option value="Usado">Usado</option>
                  </select>
                </div>

                <div className="TIPO-IMOVEL flex flex-col gap-2">
                  <h3 className="tracking-wide text-sm">Tipo de Imóvel</h3>
                  <select
                    id="tipo_imovel"
                    name="tipo_imovel"
                    value={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"

                  >
                    <option value=""></option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Quarto">Quarto</option>
                    <option value="Quinta">Quinta</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="CERTIFICADO-ENERGETICO flex flex-col gap-2">
                  <h3 className="tracking-wide text-sm">Certificado Energético</h3>
                  <select
                    id="certificado_energetico"
                    name="certificado_energetico"
                    value={""}
                    onChange={""}
                    className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"

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

                <div className="TIPO-ELETRICIDADE flex flex-col gap-2">
                  <p className="tracking-wide text-sm">Tipo de Eletricidade</p>
                  <select
                    id="tipo_eletricidade"
                    name="tipo_eletricidade"
                    value={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"

                  >
                    <option value=""></option>
                    <option value="Elétrico">Elétrico</option>
                    <option value="Gás">Gás</option>
                    <option value="Gás/Elétrico">Gás/Elétrico</option>
                  </select>
                </div> 
              </div>
              
              <div className="flex gap-4">
                <div className="GARAGEM flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="garagem"
                    name="garagem"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"

                  />
                  <p className="tracking-wide text-sm">Garagem</p>
                </div>

                <div className="ESTACIONAMENTO flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="estacionamento"
                    name="estacionamento"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

                  />
                  <p className="tracking-wide text-sm">Estacionamento</p>
                </div>

                <div className="MOBILiADO flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="mobiliado"
                    name="mobiliado"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

                  />
                  <p className="tracking-wide text-sm">Mobiliado</p>
                </div>

                <div className="WIFI flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="wifi"
                    name="wifi"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

                  />
                  <p className="tracking-wide text-sm">Wifi</p>
                </div>

                <div className="LIMPEZA-QUINZENAL flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="limpeza_quinzenal"
                    name="limpeza_quinzenal"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

                  />
                  <p className="tracking-wide text-sm">Limpeza Quinzenal</p>
                </div>

                <div className="ELEVADOR flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="elevador"
                    name="elevador"
                    checked={""}
                    onChange={""}
                    className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

                  />
                  <p className="tracking-wide text-sm">Elevador</p>
                </div>
              </div>
            </div>
            </div>

            <div className="CONDICOES-CONTRATO flex flex-col w-full border-b border-gray-200">
              <h2 className="text-lg font-medium tracking-wide mb-1">Condições Contratuais</h2>
            </div>
            
            <div className="flex flex-col">
              <div className="PRAZO-CONTRATO flex flex-col gap-2">
                <p className="tracking-wider text-sm">Prazo do contrato:</p>
                <input
                  type="text"
                  id="caucao"
                  name="caucao"
                  value={""}
                  onChange={""}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm"
                />
              </div>

              <div className="INFOS-CONTRATO flex flex-col gap-2">
                <p className="tracking-wider text-sm">Observações</p>
                <textarea
                  id="infos_contrato"
                  name="infos_contrato"
                  value={""}
                  onChange={""}
                  className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-32 w-96 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="DATA-ENTRADA flex flex-col gap-2">
              <p className="tracking-wider text-sm">Disponível a partir de</p>
              <input
                type="date"
                id="data_entrada"
                name="data_entrada"
                value={""}
                onChange={""}
                className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"
              />
            </div>

            <div className="DESPESAS flex flex-col gap-2">
              <p className="tracking-wide text-sm">Despesas</p>
              <select
                id="despesas"
                name="despesas"
                value={""}
                onChange={""}
                className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"
  
              >
                <option value=""></option>
                <option value="Não incluídas">Não incluídas</option>
                <option value="Água">Água</option>
                <option value="Luz">Luz</option>
                <option value="Água e Luz">Água e Luz</option>
              </select>
            </div>

            <div className="ANIMAIS-DOMESTICOS flex flex-col gap-2">
              <p className="tracking-wide text-sm">Animais Domésticos</p>
              <select
                id="animais_domesticos"
                name="animais_domesticos"
                value={""}
                onChange={""}
                className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-1 text-sm"

              >
                <option value=""></option>
                <option value="Permitido">Permitido</option>
                <option value="Não permitido">Não permitido</option>
                <option value="Gato">Apenas Gato</option>
                <option value="Cão">Apenas Cão</option>
              </select>
            </div>

            <div className="CAUCAO flex flex-col gap-2">
              <p className="tracking-wider text-sm">Caução</p>
              <input
                type="number"
                id="caucao"
                name="caucao"
                value={""}
                onChange={""}
                className="border border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-3 text-sm"
              />
            </div>

            <div className="FIADOR flex items-center gap-2">
              <input
                type="checkbox"
                id="fiador"
                name="fiador"
                checked={""}
                onChange={""}
                className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

              />
              <p className="tracking-wide text-sm">Fiador</p>
            </div>

            <div className="NAO-FUMADORES flex items-center gap-2">
              <input
                type="checkbox"
                id="fumadores"
                name="fumadores"
                checked={""}
                onChange={""}
                className="border  border-solid border-gray-300 focus:border-red-500 focus:border-2 rounded-lg h-9 p-4 text-sm"

              />
              <p className="tracking-wide text-sm">Não Fumadores</p>
            </div>

            
           


            <div className="BOTOES flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Fechar
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
              Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default EditModal
