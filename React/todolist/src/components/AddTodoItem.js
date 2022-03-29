import React, { Component } from "react";
import styled from "styled-components";
import "../layout/common.css";

class AddTodoItem extends Component{
    render(){
        return(
            <Container>
                <Input id="input" placeholder="오늘의 할일" onKeyPress={this.add}></Input>
                <AddBtn id="addBtn" onClick={this.add}>+</AddBtn>
            </Container>
        )
    }

    add = (e) => {
        const input = document.querySelector("#input");
        const addBtn = document.querySelector("#addBtn");
        if (e.key === "Enter" || e.target === addBtn){
            if(input.value === "") return;
            const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
            localStorage.setItem("todoList", JSON.stringify([{txt: input.value, checked: false}, ...todoList]));
            input.value = "";
            this.props.componentDidMount();
        }
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin-top: 5px;
`;
const Input = styled.input`
    padding-left: 10px;
    height: 42px;
    width: 80%;
    outline: 0;
    border: 2px solid var(--Orange);
    border-radius: 10px 0 0 10px;
`;
const AddBtn = styled.button`
    font-size: xx-large;
    font-weight: 800;
    color: white;
    background-color: var(--Orange);
    border-style: none;
    border-radius: 0 10px 10px 0;
    width: 45px;
`;

export default AddTodoItem;