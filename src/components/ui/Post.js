import React from 'react';

export default class Post extends React.Component{

    render(){
        return(
            <div className="groupDados" >
                <h5><u>{this.props.title}</u></h5>
                <h6>{this.props.instituicao}<br/>
                {this.props.local}<br/>
                {this.props.data}</h6>
            </div>
        );
    }
}