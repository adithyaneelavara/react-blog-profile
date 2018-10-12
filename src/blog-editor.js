import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class BlogEditor extends Component{
	constructor(props){
		super(props);
		this.state = {
    		editorState: EditorState.createEmpty(),
  		};
  		this.onEditorStateChange =this.onEditorStateChange.bind(this);
	}
  
onEditorStateChange(editorState){
	this.setState({
      editorState,
    });
}

  render() {
    const { editorState } = this.state;
    return (
      <div className="top-nav">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        
      </div>
    );
  }
}