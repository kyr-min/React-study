import React, { Component } from 'react' 

class TextBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onButtonClick = () => {
        this.setState({text: ''});
        this.props.onButtonClick(this.state.text);
    }
    

    render(){
        return (
            <div>
                <textarea onChange={this.textChange} style={{color: this.props.color}} value={this.state.text}/>
                <button onClick={this.onButtonClick}>추가</button>
            </div>
        )   
    }
};

export default TextBox;