import React from 'react'

const TimerDisplay = (props) => {
    return (
        <div className="Timer-box">
            <h2 id="timer-label">{props.displayMessage}</h2>
            <h2 className="timer-display" id="time-left">{props.minutes}:{props.seconds}</h2>
        </div>
    )
}

export default TimerDisplay
