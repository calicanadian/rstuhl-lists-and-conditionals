import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';

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
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid #000'
    }
    let textMessages = null;
    textMessages = (
      <div>
        {
          this.state.text.map((text, index) => {
            return <Validation
                      length={text.length}
                      key={text.id}
                      output={text.validationMessage}
                      change={(event) => this.updateText(event, text.id)}
                      style={inlineStyle}
                      />
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
