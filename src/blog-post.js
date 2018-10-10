import React from 'react';
import DOMPurify from 'dompurify'

class BlogPost extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state={
			id:this.props.id,
			data:this.props.data,
			title:this.props.data.title,
			published:this.props.data.published,
			tags:this.props.data.tags,
			content:this.props.data.content
		};
		console.log(this.state	);

	}
	render(){
		return (
			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id={this.state.id} key={this.state.id}>
				<div className="my-auto">
					<h2 >{this.state.title}</h2>
					<div className="mb-5">
						<div>{this.state.tags}</div><div className="text-right"> {this.state.published}</div>
					</div>
					<div className="resume-content mr-auto">
						 <div className="resume-content mr-auto" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.content)}}></div>
					</div>
				</div>	
			</section>
		)	;
	}
};

export default BlogPost;