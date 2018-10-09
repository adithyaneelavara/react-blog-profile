import React from 'react';
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
				<div className="modal"  style={this.state.toggle ? display :hide}>
				  <div className="modal-dialog" >
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Modal title</h5>
				        <button type="button" className="close" onClick={this.toggle} >
				          <span >&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>Modal body text goes here.</p>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-primary" onClick={this.toggle}>Save changes</button>
				        <button type="button" className="btn btn-secondary" onClick={this.toggle} >Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			);
		return (
				<div>
					<span className="btn btn-primary" onClick={this.toggle}>Login</span>
					{modal}
				</div>
			);
	}

}

export default Modal;