import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { withAuthenticator } from 'aws-amplify-react';
 class BlogEditor extends Component{
	constructor(props){
		super(props);
		this.state = {
    		editorState: EditorState.createEmpty(),
    		title:'',
        editorContent:''
  		};
  		this.onEditorStateChange =this.onEditorStateChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
	}
  
onEditorStateChange(editorState){
	this.setState({
      editorState:editorState,
      editorContent:draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });

}
handleChange(event) {
    this.setState({
        [event.target.id]: event.target.value
    });
}

handleSubmit() {
    console.log(this.state);
    let headers={
      "REACT_APP":this.props.childProps.idToken.jwtToken
    };
    axios.post('https://api.adithyaneelavara.info/v2/PutPosts', {
            "title": this.state.title,
            "text": this.state.editorContent
        },{"headers":headers})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};
  render() {
    const { editorState } = this.state;
    return (
      
      <form onSubmit={this.handleSubmit}>
      <div className="top-nav col-md-6">
        <ControlLabel>Title</ControlLabel>
       <FormControl
              autoFocus
              type="text"
              id="title"
               onChange={this.handleChange}
            />
             <ControlLabel>Post</ControlLabel>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        </div>
        <div className="col-md-3 text-right">
        <Button
            block
            bsSize="large"
            
            type="submit"
            className="btn btn-primary"
          >Publish</Button>
              </div>
        </form>
  
    );
  }
}

export default withAuthenticator(BlogEditor);
