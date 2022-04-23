import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./components/Clock";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: []
        };
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

    render(){
        return(
            <Container>
                <LeftBox>
                    <Clock />
                    <AddTodoItem componentDidMount={this.componentDidMount}/>
                </LeftBox>
                <RightBox>
                    <TodoList todoList={this.state.todoList} remove={this.remove} modify={this.modify} />
                </RightBox>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
    overflow-wrap: inherit;
    @media (max-width: 738Px) {
        flex-direction: column;
        gap: 10%;
    }
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50vh;
    width: 100%;
    @media (max-width: 738Px) {
        height: 10vh;
        flex: 1;
        padding: 1% 5%;
    }
`;

const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50vh;
    width: 100%;
    @media (max-width: 738Px) {
        min-height: 25vh;
        flex: 1;
        padding: 1% 5%;
    }
`;

export default Main;