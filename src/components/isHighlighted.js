import React from 'react';

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHighlighted:false
        };
};


class Grid extends React.Component {
    constructor(props){
        super(props);

    }
    renderCell(i){
        return <Cell />;
    }
    handleClick(rowIndex, colIndex)
    render(){
        const status = ' you have # words left';
         
        const board = [];

        
        this.props.value.forEach(Element => {
            let words=[];
            for (let i = 0; i < Element.length; i++){
                wordlist.push(<Cell value={element[i]} onCellClick={this.handleClick} />,
                
                
                board.push(<div className="board-row">{wordlist}</div>)
        )};
            return(
                <div>
                    <div className="status">{status}</div>
                </div>
            
            )};
        }
    }




