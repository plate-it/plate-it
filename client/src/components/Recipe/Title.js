import React from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

export default class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleState: EditorState.createEmpty(),
      descriptionState: EditorState.createEmpty(),
    };
    this.preparePayload = this.preparePayload.bind(this);
  }

  titleChange (state) {
    this.setState({titleState: state});
    console.log(this.state.titleState);
  }

  descriptionChange (state) {
    this.setState({descriptionState: state});
  }

  postPayload (payload) {
    const init = {
      method: 'POST',
      body: payload,
    };

    fetch('http://localhost:3000/api/recipes', init);
  }

  preparePayload () {
    const payload = convertToRaw(this.state.titleState.getCurrentContent());

    this.postPayload(payload);
  }

  render () {
    return (
      <div>
        <button
          onClick={this.preparePayload}
        >Send Title</button>
        <Editor
          editorState={this.state.titleState}
          onChange={(state) => this.titleChange(state)}
          placeholder={'Title'}
          spellCheck={true}
        />
        <Editor
          editorState={this.state.descriptionState}
          onChange={(state) => this.descriptionChange(state)}
          placeholder={'Description'}
          spellCheck={true}
        />
      </div>
    )
    
  }
  
}