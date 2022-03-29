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
    background-color: var(--Orange);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 50vh;
    overflow-y: auto;
    @media (max-width: 738Px) {
        height: 55vh;
        margin: 1% 5%;
    }
`;

export default TodoList;