import React from 'react';
import ReactMDE from 'react-mde';

export default class BlogEditor extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      value: ""
     
    };
    this. changeValue=this.changeValue.bind(this);
  }

  changeValue(value){
  	this.setState({'value':value});
  }

	render(){
		return(<div></div>);
	}
}

