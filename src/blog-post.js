import React from 'react';

class BlogPost extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state={
			id:this.props.id,
			data:this.props.data,
			title:this.props.data.title,
			content:this.props.data.content
		};
		console.log(this.state);

	}
	render(){
		return (
			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id={this.state.id}>
				<div className="my-auto">
					<h2 className="mb-5">{this.state.title}</h2>
					<div className="resume-content mr-auto">
						 <div>{this.state.content}</div>
					</div>
				</div>	
			</section>
		)	;
	}
};

export default BlogPost;