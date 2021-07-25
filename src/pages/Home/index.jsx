import React from 'react'
import '../Home/stylo/stylo.scss'
import { MdExtension } from "react-icons/md";
import '../Home/stylo/response.scss'

export function Home(){
    return(
        <main className="container-main" >
             <section className="container-child">

                <div className="logo">
                    <span>
                    <MdExtension/>
                    </span>
               
                </div>

                  <div className="text">
                      <h2>sistema de gestão de cadastro</h2>  
                      <h3>Como pode ajudar o seu departamento pessoal?</h3> 
                  </div>
             </section>
        </main>
    )
}