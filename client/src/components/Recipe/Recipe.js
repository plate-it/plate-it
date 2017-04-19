import React, { Component } from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

export default class Recipe extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titleState: EditorState.createEmpty(),
      descriptionState: EditorState.createEmpty(),
      ingredientState: EditorState.createEmpty(),
      instructionState: EditorState.createEmpty(),
    };
    this.preparePayload = this.preparePayload.bind(this);
  }

  titleChange (state) {
    this.setState({titleState: state});
  }

  descriptionChange (state) {
    this.setState({descriptionState: state});
  }

  ingredientChange (state) {
    this.setState({ingredientState: state});
  }

  instructionChange (state) {
    this.setState({instructionState: state});
  }

  postPayload (payload) {
    const init = {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type' : 'application/json',
      },
    };

    fetch('http://localhost:3000/api/recipes', init);
  }

  preparePayload () {
    const recipeComponents = {
      title : convertToRaw(this.state.titleState.getCurrentContent()),
      description : convertToRaw(this.state.descriptionState.getCurrentContent()),
      ingredients : convertToRaw(this.state.ingredientState.getCurrentContent()),
      instruction : convertToRaw(this.state.instructionState.getCurrentContent()),
    };

    console.log(recipeComponents);

    const payload = JSON.stringify(recipeComponents);

    this.postPayload(payload);
  }

  render () {
    return (
      <div>
        Create your recipe
        <button
          onClick={this.preparePayload}
        >Send Recipe</button>
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
        <p>Ingredients</p>
        <Editor
          editorState={this.state.ingredientState}
          onChange={(state) => this.ingredientChange(state)}
          spellCheck={true}
        />
        <p>Instructions</p>
        <Editor
          editorState={this.state.instructionState}
          onChange={(state) => this.instructionChange(state)}
          spellCheck={true}
        />
      </div>
    )
  }

}