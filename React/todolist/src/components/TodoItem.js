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
    border: 1px solid blue;
`;

export default TodoItem;