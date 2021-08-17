import React from 'react';


export default class GridItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);

    }
    handleClick(e) { 
        console.log("im real" );
       
       this.props.onCellClick(this.props.rowIndex,this.props.colIndex); 
    }
    getClasses = () => {
        let classes = ['grid-item'];
        if (this.props.isSelected) classes.push('selectedGrid');
        
        return classes.join(' ');
    }
    render() {
        return( <div className={this.getClasses()} onClick={this.handleClick}>
            {this.props.letter}
                    
              
                    

                </div>
        )

    }

};


