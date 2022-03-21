import React, { Component } from "react";
import styled from "styled-components";
import "../layout/common.css";

class AddTodoItem extends Component{
    render(){
        return(
            <Container>
                <Input placeholder="오늘의 할일"></Input>
                <CreateBtn>+</CreateBtn>
            </Container>
        )
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
`;
const CreateBtn = styled.button`
    font-size: xx-large;
    font-weight: 800;
    color: white;
    background-color: var(--Orange);
    border-style: none;
    border-radius: 0 20% 20% 0;
    width: 45px;
`;

export default AddTodoItem;