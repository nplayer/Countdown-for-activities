import React, { useState, useEffect} from 'react';
import './style.css';

function Header(props) {

    const utterance = new SpeechSynthesisUtterance();
    useEffect(() => {
        
        utterance.lang = 'pt-BR';
        utterance.voice = speechSynthesis.getVoices()[0];
        utterance.rate = 3;
        utterance.text = '30seconds';
    },[utterance])
    
    const [started, setstarted] = useState(false);
    const [timer, settimer] = useState(40);
    const [count, setcount] = useState(0);
    function resetcounter(){
        setcount(0);
        settimer(40);
    }
    function countdown(){
        if(timer>0){
            settimer(timer-1);
        }
        else if(timer==0){
            settimer(40);
            setcount(c=>c+1);
            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
        }
    }
    function onStart() {
        setstarted(!started);
    }
    useEffect(() => {
        let timer1 = setInterval(()=>{
            if (started){
                countdown();
            }            
        }, 1000);
        return () => {
            clearInterval(timer1);
        }
    });

    return(
        <div className='header_container'>
            <div className='app_title'>
                <p>Countdown
                    <span className='clock'>{props.time}</span>
                </p>
            </div>   
            <div className='p_container'>
                <p className='timer_name'>Timer </p>
                <p className='timer'>{timer}</p>
                <p className='timer_name'>Counter </p>
                <p className='timer'>{count}</p>
            </div>         
            
            <div className='btns_container'>
                <button className='btnReset' onClick={resetcounter}>reset</button>
                <button className='btnStart' onClick={onStart}>{started? 'pause':'start'}</button>
            </div>
        </div>

    );
}
export default Header;