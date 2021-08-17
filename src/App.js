import React from 'react';
import './App.css';
import WordGrid from './components/WordGrid';
import * as logic from './logic/logic';
import ShowWordList from './components/wordList';

export default class App extends React.Component { 
  constructor(props){
    super(props);
    this.words = ['SUNDAY', 'MONDAY', 'TUESDAY', 
                  'WEDNESDAY', 'THURSDAY', 'FRIDAY','SATURDAY'];
      
  
    this.wordGrid = [
      ['A', 'A', 'R', 'T', 'U', 'E', 'S', 'D', 'A', 'Y'],
      ['E', 'F', 'D', 'L', 'Y', 'T', 'S', 'I', 'H', 'W'],
      ['E', 'R', 'Z', 'F', 'T', 'T', 'B', 'D', 'G', 'E'],
      ['A', 'I', 'U', 'F', 'U', 'H', 'Q', 'T', 'E', 'D'],
      ['T', 'D', 'E', 'S', 'I', 'U', 'W', 'V', 'I', 'N'],
      ['W', 'A', 'A', 'T', 'U', 'R', 'D', 'A', 'Y', 'E'],
      ['H', 'Y', 'N', 'M', 'H', 'S', 'B', 'F', 'S', 'S'],
      ['K', 'V', 'M', 'O', 'N', 'D', 'A', 'Y', 'E', 'D'],
      ['P', 'B', 'N', 'W', 'K', 'A', 'N', 'Q', 'Z', 'A'],
      ['S', 'U', 'N', 'D', 'A', 'Y', 'U', 'Q', 'S', 'Y']
    ];
  
    this.state ={
      highlightedChars: {
        
      },
  };
  this.handleClick= this.handleClick.bind(this);
}
handleClick(rowIndex, colIndex, val){
  const newHighlightedChars = this.cloneObject(this.state.highlightedChars);
  let charIndex = "r" + rowIndex + "-c" + colIndex;
  if (newHighlightedChars.hasOwnProperty(charIndex)) {
  delete newHighlightedChars[charIndex];
  } else {
  newHighlightedChars[charIndex] = true;
  }
  console.log(rowIndex);
  console.log(newHighlightedChars);
  this.setState({
  highlightedChars: newHighlightedChars,
  })
  }

  cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
  
  }
  
  render() {
    return (
      <div id="main-container">
                <div className="centered">
                    <h1><strong>LautMalerei</strong></h1>
                        <p><strong>Hi and welcome to LautMalerei.Today we get to challenge your speed
                        in recognising and finding the given words in record time. Ideally you will be given 
                        5 minutes to find all 7 words.
                        The words to be found will be horinzontal and/or vertical.
                        after each word is found please check the box next to the words
                        good luck!!!!hope you have fun :)   </strong>
                        </p>
                </div>
                <div id="left">
                   <WordGrid grid={this.wordGrid} highlightedChars={this.state.highlightedChars} onCellClick={this.handleClick}/>
                      <br/>
                </div> 
                <div  id="right">
                    <ShowWordList wordList={this.words}  foundWordList={logic.getWordsFound(this.state.highlightedChars,this.words,this.wordGrid)}/>
                        
                </div>
                <div className="clear">
                   <p>hi how are you doing today?</p>         
                </div>
            </div>
    )};
}
