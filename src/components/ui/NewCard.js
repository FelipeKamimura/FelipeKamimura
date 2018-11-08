import React from 'react';

import Botao from './Botao';

export default class NewCard extends React.Component{
    handleClick(event){
        event.preventDefault();
        /*this.props.action;*/
    }
    render(){
        return(
            <div className="col-8 col-sm-4 text-center ">
                <div className="card" style={{width: '400', minHeight: '300px'}}>
                    <div className="card-body bg-dark">
                        <h2 className="card-title">{this.props.title}</h2>
                        <p className="card-text">{this.props.text}</p>
                        <Botao text="Leia mais"/>
                    </div>
                </div>  
            </div>
        );
    }
}