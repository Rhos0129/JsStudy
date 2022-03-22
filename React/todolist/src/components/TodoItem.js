import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : props.todo
        }
    }

    render(){
        return(
            <Container>
                <Todo disabled={true} onChange={this.onChange} value={this.state.todo} onKeyPress={this.startModify}></Todo>
                <Btn onClick={(e) => 
                    this.activateInput(e.target.parentNode.parentNode.firstChild)}>
                        <i className="bi bi-pencil-square"></i>
                </Btn>
                <Btn onClick={() => 
                    this.props.remove(this.props.idx)}>
                        <i className="bi bi-trash"></i>
                </Btn>                
            </Container>
        )
    }

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    activateInput(target){
        target.removeAttribute('disabled');
        target.focus()
    }

    startModify = (e) => {
        if(e.key === "Enter"){
            this.props.modify(this.props.idx, e.target.value);
            e.target.setAttribute('disabled', true);
        }
    }
}

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

const Btn = styled.button`
    background-color: white;
    border: none;
    color: var(--Orange);
    width: 6%;
    padding: 5px;
`;

const Todo = styled.input`
    &:focus {
        outline: none;
        color: var(--Orange);
        font-size: large;
    }
    border-style: none;
    background-color: white;
    color: black;
    padding: 5px;
    width: 88%;
`;

export default TodoItem;