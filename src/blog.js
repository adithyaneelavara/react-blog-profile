import React from 'react'
import BlogPost from './blog-post'
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

	  createTable() {
    	let bloglist=[];
    	for(var i=0;i<dataItems.length;i++){
    		bloglist.push(<div><BlogPost id={dataItems[i].id} data={dataItems[i]}/></div>)
     	 }
	    return bloglist;
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