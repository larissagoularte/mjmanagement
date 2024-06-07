import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CriarAnuncio = () => {
  const { authTokens } = useContext(AuthContext);
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

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setUploadedImages([...e.target.files]);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    uploadedImages.forEach((image,index) => {
      data.append(`uploaded_images`, image);
    });

    try {
      const response = await fetch('http://localhost:8000/api/novo-anuncio/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
        },
        body: data,
      });

      if(response.ok){
        alert('Anúncio criado!')
      } else {
        alert(`Falha ao criar anúncio: ${response.status}`);
      }
    }catch(error) {
      console.error('Erro ao criar anuncio: ', error);
    }
  };

  return (
    <div>
      <h1>Novo Anuncio</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2">
        <label htmlFor="titulo">
          Título:*
        </label>
        <input 
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />

        <label htmlFor="descricao">
          Descrição:*
        </label>
        <input 
          type="text"
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
        />

        <label htmlFor="renda">
          Renda:*
        </label>
        <input 
          type="number"
          id="renda"
          name="renda"
          value={formData.renda}
          onChange={handleChange}
          required
        />

        <label htmlFor="tipologia">
          Tipologia:*
        </label>
        <input 
          type="text"
          id="tipologia"
          name="tipologia"
          value={formData.tipologia}
          onChange={handleChange}
          required
        />

        <label htmlFor="localidade">
          Localização:*
        </label>
        <input 
          type="text"
          id="localidade"
          name="localidade"
          value={formData.localidade}
          onChange={handleChange}
          required
        />

        <label htmlFor="cidade">
          Cidade:*
        </label>
        <input 
          type="text"
          id="cidade"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">
          Disponibilidade:*
        </label>
        <select 
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >

        <option value=""></option>
        <option value="Disponível">Disponível</option>
        <option value="Indisponível">Indisponível</option>
        </select>

        <label htmlFor="publicado">
          Publicado:*
        </label>
        <input
          type="checkbox"
          id="publicado"
          name="publicado"
          checked={formData.publicado}
          onChange={handleCheckboxChange}
          required
        />

        <label htmlFor="link_maps">
          Link maps:
        </label>
        <input
          type="text"
          id="link_maps"
          name="link_maps"
          checked={formData.link_maps}
          onChange={handleChange}
        />

        <label htmlFor="data_entrada">
          Data de entrada:
        </label>
        <input
          type="date"
          id="data_entrada"
          name="data_entrada"
          checked={formData.data_entrada}
          onChange={handleChange}
        />

        <label htmlFor="area">
          Área:
        </label>
        <input
          type="text"
          id="text"
          name="text"
          checked={formData.text}
          onChange={handleChange}
        />

        <label htmlFor="certificado_energetico">
          Certificado Energético:
        </label>
        <select
          id="certificado_energetico"
          name="certificado_energetico"
          checked={formData.certificado_energetico}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>

        <label htmlFor="animais_domesticos">
          Animais Domésticos:
        </label>
        <select
          id="animais_domesticos"
          name="animais_domesticos"
          checked={formData.animais_domesticos}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Permitido">Permitido</option>
          <option value="Gato">Apenas gato</option>
          <option value="Cão">Apenas cão</option>
          <option value="Não permitido">Não permitido</option>
        </select>

        <label htmlFor="casas_banho">
          Casas de Banho:
        </label>
        <input
          type="number"
          id="casas_banho"
          name="casas_banho"
          value={formData.casas_banho}
          onChange={handleChange}
        />

        <label htmlFor="condicao_uso">
          Condição de Uso:
        </label>
        <select
          id="condicao_uso"
          name="condicao_uso"
          value={formData.condicao_uso}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Novo">Novo</option>
          <option value="Usado">Usado</option>
        </select>

        <label htmlFor="tipo_imovel">
          Tipo de Imóvel:
        </label>
        <select
          id="tipo_imovel"
          name="tipo_imovel"
          value={formData.tipo_imovel}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Quarto">Quarto</option>
          <option value="Quinta">Quinta</option>
        </select>

        <label htmlFor="caucao">
          Caução:
        </label>
        <input
          type="number"
          id="caucao"
          name="caucao"
          value={formData.caucao}
          onChange={handleChange}
        />

        <label htmlFor="fiador">
          Fiador:
        </label>
        <input
          type="checkbox"
          id="fiador"
          name="fiador"
          checked={formData.fiador}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="prazo_contrato">
          Prazo do Contrato:
        </label>
        <input
          type="text"
          id="prazo_contrato"
          name="prazo_contrato"
          value={formData.prazo_contrato}
          onChange={handleChange}
        />

        <label htmlFor="infos_contrato">
          Informações do Contrato:
        </label>
        <textarea
          id="infos_contrato"
          name="infos_contrato"
          value={formData.infos_contrato}
          onChange={handleChange}
        />

        <label htmlFor="garagem">
          Garagem:
        </label>
        <input
          type="checkbox"
          id="garagem"
          name="garagem"
          checked={formData.garagem}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="estacionamento">
          Estacionamento:
        </label>
        <input
          type="checkbox"
          id="estacionamento"
          name="estacionamento"
          checked={formData.estacionamento}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="mobiliado">
          Mobiliado:
        </label>
        <input
          type="checkbox"
          id="mobiliado"
          name="mobiliado"
          checked={formData.mobiliado}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="elevador">
          Elevador:
        </label>
        <input
          type="checkbox"
          id="elevador"
          name="elevador"
          checked={formData.elevador}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="tipo_eletricidade">
          Tipo de Eletricidade:
        </label>
        <select
          id="tipo_eletricidade"
          name="tipo_eletricidade"
          value={formData.tipo_eletricidade}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Elétrico">Elétrico</option>
          <option value="Gás">Gás</option>
          <option value="Gás/Elétrico">Gás e Elétrico</option>
        </select>

        <label htmlFor="capacidade_lotacao">
          Capacidade de Lotação:
        </label>
        <input
          type="number"
          id="capacidade_lotacao"
          name="capacidade_lotacao"
          value={formData.capacidade_lotacao}
          onChange={handleChange}
        />

        <label htmlFor="wifi">
          Wifi:
        </label>
        <input
          type="checkbox"
          id="wifi"
          name="wifi"
          checked={formData.wifi}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="limpeza_quinzenal">
          Limpeza Quinzenal:
        </label>
        <input
          type="checkbox"
          id="limpeza_quinzenal"
          name="limpeza_quinzenal"
          checked={formData.limpeza_quinzenal}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="despesas">
          Despesas:
        </label>
        <select
          id="despesas"
          name="despesas"
          value={formData.despesas}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Não incluídas">Não inclusas</option>
          <option value="Água">Água</option>
          <option value="Luz">Luz</option>
          <option value="Água e Luz">Água e Luz</option>
        </select>

        <label htmlFor="fumadores">
          Fumadores:
        </label>
        <input
          type="checkbox"
          id="fumadores"
          name="fumadores"
          checked={formData.fumadores}
          onChange={handleCheckboxChange}
        />
        
        <label htmlFor="uploadedImages">
          Upload Imagens:
        </label>
        <input
          type="file"
          id="uploadedImages"
          name="uploadedImages"
          multiple
          onChange={handleImageChange}
        />
      
      <button type="submit">Criar</button>
      </form>
    </div>
  )
}

export default CriarAnuncio