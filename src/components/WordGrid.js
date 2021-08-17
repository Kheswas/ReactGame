import React from 'react';
import './WordGrid.css';
import GridItem from './GridItem';
import ShowWordList from './wordList';

import {Container, Row, Col } from 'react-grid-system';// this.props.grid //


export default class WordGrid extends React.Component {
    gridItemIsSelected(rows,cols){
        let charIndex= "r" + rows + "-c" + cols;
        return this.props.highlightedChars.hasOwnProperty(charIndex);
        
        

    }
    render() {
        const malerei = [];
        let rows = 0;
        this.props.grid.forEach(element => {
            let wordList = [];
            
            for (let i = 0; i < element.length; i++){
               wordList.push(<GridItem onCellClick={this.props.onCellClick} letter={element[i]} isSelected={this.gridItemIsSelected(rows, i)} rowIndex={rows} colIndex={i}/>)
            };
            malerei.push(<div className="grid-container">{wordList}</div>)
         
            rows++;
        });

        

        
        return (
            <div className="centered">  
                {malerei}
                <div className="clear"></div>
            </div>
                   
        );
    }
};