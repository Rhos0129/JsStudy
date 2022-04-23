import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"
import TodoItem from "./TodoItem"
import Message from "./Message"

class TodoList extends Component{
    render(){
        var _content = null;
        if(this.props.todoList.length == 0){
            _content = <Message msg="할 일을 추가해주세요." />
        } else{
            _content = (this.props.todoList).map((todo, idx) =>  
            <TodoItem todo={todo} key={idx} idx={idx} remove={this.props.remove} modify={this.props.modify}/>
        )
        }
        return(
            <Container>
                {_content}
            </Container>
        )
    }
}

const Container = styled.div`
    &::-webkit-scrollbar {
        width: 10px;  /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: var(--subColor); /* 스크롤바의 색상 */        
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: var(--mainColor);  /*스크롤바 뒷 배경 색상*/
        border-radius: 10px;
    }
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0px;
    border-radius: 10px;
    height: 50vh;
    overflow-y: scroll;
    width: 100%;
    @media (max-width: 738Px) {
        height: 25vh;
    }
`;



export default TodoList;