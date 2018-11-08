import React from 'react';

export default class Botao extends React.Component{
    handleClick(event){
        event.preventDefault();
        /*this.props.action();*/
    }
    render(){
        return(
                <div className="btn btn-primary" onClick={this.handleClick.bind(this)}>{this.props.text}</div>
                
        );
    }
}