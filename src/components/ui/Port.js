import React from 'react';



export default class Port extends React.Component{

    render(){
        return(
            <div className="col-8 col-sm-4 text-center ">
                <div style={{width: '400', minHeight: '300px', margin: '50px'}}>
                        <img className="img-fluid imgmin" src={this.props.url}/>
                        <h3 className="card-title">{this.props.title}</h3>
                        <p className="card-text">{this.props.text}</p>
                </div>  
            </div>
        );
    }
}