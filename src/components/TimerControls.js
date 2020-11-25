import React from 'react'

const TimerControls = (props) => {
    return (
        <div className= "control-div">
            <span><i class="fa fa-play" onClick={props.startStopTimer} id="start_stop"></i><i class="fa fa-pause" onClick={props.startStopTimer} id="start_stop"></i></span>
            <i className="fa fa-refresh"  id="reset" onClick= {props.resetTime}></i>
        </div>
    )
}

export default TimerControls
