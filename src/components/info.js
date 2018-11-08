import React from 'react';
import Post2 from './ui/Post2';
import './info.css';

import Git from './ui/Git';
const 
    infoc={
    title:'Bibliografia',
    texto: 'Nasci em Guarujá-Sp, Me formei como técnolo em Automação Industrial ao mesmo tempo que fazia um curso de Redes, ambos cursos me ensinaram como estudar e me disciplinar, ao me formar trabalhei por 3 anos em um escritório de administração que oferecia serviço para a Prefeitura de Guarujá, por estar acomodado e sem visão de crescimento, resolvi arriscar uma segunda gradução e cá estou',
  },
  prof={
    title:'Resenha com a profissão',
    texto: 'Sempre curti design, interface, ilustração mas um por bloqueio familiar e na época não ter discernimento de saber ponderar o que me diziam acabei indo para a automação industrial, fui infeliz, muito infeliz, lá ainda tinha um pouco de programação e as partes que mais gostava era quando podiamos montar as plantas industriais como interface no sistema supervisório, no SENAI também vi programação e uma breve introdução a Web, nunca parei de ler páginas de design, até que um dia deparei com o termo UX e daí surgiu uma paixão quase que platônica e decidi que era isso que eu queria me envolver, ainda como um pouco daquele bloqueio que criei inconcientemente fui para a eng. de software por ser uma área que seria mais abrangente que o Design em si, e olha só: acabei descobrindo que gosto muito do front-end, o problema é que não sobra tempo de aprender e aprofundar na ementa, mas espero voltar das férias me sentindo preparado para concorrer a qualque vaga de estágio na área.',
  };
export default class Info extends React.Component{
    render(){
        return(
            <section id="info" className="pdtop d-flex" style={{backgroundColor: 'white'}}>
            <div className="container ">
                <div className="row ">
                        <div className="col-md">
                            <div className="myname text-center" style={{color: "#000"}}><br/>MAIS INFORMAÇÕES</div>
                        </div>
                </div>
                <div className="row d-flex flex-wrap"> 
                <Post2 {...infoc}/>
                <Post2 {...prof}/>
                </div> 
                  <Git />                 
            </div>
            </section>

        );
    }

}