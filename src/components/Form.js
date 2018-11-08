import React, {Component} from 'react';
import './form.css';
import Botao from './ui/Botao';
import Redes from './ui/Redes';

export default class Home extends Component{
    
    render(){

        return(
            <section id="contact" className="bckImgContact responsive pdTopForm" >
                <div className="container " >
                <div className="row ">
                        <div className="col-sm">
                            <div className="myname text-center"><br/>CONTATO</div>
                        </div>
                    </div>
                    <div className="row pdbot">

                        <div className="col-md-6 col-xl-10 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="white-text">
                                            <i className="fa fa-user white-text"></i> Mande sua mensagem</h3>
                                        <hr className="hr-light"/>
                                    </div>
                                    
                                    <div className="md-form">
                                        <i className="fa prefix white-text active"></i>
                                        <input type="text" id="form3" className="white-text form-control"/>
                                        <label form="form3" className="active">Nome</label>
                                    </div>
                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix white-text active"></i>
                                        <input type="email" id="form2" className="white-text form-control"/>
                                        <label form="form2" className="active">Email</label>
                                    </div>
                                    <div className="md-form">
                                        <i className="fa prefix white-text active"></i>
                                        <input type="text" id="form3" className="white-text form-control"/>
                                        <label form="form3" className="active">Assunto</label>
                                    </div>
                                    <div className="md-form">
                                        <textarea className="form-control" rows="3"></textarea>
                                        <label form="exampleTextarea">Mensagem</label>
                                    </div>
                                    
                                    <div className="text-center mt-4">
                                        <Botao text="Enviar"/>
                                        <hr />
                                    <div className="inline-ul text-center d-flex justify-content-center"/>
                                        <span className="links"> Minhas Redes: <Redes /> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
        );
    }
}