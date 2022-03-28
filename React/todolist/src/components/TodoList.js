import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"
import TodoItem from "./TodoItem"

class TodoList extends Component{
    render(){
        return(
            <Container>
                {(this.props.todoList).map((todo, idx) =>  // 여러 컴포넌트 생성
                    <TodoItem todo={todo} key={idx} idx={idx} remove={this.props.remove} modify={this.props.modify}/>
                )}
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
`;

export default TodoList;