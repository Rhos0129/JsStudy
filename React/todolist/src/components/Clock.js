import React, { Component } from "react";
import styled from "styled-components";
import * as dateFns from "date-fns";
import "../layout/common.css";

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render(){
        const {date} = this.state;
        return(
            <Containter>
                <CurDate>
                    {dateFns.format(date, " yyyy/MM/dd ")}
                </CurDate>
                <CurDay>
                    {dateFns.format(date, "EEEE")}
                </CurDay>
                <CurTime>
                    {dateFns.format(date, " HH : mm ")}
                </CurTime>
            </Containter>
        )
    }
}

const Containter = styled.div`
    text-align: center;
    color: var(--Orange);
`;

const CurDate = styled.div`
    font-size: 30px;
`;

const CurDay = styled.div`
    font-size: 30px;
    font-style: italic;

`;

const CurTime = styled.div`
    font-size: 80px;
    font-weight: 800;
`;

export default Clock;
