import React from "react";

import "../CadastroProduto/stylo/produto.scss";

export function CadastroProduto() {
  return (
    <main className="container-produto">
      <h2>cadastro de produtos</h2>

      <form className="form" action="">



       
      <div className="descri-cod">
          <div className="descricao">
            <label>descrição</label>
            <input type="text" name="descricao" id="descricao" />
          </div>

          <div className="codigo">
            <label>codigo</label>
            <input type="text" name="codigo" id="codigo"/>
          </div>
        </div>




        <div className="fabr-fornec">
          <div className="fabricante">
            <label>fabricante</label>
            <input type="text" name="fabricante" id="fabricante" />
          </div>

          <div className="fornecedor">
            <label>fornecedor</label>
            <input type="text" name="fornecedor" id="fornecedor" />
          </div>
        </div>

<div className="preco-qtd">
        <div className="preco">
          <label>preço produto</label>
          <input type="text" name="preco" id="preco" />
        </div>

        <div className="quantitade">
          <label>quantidade</label>
          <input type="text" name="quantidade" id="quantidade" />
        </div>
        </div>
        
      </form>
      <button className="btn" >Enviar</button>
     
    </main>
  );
}
