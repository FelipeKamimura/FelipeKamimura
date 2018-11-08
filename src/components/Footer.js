import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className= "mx-auto text-center">
            <span className="footer" > {this.props.nome}</span><br/>
            <span> {this.props.areas} </span><br/>
            <span> {this.props.tel} </span>
            </footer>
        );
    }
}