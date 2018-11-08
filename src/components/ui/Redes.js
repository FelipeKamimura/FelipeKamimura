import React, {Fragment} from 'react';

import Git from '../../assets/png/git.png';
import Email from '../../assets/png/email.png';

const Redes = () => {
    return (
        
            <Fragment>
            <a href="https://github.com/FelipeKamimura" target="_blank" className="h3" rel="noopener noreferrer" ><img src={Git} width='20' alt=""/></a> 
            <a href="mailto:kamimurafe@gmail.com" target="_blank" className="h3" rel="noopener noreferrer" ><img src={Email} width='20' alt=""/></a> 
            </Fragment>
    );
  }

export default Redes;
