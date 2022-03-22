import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"

class TodoItem extends Component{
    render(){
        return(
            <Container>
                {this.props.idx} : {this.props.todo}
                <RemoveBtn onClick={() => this.props.remove(this.props.idx)}><i className="bi bi-trash"></i></RemoveBtn>                
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

const RemoveBtn = styled.button`
    background-color: white;
    border: none;
    color: var(--Orange);
    float: right;
`;


export default TodoItem;