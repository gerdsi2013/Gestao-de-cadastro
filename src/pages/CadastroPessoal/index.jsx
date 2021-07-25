import React from "react";
import "../CadastroPessoal/stylo/cadastro.scss";

export function CadastroPessoal() {
  return (

    <main className="container">
      <h2>Cadastro de clientes</h2>

      <div className="division">
        <section className="inf-pessoal">
          <h3>Informações Pessoais</h3>

          <form className="formulario" action="">
            <div className="form-nome">
              <label>Nome Completo</label>
              <input type="text" name="nome" id="nome" />
            </div>

            <div className="form-cpf-email">
              <div className="cpf">
                <label>Cpf:</label>
                <input type="number" name="cpf" id="cpf" />
              </div>
              <div className="data">
                <label>Data de Nascimento</label>
                <input type="date" name="data" id="data" />
              </div>
              <div className="contato">
                <label>Contato</label>
                <input type="text" name="telefone" id="telefone" />
              </div>

              <div className="email">
                <label>E-mail</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
          </form>
        </section>

        <section className="inf-adiconais">
          <h3>Informações adicionas</h3>

          <form className="formulario" action="">
            
            <div className="endereco-numero">
              <div className="endereco">
                <label>Logradouro:</label>
                <input type="text" name="endereco" id="endereco" />
              </div>

              <div className="numero">
                <label>Numero:</label>
                <input type="text" name="numero" id="numero" />
              </div>
            </div>

            <div className="cidade-bairo-uf">
              <div className="cidade">
                <label>Cidade</label>
                <input type="text" name="cidade" id="cidade" />
              </div>

              <div className="bairro">
                <label>Bairro</label>
                <input type="text" name="bairro" id="bairro" />
              </div>
              <div className="uf">
                <label>UF</label>
                <input type="text" name="uf" id="uf" />
              </div>
            </div>

            <div className="comple-cep">
              <div className="complemento">
                <label>Complemento</label>
                <input type="text" name="cidade" id="cidade" />
              </div>
              <div className="cep">
                <label>Cep</label>
                <input type="number" name="cep" id="cep" />
              </div>
            </div>
          </form>
        </section>
      </div>

       
       
    </main>
    
  );
}
