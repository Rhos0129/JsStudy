import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"

class TodoItem extends Component{
    shouldComponentUpdate(newProps, newState){
        if(this.props.todo.txt !== newProps.todo.txt){
            this.setState({
                txt: newProps.todo.txt,
                checked: newProps.todo.checked
            })
            return false
        } 
        return true
    }

    constructor(props){
        super(props);
        this.state = {
            txt: props.todo.txt,
            checked: props.todo.checked
        }
    }

    render(){
        return(
            <Container>
                <CheckBox type="checkbox" onChange={this.onChangeChecked} checked={this.state.checked}></CheckBox>
                <Todo disabled={true} onChange={this.onChangeTxt} value={this.state.txt} onKeyPress={this.startModify}></Todo>
                <Btn onClick={(e) => 
                    this.activateInput(e.target.parentNode.previousSibling)
                }>
                        <i className="bi bi-pencil-square"></i>
                </Btn>
                <Btn onClick={() => 
                    this.props.remove(this.props.idx)
                }>
                        <i className="bi bi-trash"></i>
                </Btn>                
            </Container>
        )
    }
    
    onChangeTxt = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    
    onChangeChecked = (e) => {
        this.setState({
            checked: e.target.checked
        });
        this.props.modify(this.props.idx, {txt: this.state.txt, checked: e.target.checked});
    }
    
    activateInput(target){
        target.removeAttribute('disabled');
        target.focus();
    }
    
    startModify = (e) => {
        if(e.key === "Enter" ){
            this.props.modify(this.props.idx, this.state);
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
    min-height: 30px;
    width: 90%;
    margin: 0px 10px;
`;

const Btn = styled.button`
    background-color: white;
    border: none;
    color: var(--mainColor);
    width: 20px;
    padding: 5px;
`;

const Todo = styled.input`
    &:focus {
        outline: none;
        color: var(--mainColor);
        font-size: large;
    }
    border-style: none;
    background-color: white;
    color: var(--mainColor);
    width: inherit;
`;

const CheckBox = styled.input`
    &:checked {
        color: white;
        accent-color: var(--subColor);
    }
    width: 40px;
`;

export default TodoItem;