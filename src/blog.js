import React from 'react'
import BlogPost from './blog-post'
import axios from 'axios';
const dataItems=[
	{
		"id":"abcd",
		"key":"abcd",
		"title":"My First Blog Post",
		"content":"Hello World!!!"
	},
	{
		"id":"abcde",
		"key":"abcde	",
		"title":"My First Blog Post",
		"content":"Hello World!!!"
	}
]
class Blog extends React.Component{
	constructor(props){
		super(props);
		this.state={
		posts:[]
	};

	};

	  createTable() {
    	let bloglist=[];
    	for(var i=0;i<this.state.posts.length;i++){
    		bloglist.push(<div><BlogPost id={this.state.posts[i].id} data={this.state.posts[i]}/></div>)
     	 }
	    return bloglist;
  };
    componentDidMount() {
    axios.get(`https://op62n4xpi0.execute-api.eu-west-1.amazonaws.com/DEV/?postId=*`)
      .then(res => {
        const posts = res.data.map(obj => obj);
        this.setState({ posts });
      });
  };
	render(){

		return (
		 <div>
          {this.createTable().map(function(listValue){
            return <div key={listValue.id}>{listValue}</div>;
          })}
        </div>);
	}

}

export default Blog;