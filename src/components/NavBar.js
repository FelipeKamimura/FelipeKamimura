import React, {Fragment} from 'react';
/*Não precisa extender components pois não vai ter estado para alterar*/ 
const NavBar = (props) => {
    return (
        <Fragment>
            <nav id="navId" className="navbar navbar-expand-lg navbar-dark bg-dark p-0 px-5 d-flex justify-content-between fixed-top" style={{  position: 'sticky', top: '0'}}>
              <a className="navbar-brand  w-100" href="#navId">
                <img src={props.logo} width="200"  className="d-inline-block align-top img-fluid" alt="Felipe Kamimura" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse p-2 flex-shrink-1" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skill">Habilidades</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#port">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#info">Informações</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contato</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="progress bg-black" style={{height: '7px'}}>
              <div className="progress-bar bg-black bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress"style={{height: '7px'}}>
              <div className="progress-bar bg-info" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress"style={{height: '7px'}}>
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress"style={{height: '7px'}}>
              <div className="progress-bar" role="progressbar" style={{width: '100%', backgroundColor: '#F25797'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="w-2"></div>
            <div className="progress" style={{height: '7px'}}>
              <div className="progress-bar" role="progressbar" style={{width: '100%', backgroundColor: 'black'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                    </Fragment>
                );
            };

            export default NavBar;
