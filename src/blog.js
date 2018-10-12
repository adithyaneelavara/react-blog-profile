import React from 'react'
import BlogPost from './blog-post'
import axios from 'axios';
class Blog extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                posts: []
            };

        };

        createTable() {
            let bloglist = [];
            for (var i = 0; i < this.state.posts.length; i++) {
                bloglist.push( <div key={this.state.posts[i].id}>  <BlogPost key={this.state.posts[i].id} id = {this.state.posts[i].id}
                    data = {this.state.posts[i]}/></div > )
            }
            return bloglist;
        };
        componentDidMount() {
            axios.get(`https://api.adithyaneelavara.info/v1/?postId=*`)
                .then(res => {
                    const posts = res.data.map(obj => obj);
                    posts.sort((a, b) => (a.sortOrder < b.sortOrder) ? 1 : ((b.sortOrder < a.sortOrder) ? -1 : 0));
                    this.setState({
                        posts
                    });
                });
        };
        render() {

            return ( <div  key="blog"> {
                    this.createTable().map(function(listValue) {
                        return <div key={listValue.key}>
                         {listValue} 
                         < /div>;
                    })
                } </div>);
            }

        }

        export default Blog;