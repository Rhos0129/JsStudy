import React, { Component } from "react";
import styled from "styled-components";
import Clock from "../components/Clock";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoList: []
        };
    }

    render(){
        return(
            <Container>
                <Clock />
                <AddTodoItem componentDidMount={this.componentDidMount}/>
                <TodoList todoList={this.state.todoList} />
            </Container>
        )
    }

    componentDidMount = () => { // 컴포넌트가 그려지면 localStorage에 있던 데이터가 state로 저장
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) // localStorage에 todoList가 없으면 []로 설정
        })
    }
}

const Container=styled.div`
    padding-top : 2rem;
    padding-bottom: 7rem;
    padding-left: 10%;
    padding-right: 10%;
    height: auto;
    min-height: 100%;
`;

export default Content;