import React, {Component} from 'react';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import './about.css';


import ListItem from './ui/ListItem';
import Post from './ui/Post';

/*estilo para o carrosel*/ 

const styles = {height: 400, width: "100%" }, 
      interesses= ['Ux', 'Ui', 'Front-end', 'Web'],
      idiomas= ['Português: Nativo', 'Inglês: Avançado', 'Japonês: Básico'],
      
      form1={
        title:'Bacharelado em Engenharia de Software',
        instituicao: 'UTFPR - Universidade Federal do Paraná',
        local:'Cornélio Procópio - PR',
        data:'Cursando - Ingresso em 2016/1, previsão 2019/2'
      },
      form2={
        title:'Técnico em Redes de Computadores',
        instituicao: "SENAI - 'Antônio Souza Noschese'",
        local:'Santos - SP',
        data:'Conclusão em 2012/2 - Ingresso em 2011/1'
      },

      atv1={
        title:'Assistente de Marketing Digital',
        instituicao: 'UTFPR - Universidade Federal do Paraná',
        local:'Cornélio Procópio - PR',
        data:'Ingresso em maio/2018 - ainda efetivo'
      },
      atv2={
        title:'Integrante do Corpo Administrativo - DACOMP',
        instituicao: 'Diretorio Acadêmico de Computação',
        local:'UTFPR Cornélio Procópio - PR',
        data:'Ingresso em 2018/1 - ainda efetivo'
      },
      atv3={
        title:'Monitor da Disciplina de Algoritmos',
        instituicao: 'UTFPR - Universidade Federal do Paraná',
        local:'Cornélio Procópio - PR',
        data:'Duração: 1 semestre (2018/1)'
      }
  
      ;     

export default class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false
    };
  }

  /*Operação dos botoes do carrosel, bootstrap*/
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide0 = () => {
    this.slider.goToSlide(0);
  };
  goToSlide1 = () => {
    this.slider.goToSlide(1);
  };
  goToSlide2 = () => {
    this.slider.goToSlide(2);
  };

 /*State com interesses*/ 
  state = { 
       
  };

  render() {

    
    let { leftIcon, rightIcon } = this.state;
    return (
        <section id="about" className="container-fluid pdtopAbout" style={{backgroundColor: 'white'}}>
        <Row>
          <Col  span={12} style={{ paddingTop: "20px" }}>
            <div className="btn-group">
              <Button bsStyle="primary" onClick={this.goToSlide0}>
                Interesses
              </Button>
              <Button bsStyle="primary" onClick={this.goToSlide1}>
                Formação
              </Button>
              <Button bsStyle="primary" onClick={this.goToSlide2}>
                Atividades
              </Button>
            </div>
          </Col>

          <Col span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
            {/*<!--sobre-->*/} 
            <div className="bg-dark" >
                <div className="jumbotron d-flex bg-dark row justify-content-around bckImgAbout" style={{ minHeight: 650 }}>
                    <div className="sobre op1">
                      <div className="h2 text-center"><br/>INTERESSES</div>
                      <hr />
                        <h6><ListItem items={interesses}/></h6>
                    </div>
                    <div className="sobre op1">
                        <div className="h2 text-center"><br/>IDIOMAS</div>
                        <hr />
                        <h6><ListItem items={idiomas}/></h6>
                    </div>
                    <div className="carousel-caption">Sobre</div>
                </div>
              </div>

               {/*<!--Formação-->*/} 
            <div className="bg-dark" style={{ minHeight: 600 }}>
                <div className="jumbotron d-flex bg-dark row justify-content-around bckImgCollege">
                    <div className="sobre op2">
                      <div className="h2 text-center"><br/>FORMAÇÃO</div>
                      <hr />
                        <Post {...form1}/>
                        <Post {...form2}/>
                    </div>
                    <div className="carousel-caption">Formação</div>
                </div>
              </div>

                 {/*<!--Atividades-->*/} 
                   <div className="bg-dark" style={{ minHeight: 600 }}>
                    <div className="jumbotron d-flex bg-dark row justify-content-around bckImgActivity">
                    <div className="sobre op2">
                      <div className="h2 text-center"><br/>ATIVIDADES</div>
                      <hr />
                        <Post {...atv1}/>
                        <Post {...atv2}/>
                        <Post {...atv3}/>
                    </div>
                    <div className="carousel-caption">Atividades</div>
                </div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </section>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};