import React from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

export default class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleState: EditorState.createEmpty(),
      descriptionState: EditorState.createEmpty(),
    };

    this.titleChange = (state) => {
      this.setState({titleState: state});
      console.log(state);
      console.log(convertToRaw(this.state.titleState.getCurrentContent()));
    }
    this.descriptionChange = (state) => {
      this.setState({descriptionState: state});
      console.log(state);
      console.log(convertToRaw(this.state.descriptionState.getCurrentContent()));
    }
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