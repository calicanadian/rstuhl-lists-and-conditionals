import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import CharCount from './Components/CharCount';

class App extends Component {
  state = {
    lowerCharLimit: 5,
    text: [
      { id: 'a', length: 0, message: '', validationMessage: 'Text too short' },
      { id: 'b', length: 0, message: '', validationMessage: 'Text too short' },
      { id: 'c', length: 0, message: '', validationMessage: 'Text too short' }
    ]
  };

  updateText = (event, textId) => {
    const textIndex = this.state.text.findIndex(t => {
      return t.id === textId;
    });
    const textMessage = {
      ...this.state.text[textIndex]
    };
    const text = [...this.state.text];
    const lowerCharLimit = this.state.lowerCharLimit;
    const charCount = event.target.value.length;
    const validationMessage = (charCount < lowerCharLimit) ? "Text too short" : "Text long enough";
    textMessage.validationMessage = validationMessage;
    textMessage.message = event.target.value;
    textMessage.length = charCount;
    text[textIndex] = textMessage;
    this.setState( {text: text} );
  };


  render() {
    const inlineStyle = {
      display: 'inline-block',
      padding: '6px',
      textAlign: 'center',
      margin: '16px'
    }
    let textMessages = null;
    textMessages = (
      <div>
        {
          this.state.text.map((text, index) => {
            return (
              <div key={text.id}>
                <input type='text' onChange={(event) => this.updateText(event, text.id)} />
                <Validation
                        output={text.validationMessage}
                        style={inlineStyle}
                        />
                <CharCount
                        length={text.length}
                        style={inlineStyle}
                        />
              </div>
            )
          })
        }
      </div>
    );

    return (
      <div className="App">
        {textMessages}
      </div>
    );
  }
}

export default App;
