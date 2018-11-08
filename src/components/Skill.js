import React, {Component} from 'react';
import './skill.css';

export default class Home extends Component{

    state = {
        skillProgramming:['html', 'css', 'ReactJs', 'Sass', 'Gulp', 'Bootstrap', 'C', 'Java', 'C++', 'Delphi'],
        skillGraphics:['Adobre Creative Suite', 'Photoshop', 'Illustrator', 'Lightroom', 'Adobe Xd', 'Premiere'],
        skillOffice:['Excel', 'Word', 'PowerPoint' , 'Acces', 'Ms Project', 'MsVisio'],
        skillOther:['Mockup', 'Wireframe', 'Prototipação', 'Versionamento', 'git','redes', 'Configuração de Roteadores (Cisco)', 'banco de dados', 'métodos ageis' ]  
      }
    
        render(){
        return(
            <section id="skill" className="bckImgSkill d-flex pdtopSkills" >
                <div className="container">
                    <div className="row ">
                        <div className="col-sm">
                            <div className="myname text-center"><br/>SKILLS</div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm">
                            {this.state.skillGraphics.map(
                                (item, index) => {
                                    return <h3 className="badge badge-light m-2 fontBadge" key={index}>#{item}</h3>
                                }
                            )}
                            {this.state.skillProgramming.map(
                                (item, index) => {
                                    return <h3 className="badge badge-light m-2 fontBadge" key={index}>#{item}</h3>
                                }
                            )}
                            {this.state.skillOffice.map(
                                (item, index) => {
                                    return <h3 className="badge badge-light m-2 fontBadge" key={index}>#{item}</h3>
                                }
                            )}
                            {this.state.skillOther.map(
                                (item, index) => {
                                    return <h3 className="badge badge-light m-2 fontBadge" key={index}>#{item}</h3>
                                }
                            )}
                        </div>
                    </div>        
                </div>
            </section>
        );
    }
}