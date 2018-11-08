import React, {Component} from 'react';
import NewCard from './ui/NewCard';

export default class Blog extends Component{
    New1 ={
        title: 'Está acontendo a Go Week, rocketseat',
        text: 'Uma semana para você descobrir o poder da melhor stack do mercado e levar sua carreira de programador para o próximo nível. Ícone NodeJS ...',
        action: () => alert('new1 Clicked') /*está sem efeito*/
    }

    New2 ={
        title: 'IA Identifica pessoas pela maneira como andam',
        text: 'Sistemas de câmera de segurança que utilizam algum tipo de inteligência artificial para identificar pessoas sempre foram polêmicos e...',
        action: () => alert('new2 Clicked') /*está sem efeito*/
    }

    New3 ={
        title: 'JavaScript dominates open source, Java is behind',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...',
        action: (e) => e.preventDefault()
    }
    render(){
        return(
            <section id="blog" className="pdtop d-flex" style={{backgroundColor: 'white'}}>
            <div className="container ">
                <div className="row ">
                        <div className="col-md">
                            <div className="myname text-center" style={{color: "#000"}}><br/>BLOG</div>
                        </div>
                    </div>
                <div className="row d-flex .flex-wrap"> 
                <NewCard {...this.New1}/>
                <NewCard {...this.New2}/>
                <NewCard {...this.New3}/>

                   
                </div>                    
            </div>
            </section>
        );
    }
}