import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js'

export default class Instructions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onChange = (state) => this.setState({editorState: state});
  }

  render () {
    return (
      <div>
        <p>Instructions</p>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          spellCheck={true}
        />
      </div>
    )
    
  }
  
}