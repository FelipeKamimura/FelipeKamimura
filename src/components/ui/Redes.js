import React, {Fragment} from 'react';

import Git from '../../assets/png/git.png';
import Email from '../../assets/png/email.png';

export default class Redes extends React.Component{

    render(){
        return(
            <Fragment>
            <a href="https://github.com/FelipeKamimura" target="_blank" className="h3"><img src={Git} width='20'/></a> 
            <a href="mailto:kamimurafe@gmail.com" target="_blank" className="h3"><img src={Email} width='20'/></a> 
            </Fragment>
        );
    }
}