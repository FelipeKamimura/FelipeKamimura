import React from 'react';

import Git from '../../assets/png/git.png';

export default class Port extends React.Component{

    render(){
        return(
            <a href="https://github.com/FelipeKamimura" target="_blank" className="h3" rel="noopener noreferrer">Acesse meu github <img src={Git} width='15'alt=""/></a> 
        );
    }
}