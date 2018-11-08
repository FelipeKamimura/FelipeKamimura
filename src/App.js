import React, {Fragment} from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About1 from './components/About';
import Skill from './components/Skill';
import Blog from './components/Blog';
import Info from './components/info';
import Port from './components/Portfolio';

import Form from './components/Form';
import Footer from './components/Footer';

import Logo from './assets/svg/logo.svg';
import Profile from './assets/photos/avatar.jpg';



import cv from './assets/documents/FelipeKamimura_cv.pdf'

const dados={
    home: {
        nome: "FELIPE KAMIMURA",
        sobre:  'Oi, eu sou Felipe Kamimura. Natural de Guarujá-SP, atualmente no 6º Período (de 8) de Engenharia Software na UTFPR em Cornélio Procópio(PR). Em busca de estágio em que possa me envolver na área de ux, design digital e front-end.'
    },
    footer:{
        nome: "Felipe Kamimura",
        areas: "Ux/Ui, Front-end, Web, Mobile",
        tel: '+xx (xxx) xxx xxx xxx',
    },

};


export default class App extends React.Component{
    render(){
        /*const logo ='FelipeTeste'*/
        return (
           <Fragment>
               <NavBar logo={Logo} />
               <Home {...dados.home} avatar={Profile} cv={cv}/>
               <About1/>
               <Skill />
               <Blog />
               <Port/>
               <Info />
               <Form />
               <Footer {...dados.footer}/>
               
                
            </Fragment>
        );
    
    }
}