import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"

class TodoItem extends Component{
    render(){
        return(
            <Container>
                {this.props.todo}
            </Container>
        )
    }
}

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px 10px;
`;

export default TodoItem;