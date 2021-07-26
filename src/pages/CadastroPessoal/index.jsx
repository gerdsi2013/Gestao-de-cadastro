import React, { useState } from "react";
import "../CadastroPessoal/stylo/cadastro.scss";
import "../CadastroProduto/stylo/produto.scss";
import '../CadastroPessoal/stylo/response.scss'

export function CadastroPessoal() {
  const [nome, setnome] = useState("");
  const [cpf, setcpf] = useState("");
  const [data, setdata] = useState("");
  const [telefone, settelefone] = useState("");
  const [email, setemail] = useState("");
  const [endereco, setendereco] = useState("");
  const [numero, setnumero] = useState("");
  const [cidade, setcidade] = useState("");
  const [bairro, setbairro] = useState("");
  const [uf, setuf] = useState("");
  const [cep, setcep] = useState("");

  const handlebtn = () => {
    localStorage.setItem("Nome:", nome);
    localStorage.setItem("Cpf:", cpf);
    localStorage.setItem("Data:", data);
    localStorage.setItem("Telefone:", telefone);
    localStorage.setItem("Email:", email);
    localStorage.setItem("Endereço:", endereco);
    localStorage.setItem("Numero:", numero);
    localStorage.setItem("Cidade:", cidade);
    localStorage.setItem("Bairro:", bairro);
    localStorage.setItem("Uf:", uf);
    localStorage.setItem("Cep:", cep);
  };

  return (
    <main className="container">
      <h2>Cadastro de clientes</h2>

      <div className="division">
        <section className="inf-pessoal">
          <h3>Informações Pessoais</h3>

          <form className="formulario" action="">
            <div className="form-nome">
              <label>Nome Completo</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setnome(e.target.value)}
              />
            </div>

            <div className="form-cpf-email">
              <div>
                <label>Cpf:</label>
                <input
                  type="number"
                  name="cpf"
                  id="cpf"
                  placeholder="xxx.xxx.xxx-xx"
                  value={cpf}
                  onChange={(e) => setcpf(e.target.value)}
                />
              </div>
              <div>
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  name="data"
                  id="data"
                  value={data}
                  onChange={(e) => setdata(e.target.value)}
                />
              </div>
              <div>
                <label>Contato</label>
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  value={telefone}
                  placeholder="(xx)xxxxx-xxxx"
                  onChange={(e) => settelefone(e.target.value)}
                />
              </div>

              <div className="email">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exemplo@exmplo.com"
                  value={email}
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>
          </form>
        </section>

        <section className="inf-adiconais">
          <h3>Informações adicionas</h3>

          <form className="formulario" action="">
            <div className="endereco-numero">
              <div>
                <label>Logradouro:</label>
                <input
                  type="text"
                  name="endereco"
                  id="endereco"
                  placeholder="Rua"
                  value={endereco}
                  onChange={(e) => setendereco(e.target.value)}
                />
              </div>

              <div>
                <label>Numero:</label>
                <input
                  type="text"
                  name="numero"
                  id="numero"
                  placeholder="xx"
                  value={numero}
                  onChange={(e) => setnumero(e.target.value)}
                />
              </div>
            </div>

            <div className="cidade-bairo-uf">
              <div>
                <label>Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setcidade(e.target.value)}
                />
              </div>

              <div>
                <label>Bairro</label>
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  placeholder="Bairro"
                  value={bairro}
                  onChange={(e) => setbairro(e.target.value)}
                />
              </div>
              <div className="uf">
                <label>Uf</label>
                <input
                  type="text"
                  name="uf"
                  id="uf"
                  placeholder="uf"
                  value={uf}
                  onChange={(e) => setuf(e.target.value)}
                />
              </div>
            </div>

            <div className="comple-cep">
              <div>
                <label>Complemento</label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="XX.xxx-xx"
                  value={cidade}
                  onChange={(e) => setcidade(e.target.value)}
                />
              </div>
              <div>
                <label>Cep</label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  required pattern="[0-9]"
                  value={cep}
                  onChange={(e) => setcep(e.target.value)}
                />
              </div>
            </div>
            <button className="btn" onClick={handlebtn}>
              Enviar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
