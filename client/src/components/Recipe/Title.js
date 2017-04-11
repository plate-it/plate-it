import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js'

export default class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleState: EditorState.createEmpty(),
      descriptionState: EditorState.createEmpty(),
    };

    this.titleChange = (state) => this.setState({titleState: state});
    this.descriptionChange = (state) => this.setState({descriptionState: state});
  }

  render () {
    return (
      <div>
        <Editor
          editorState={this.state.titleState}
          onChange={this.titleChange}
          placeholder={'Title'}
          spellCheck={true}
        />
        <Editor
          editorState={this.state.descriptionState}
          onChange={this.descriptionChange}
          placeholder={'Description'}
          spellCheck={true}
        />
      </div>
    )
    
  }
  
}