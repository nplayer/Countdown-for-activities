import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/index';

function App() {

  const [time, setTime] = useState(10);
  const [now, setNow] = useState(new Date())

  function countdown(){
      if(time>0){
          setTime(time-1);
      }
  }
  function initailZero(value){
    if (value<10 && value>=0){
      return '0'+value;
    }
    else return value;
  }
  function formatedNow(){
    return `${initailZero(now.getHours())}:${initailZero(now.getMinutes())}`
  }

  useEffect(() => {
      let timer = setInterval(()=>{
        setNow(new Date())
      }, 1000);
      return () => {
          clearInterval(timer);
      }
  });

  return (
    <div className="App">
      <Header time={formatedNow()}/>
    </div>
  );
}

export default App;
