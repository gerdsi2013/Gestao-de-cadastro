import React, { useState } from "react";

import "../CadastroProduto/stylo/produto.scss";

export function CadastroProduto() {

  const [descricao, setdescricao] = useState("");
  const [cod, setcod] = useState("")
  const [fabricante, setfabricante] = useState("")
  const [fornecedor, setfornecedor] = useState("")
  const [preco, setpreco] = useState("")
  const [qtd, setqtd] = useState("")


  const Handle = () =>{
    localStorage.setItem("Descricao", descricao);
    localStorage.setItem("Codigo",cod);
    localStorage.setItem("Fabricante",fabricante);
    localStorage.setItem("Forncedor",fornecedor);
    localStorage.setItem("Preco",preco);
    localStorage.setItem("Quantidade",qtd);
  }


  return (

    <main className="container-produto">
      <h2>cadastro de produtos</h2>

      <form className="form" action="">

       
      <div className="descri-cod">
          <div className="descricao">
            <label>descrição</label>
            <input 
            type="text" 
            name="descricao" 
            id="descricao"
            value={descricao}
            onChange = {(e) => setdescricao(e.target.value)} />
          </div>

          <div className="codigo">
            <label>codigo</label>
            <input
             type="text"
              name="codigo"
               id="codigo"
               value={cod}
               onChange = {(e)=>setcod(e.target.value)}/>
          </div>
        </div>




        <div className="fabr-fornec">
          <div className="fabricante">
            <label>fabricante</label>
            <input type="text"
             name="fabricante"
              id="fabricante"
              value = {fabricante}
              onChange = {(e)=> setfabricante (e.target.value)} />
          </div>

          <div className="fornecedor">
            <label>fornecedor</label>
            <input type="text"
             name="fornecedor"
              id="fornecedor"
              value ={fornecedor}
              onChange = {(e)=> setfornecedor (e.target.value)}/>
          </div>
        </div>

<div className="preco-qtd">
        <div className="preco">
          <label>preço produto</label>
          <input type="text"
           name="preco"
            id="preco"
            value={preco}
            onChange = {(e)=> setpreco(e.target.value)}/>
        </div>

        <div className="quantitade">
          <label>quantidade</label>
          <input type="text"
           name="quantidade"
            id="quantidade"
            value={qtd}
            onChange = {(e)=> setqtd(e.target.value)}/>
        </div>
        </div>
        <button className="btn" onClick={Handle} >Enviar</button>
      </form>
      
     
    </main>
  );
}
