import React from 'react';

export default class Post2 extends React.Component{

    render(){
        return(
            <div className="groupTexto" >
                <h3><u>{this.props.title}</u></h3>
                <h6>{this.props.texto}</h6>
            </div>
        );
    }
}