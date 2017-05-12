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

    fetch('http://localhost:3000/api/recipes', init)
      .then((response) => console.log(`Recipe response ok? ${response.ok}`))
      .catch((error) => console.log(error));
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
      <div
        className='wrapper height'
      >
        <div
          className='recipe-banner'
        >
          <h2
            className=''
          >Create your recipe
          </h2>
          <button
            className='button full'
            onClick={this.preparePayload}
          >Save Recipe
          </button>
        </div>
        <div
          className='height'
        >
          <div
            className='header title-header'
          >
            <Editor
              editorState={this.state.titleState}
              onChange={(state) => this.titleChange(state)}
              placeholder={'Title, like \'Chocolate Chip Cookies\''}
              spellCheck={true}
            />
          </div>
          <div
            className='header description-header'
          >
            <Editor
              editorState={this.state.descriptionState}
              onChange={(state) => this.descriptionChange(state)}
              placeholder={'Description of your recipe'}
              spellCheck={true}
            />
          </div>
          <div
            className='ingredients-instructions-container height'
          >
            <aside
              id='ingredients'
            >
              <h3
                className='subtitle3'
              >Ingredients</h3>
              <Editor
                editorState={this.state.ingredientState}
                onChange={(state) => this.ingredientChange(state)}
                spellCheck={true}
              />
            </aside>
            <div
              id='instructions'
              
            >
              <h3
                className='subtitle3'
              >Instructions</h3>
              <Editor
                editorState={this.state.instructionState}
                onChange={(state) => this.instructionChange(state)}
                spellCheck={true}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}