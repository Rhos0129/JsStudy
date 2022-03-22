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

    add = (e) => { // 화살표함수로 구현 - 화살표함수에서 this는 상위 태그를 가르키기 때문에 bind()를 대신할 수 있다.
        const input = document.querySelector("#input");
        const addBtn = document.querySelector("#addBtn");
        if (e.key === "Enter" || e.target === addBtn){
            const inputValue = input.value;
            const todoList = JSON.parse(localStorage.getItem("todoList")) || [] // localStorage에 todoList가 없으면 []로 설정

            // localStorage 에 저장 : 웹브라우저를 닫은 후 다시 열어도 저장되어 있도록 구현
            localStorage.setItem("todoList", JSON.stringify([...todoList, inputValue])); // localStorage에는 문자열만 지정할 수 있으므로 문자열로 변환 
            input.value = "";

            this.props.componentDidMount();
        }
    }
}

const Container = styled.div`
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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