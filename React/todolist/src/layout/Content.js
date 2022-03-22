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
                <TodoList todoList={this.state.todoList} remove={this.remove} modify={this.modify} />
            </Container>
        )
    }

    componentDidMount = () => { // 컴포넌트가 그려지면 localStorage에 있던 데이터가 state로 저장
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || [] // localStorage에 todoList가 없으면 []로 설정
        })
    }

    remove = (idx) => {
        var _todoList = [...Array.from(this.state.todoList).splice(0, idx), ...Array.from(this.state.todoList).splice(idx+1)]
        this.changeTodoList(_todoList)
    }

    modify = (idx, todo) => {
        var _todoList = Array.from(this.state.todoList);
        _todoList[idx]=todo;
        this.changeTodoList(_todoList)
    }
    
    changeTodoList = (_todoList) => {
        this.setState({
            todoList: _todoList
        });
        localStorage.setItem("todoList", JSON.stringify(_todoList));
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