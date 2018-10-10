import React from 'react';
import Login from './login';
const display ={
	display:'block'
};

const hide={
	display:'none'
};

class Modal extends React.Component{

	constructor(props){
		super(props);
		this.toggle =this.toggle.bind(this);

		this.state={
			toggle:false
		}
	}

	toggle(event){
		console.log(event);
		this.setState(prevState=>({toggle:!prevState.toggle}));
	}

	render(){
		var modal =[];
		modal.push(
				<div key="loginModal" className="modal"  style={this.state.toggle ? display :hide}>
				  <div className="modal-dialog" >
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Login</h5>
				        <button type="button" className="close" onClick={this.toggle} >
				          <span >&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				       <Login />
				      </div>
				    </div>
				  </div>
				</div>
			);
		return (
				<div id="modal-sub">
					<span className="btn btn-primary" onClick={this.toggle}>Login</span>
					{modal}
				</div>
			);
	}

}

export default Modal;