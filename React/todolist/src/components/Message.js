import React, { Component } from "react"
import styled from "styled-components"
import "../layout/common.css"

class Message extends Component{
    render(){
        return(
            <Container>
                {this.props.msg}
            </Container>
        )
    }
}

const Container = styled.div`
    color: white;
    text-align: center;
`;

export default Message;