import React, { useState, useEffect} from 'react';
import './style.css';

function Timer(props) {

    const [activity, setActivity] = useState(
        {a1_name: 'act1', a1_duration: 30, a1_count:true,
        a2_name: '', a2_duartion: 0, a2_count:false,
        interval: 30, repeat: 8
        }
    );
    
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
                <p className='timer_name'>Timer </p>
                <p className='timer'>{timer}</p>
                <p className='timer_name'>Counter </p>
                <p className='timer'>{count}</p>        
        </div>

    );
}
export default Timer;