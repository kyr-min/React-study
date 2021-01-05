import React, { Component } from 'react'
import ColorBox from './ColorBox'
import TextBox from './TextBox'

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            texts: [],
            color: 'red'
        }
    }
    
    onButtonClick = (text) => {
        this.setState({
            ...this.state,
            texts: [...this.state.texts, {color: this.state.color, text: text}]
        })
    }

    onColorChange = (color) => {
        this.setState({
            ...this.state,
            color: color
        })
    }
    
    render() {
        return (
            <div>
                <ColorBox color="red" onColorChange={this.onColorChange}/>
                <ColorBox color="blue" onColorChange={this.onColorChange}/>
                <ColorBox color="green" onColorChange={this.onColorChange}/>


                <TextBox color={this.state.color} onButtonClick={this.onButtonClick}/> 
                <div>
                    { this.state.texts.map((text, index) => {
                        return <div key={index} style={{color: text.color}}>
                            {text.text}
                        </div>
                    })}
                </div>
            </div>
        )
    }
};

export default Container;