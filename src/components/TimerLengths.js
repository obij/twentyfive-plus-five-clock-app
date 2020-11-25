import React from 'react'

const TimerLengths = (props) => {
    
    return (
        <div className="div-length">
            <div className="break-div">
                <h2 className="header2Break" id="break-label">Break Length</h2>
                <i className="fa fa-arrow-up" id="break-increment" onClick={props.incBreak}></i>
                <span id="break-length">{props.breakLength}</span>
                <i className="fa fa-arrow-down" id="break-decrement" onClick={props.decBreak}></i>
            </div>
            <div className="session-div">
                <h2 className="header2Session" id="session-label">Session Length</h2>
                <i className="fa fa-arrow-up" id="session-increment" onClick={props.incSession}></i>
                <span id="session-length">{props.sessionLength}</span>
                <i className="fa fa-arrow-down" id="session-decrement" onClick={props.decSession} ></i>
            </div>
        </div>
    )
}

export default TimerLengths
