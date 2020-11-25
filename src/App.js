

import React, { Component } from 'react'
import TimerControls from './components/TimerControls'
import TimerDisplay from './components/TimerDisplay'
import TimerLengths from './components/TimerLengths'


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      sessionLength: 1500,
      breakLength: 300,
      displayMessage: "Session",
      timerSession: 1500,
      //timer: 1500,
      timerBreak: 300,
      minutes: 25,
      seconds: "00"
    }

    this.timer= 0;
    this.runningFlag = false;
    this.playAudio= this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.startStopTimer= this.startStopTimer.bind(this);
    this.countDown= this.countDown.bind(this);
    this.resetTime= this.resetTime.bind(this);
    this.incBreak= this.incBreak.bind(this);
    this.decBreak= this.decBreak.bind(this);
    this.incSession= this.incSession.bind(this);
    this.decSession= this.decSession.bind(this);
    //this.minCalc= this.minCalc.bind(this);
    //this.secCalc= this.secCalc.bind(this);
    this.minuteCalcSession= this.minuteCalcSession.bind(this);
    this.secondCalcSession= this.secondCalcSession.bind(this);
    this.minuteCalcBreak= this.minuteCalcBreak.bind(this);
    this.secondCalcBreak= this.secondCalcBreak.bind(this);
  }

  incSession(){
    //var minutes2 = parseInt(this.state.minutes);
    if(this.state.sessionLength < 3600){
      if((this.runningFlag === false) && this.state.displayMessage === "Session"){
        if((this.state.sessionLength + 60)/60 < 10){
          this.setState({
            //minutes: parseInt(this.state.minutes) + 1,
            minutes: "0" + (this.state.sessionLength + 60)/60,
            seconds: "00",
            sessionLength: this.state.sessionLength + 60,
            timerSession: this.state.sessionLength + 60
          });
        }else{
          this.setState({
            //minutes: parseInt(this.state.minutes) + 1,
            minutes: (this.state.sessionLength + 60)/60,
            seconds: "00",
            sessionLength: this.state.sessionLength + 60,
            timerSession: this.state.sessionLength + 60
          });
        }
        
        //this.minuteCalcSession();
        //console.log("after inc, this.state.minutes is " + this.state.minutes);
        //console.log("after inc, this.state.sessionLength is " + this.state.sessionLength);
        //console.log("after inc, this.state.timerSession is " + this.state.timerSession);

      }else if(this.runningFlag === false && this.state.displayMessage === "Break"){
        this.setState({
          sessionLength: this.state.sessionLength + 60
        });
      }
    }
  }

  decSession(){
    //var minutes2 = parseInt(this.state.minutes);
    if(this.state.sessionLength > 60){
      if(this.runningFlag === false && this.state.displayMessage === "Session"){
        if((this.state.sessionLength - 60)/60 < 10){
          this.setState({
            //minutes: parseInt(this.state.minutes) - 1,
            minutes:"0" + (this.state.sessionLength - 60)/60,
            seconds: "00",
            sessionLength: this.state.sessionLength - 60,
            timerSession: this.state.sessionLength - 60
          });

        }else{
          this.setState({
            //minutes: parseInt(this.state.minutes) - 1,
            minutes:(this.state.sessionLength - 60)/60,
            seconds: "00",
            sessionLength: this.state.sessionLength - 60,
            timerSession: this.state.sessionLength - 60
          });
        }
        
        //this.minuteCalcSession();
      }else if(this.runningFlag === false && this.state.displayMessage === "Break"){
        this.setState({
          sessionLength: this.state.sessionLength - 60
        });
      }
    }
  }

  incBreak(){
    var minutes2 = parseInt(this.state.minutes);
    if(this.state.breakLength < 3600){
      if(this.runningFlag === false && this.state.displayMessage === "Break"){
        if((this.state.breakLength + 60)/60 < 10){
          this.setState({
            minutes:"0" + (this.state.breakLength + 60)/60,
            //minutes: minutes2 + 1,
            seconds: "00",
            breakLength: this.state.breakLength + 60,
            timerBreak: this.state.breakLength + 60
          });
        }else{
          this.setState({
            minutes: (this.state.breakLength + 60)/60,
            //minutes: minutes2 + 1,
            seconds: "00",
            breakLength: this.state.breakLength + 60,
            timerBreak: this.state.breakLength + 60
          });
        }
        
        //this.minuteCalcBreak();
      }else if(this.runningFlag === false  && this.state.displayMessage === "Session"){
        this.setState({
          breakLength: this.state.breakLength + 60
        });
        
      }
    }
  }

  decBreak(){
    var minutes2 = parseInt(this.state.minutes);
    if(this.state.breakLength > 60){
      if(this.runningFlag=== false  && this.state.displayMessage === "Break"){
        if((this.state.breakLength - 60)/60 < 10){
          this.setState({
            minutes:"0" + (this.state.breakLength - 60)/60,
            //minutes: minutes2 - 1,
            seconds: "00",
            breakLength: this.state.breakLength - 60,
            timerBreak: this.state.breakLength - 60
          });
        }else{
          this.setState({
            minutes: (this.state.breakLength - 60)/60,
            //minutes: minutes2 - 1,
            seconds: "00",
            breakLength: this.state.breakLength - 60,
            timerBreak: this.state.breakLength - 60
          });
        }
        
          //this.minuteCalcBreak();

      }else if(this.runningFlag === false && this.state.displayMessage === "Session"){
        this.setState({
          breakLength: this.state.breakLength - 60
        });
        
      }
    }
  }

  playAudio(){
   var audio= document.getElementById("beep");
    audio.play();
 }

 pauseAudio(){
    var audio= document.getElementById("beep");
    audio.pause();
    audio.load();
 }

 resetTime(){
   this.setState({
     sessionLength: 1500,
     breakLength: 300,
     displayMessage: "Session",
     timerSession: 1500,
     //timer: 1500,
     timerBreak: 300,
     minutes: 25,
     seconds: "00"
   });
   clearInterval(this.timer);
   this.timer= 0;
   this.runningFlag= false;
   this.pauseAudio();
   
 }

 minuteCalcSession(){
   var minutes2= Math.floor(this.state.timerSession/ 60);
   if(minutes2 < 10){
     minutes2= "0" + minutes2;
   }
   this.setState({
     minutes: minutes2
   });
 }

 secondCalcSession(){
   var seconds2=  this.state.timerSession % 60;
   if(seconds2 < 10){
     seconds2 = "0" + seconds2;
   }
   this.setState({
     seconds: seconds2
   });
 }

 minuteCalcBreak(){
   var minutes2= Math.floor(this.state.timerBreak / 60);
   if(minutes2 < 10){
     minutes2= "0" + minutes2;
   }
   this.setState({
     minutes: minutes2
   });
 }

  secondCalcBreak(){
   var seconds2=  this.state.timerBreak % 60;
   if(seconds2 < 10){
     seconds2 = "0" + seconds2;
   }
   this.setState({
     seconds: seconds2
   });
 }

 countDown(){
   if(this.state.timerSession > 0 && this.state.displayMessage === "Session"){
     this.setState({
       timerSession: this.state.timerSession - 1
     });
     //this.minCalc();
     //this.secCalc();
     this.minuteCalcSession();
     this.secondCalcSession();

   }else if(this.state.timerBreak > 0 && this.state.displayMessage === "Break"){
     this.setState({
       timerBreak: this.state.timerBreak - 1
     });
     //this.minCalc();
     //this.secCalc();
     this.minuteCalcBreak();
     this.secondCalcBreak();

   }else if(this.state.timerSession === 0 && this.state.displayMessage === "Session"){
     this.setState({
       timerbreak: this.state.breakLength,
       displayMessage: "Break"
     });
     this.minuteCalcBreak();
     this.secondCalcBreak();
     //this.minCalc();
     //this.secCalc();
     this.playAudio();

   }else if(this.state.timerBreak === 0 && this.state.displayMessage === "Break"){
     this.setState({
       timerSession: this.state.sessionLength,
       displayMessage: "Session"
     });
     this.minuteCalcSession();
     this.secondCalcSession();
     //this.minCalc();
     //this.secCalc();
     this.playAudio();
   }
 }

 startStopTimer(){
   if(!this.runningFlag){
     this.runningFlag= true;
     this.timer = setInterval(() => {
       this.countDown()
     }, 1000);

   }else if(this.runningFlag){
     clearInterval(this.timer);
     this.runningFlag= false;
   }
 }

  

  render() {
    return (
      <div className="container">
          <div className= "title"><h1>25 + 5 Clock</h1></div>
          <TimerLengths  incBreak ={this.incBreak} decBreak= {this.decBreak} incSession={this.incSession} decSession={this.decSession} breakLength={this.state.breakLength/60}  sessionLength={this.state.sessionLength/60}/>
          <TimerDisplay displayMessage= {this.state.displayMessage} minutes={this.state.minutes} seconds={this.state.seconds}/>
          <TimerControls startStopTimer={this.startStopTimer} resetTime={this.resetTime}/>
          <audio id="beep" src="https://res.cloudinary.com/dqwagsh1g/video/upload/v1602008165/Beep_Pomodoro_App_enwb21.m4a" ></audio>
      </div>
    )
  }
}

export default App
