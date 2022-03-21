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
    
    getDate(){ // date를 업데이트하는 메소드
        this.setState({date: new Date()})
    }

    // 컴포넌트가 화면에 전부 그려졌을 때 실행되는 Life Cycle Method
    componentDidMount(){ // 1분마다 getDate() 실행
        this.oneMinuteCall = setInterval(() => this.getDate(), 60000)
    }

    // 화면에 그려진 컴포넌트가 사라지기 직전에 호출되는 Life Cycle Method
    componentWillUnmount(){
        clearInterval(this.oneMinuteCall)
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
