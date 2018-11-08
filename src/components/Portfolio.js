import React from 'react';

import Port from './ui/Port';
import Port1 from '../assets/photos/port1.PNG';
import Port2 from '../assets/photos/port2.PNG';
import Port3 from '../assets/photos/port3.png';

const 
    P1= {
        
        title: 'Reprodução de Site',
        text: 'Html / Css'
    },
    P2={
        
        title: 'Exercício Gulp',
        text: 'Html / Css / npm / Gulp'
    },

    P3= {
        
        title: 'Conscientização MKT - Unect',
        text: 'Photoshop'
    };

export default class Portfolio extends React.Component{
    render(){
        return(

            <section id="port" className="pdtop">
            <div className="myname text-center"><br/>PORTIFOLIO</div>
            <div className="jumbotron row d-flex ">
                <div className="row text-center">
                
                </div>
                <div className="row">
                <Port {...P1} url={Port1}/>
                <Port {...P2} url={Port2}/>
                <Port {...P3} url={Port3}/>
                </div>
            </div>
            </section>

        );
    }

}