import 'devextreme/dist/css/dx.light.css';
import logo from './logo.svg';
import './App.css';
import clocklogo from './clockicon.png';
import playicon from './playiconn.png'
import pauseicon from './pauseiconn.png'
import reseticon from './reseticon.png'
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
let timerOn = false;
let upcomingSchedules=[];
function App() {
  
  function isTimerOn()
  {
    console.log(timerOn);
    return timerOn;
  }
  const refreshTime = () => {
    console.log(timerOn);
    if( isTimerOn()==true)
      {
        setSeconds((seconds) => 
        {
          if(seconds > 0){
          return seconds-1;
          }
          return 0;
        });
      }
    setTimenow((timenow)=>{return new Date()});
  };
  const today = new Date();
  console.log(today.toLocaleDateString("en-US", { weekday: 'long' }))
  const [seconds, setSeconds] = useState(0);
  const [timenow, setTimenow] =useState(new Date());
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  //const [timerOn, setTimerOn] = useState(true);
  const togglePopup = () => {
    setDate(()=>new Date());
    setIsOpen(!isOpen);
    setInputValue(()=> { return ''});
  };
 const submitTask= () => {
  setIsOpen(!isOpen);
  if(inputValue!==''){submitTaskSchedules(inputValue,date);}
  setDate(()=>new Date());
  setInputValue(()=> { return ''});
 };
 const handleInputChange = (event) => {
  setInputValue(event.target.value);
};
  useEffect(() => {
    const interval = setInterval(() => refreshTime(), 1000);
    return () => clearInterval(interval);
  }, []);
  
  // console.log(today.getTime());
  // console.log(today.toLocaleTimeString());
  const days = fetchUpcomingdays();
  //fetchUpcomingSchedulesFromServer();
  console.log(days);
  const schedules = fetchUpcomingSchedules();
  function pad2(number) {
    return (number < 10 ? '0' : '') + number
  }


  return (
    <div style={{backgroundColor:'#2f70d1', verticalAlign:'stretch', maxHeight:'550px', width:'800px'}} className="App">
      <header className="App-header" style={{marginLeft:'10px'}}>     
        
        <img src={clocklogo} style={{height:'30px'}}> 
        </img>  
        <strong style={{marginLeft:'10px',fontFamily:'Myriad Pro Regular'}}>
          Time Crunch
        </strong> 
        <div className= "rounded-div" style={{height:'20px',width:'70px',fontSize:'12px',padding:'5px',marginLeft:'470px',justifyContent:'center'}}> 
          <p>{timenow.toLocaleTimeString()}</p>
        </div>
      </header>
      <body style={{backgroundColor:'#2f70d1',marginLeft:'10px'}}>
        <div style={{ display: 'flex',  height:'150px'}} >
            <div className= "lightbox-div" style={{width:'210px',flexDirection:'column'}}>
              <div className="Box-div" style={{height:'50%', width:'100%'}}> {pad2(Math.floor(seconds/60))}:{pad2(seconds%60)} 
              </div>
              <div style={{display:'flex',flexDirection:'row',marginTop:'5px'}}>
              
                
                <button className="circle-div" style={{height:'50px', width:'50px',marginLeft:'0px', }}  onClick={() => {
                   if (timerOn == true) {
                    timerOn = false;
                    document.getElementById('theImage').src=playicon; 
                   } else if (timerOn == false) {
                    timerOn = true; 
                    document.getElementById('theImage').src=pauseicon; 
                   }
                  }}><img id="theImage" src={playicon} style={{height:'30px'}}></img></button>
                <button className="circle-div" style={{height:'50px', width:'50px'}} onClick={() => setSeconds((seconds)=>{return 0})}><img src={reseticon} style={{height:'40px'}}></img></button>
                <div style={{display:'flex',flexDirection:'column'}}>
                 <button className="rounded-div" onClick={() => setSeconds((seconds)=>{

                    if(seconds+60<3600){
                      return seconds+60;
                    } 
                    return(3600);                    
                  })}>+1</button>
                 <button className="rounded-div" onClick={() => setSeconds((seconds)=>{
                 if(0<seconds-60){
                  return seconds-60;
                } 
                return(0);
                  })}>-1</button>
               </div>
              </div >
              <div className="lightbox-div" style={{height:'50px', width:'100%'}}></div>
            </div>
            <div className= "topBox-div" style={{width:'530px', height:'100%', marginLeft:'20px',flexDirection:'column'}}>
              <div  style={{marginTop:'10px',height:'20px',fontSize:'17px',fontFamily:'Times New Roman'}}>
                Upcoming
                <div className="Box-div" style={{height:'80px', width:'100%', flexDirection:'row',marginTop:'10px',}}>
                  {schedules.sort((a,b)=>a.dueBy-b.dueBy).slice(0,5).map(sch => 
                    <div className="lightbox-div" style={{height:'88px',width:'90px',marginLeft:'8px',fontSize:'12px'}}>{sch.description}</div>
                  )
                }
                </div>
            
            </div>
          </div> 
         </div>
          <div className="Box-div" style={{marginTop:'10px',height:'30px',marginRight:'10px',fontFamily:'Brush Script MT'}}>Calendar</div>
          <div className="toplightbox-div" style={{height:'170px', marginRight:'10px',marginTop:'10px'}}>
            {days.slice(0,7).map(day => 
            <div className="topBox-div" style={{height:'95%',width:'105px',marginLeft:'5px',fontSize:'12px',display:'flex',flexDirection:'column'}}>
              <div style={{marginTop:'10px'}}>{day.dotw}</div>
              <div>{day.dotm}</div>
            </div>
            )
          }
        
          </div>
          <div  style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Popup open={isOpen} trigger={<button onClick={togglePopup} className='rounded-div' style={{width:'150px',height:'35px',marginBottom:'10px',justifyContent:'center',fontSize:'18px'}}>Add Task</button>} position="top center">
              <div style={{height:'200px', backgroundColor:'white', width:'500px',marginLeft:'-150px',marginTop:'-100px',borderRadius:'40px',justifyContent:'center'}}>
                <div style={{height:'10px'}}></div>
                <div  style={{justifyContent:'center',width:'100px',marginLeft:'210px',fontSize:'23px'}}>Add Task</div>
                <div style={{marginLeft:'10px'}}>Description</div>
                <input value={inputValue} onChange={handleInputChange} style={{marginLeft:'10px'}} type='text'/>
                <div style={{marginLeft:'10px'}}>dueBy</div>
                <div style={{display:'flex',flexDirection:'row'}}>
                
                <div style={{marginLeft:'10px'}}>
                  <DatePicker  selected={date} onChange={(date) => setDate(date)} 
                    minDate={new Date()}/>
                </div>
                <button onClick={submitTask} className='Box-div' style={{height:'25px', marginLeft:'130px',width:'70px'}}>save</button>
               
                <button onClick={togglePopup} className='Box-div' style={{height:'25px', marginLeft:'10px'}}>cancel </button>
                </div>
              </div>
            </Popup>
            
          </div>
       
      </body>
    </div>
  );
}

function fetchUpcomingdays() {
  const day1 = new Date();
  const day2 = new Date();
  day2.setDate(day1.getDate()+1)
  const day3 = new Date();
  day3.setDate(day1.getDate()+2)
  const day4 = new Date();
  day4.setDate(day1.getDate()+3)
  const day5 = new Date();
  day5.setDate(day1.getDate()+4)
  const day6 = new Date();
  day6.setDate(day1.getDate()+5)
  const day7 = new Date();
  day7.setDate(day1.getDate()+6)
  
    return [
      {dotw:day1.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day1.getDate()},
      {dotw:day2.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day2.getDate()} ,
      {dotw:day3.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day3.getDate()},
      {dotw:day4.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day4.getDate()},
      {dotw:day5.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day5.getDate() },
      {dotw:day6.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day6.getDate() },
      {dotw:day7.toLocaleDateString("en-US", { weekday: 'long' }), dotm:day7.getDate()}];
  }
function submitTaskSchedules( _description, _date  ) { 
  upcomingSchedules.push({description:_description, dueBy:_date});
}
function fetchUpcomingSchedules() {
  return upcomingSchedules;
  // return [{description:'Physics Assignment', dueBy:new Date('September 17, 2024 03:24:00')},
  //   {description:'Chemistry Assignment', dueBy:new Date('December 17, 1995 03:24:00')} ,
  //   {description:'CS Assignment', dueBy:new Date('September 25, 2024 03:24:00')},
  //   {description:'Biology Assignment', dueBy:new Date('September 4, 2024 03:24:00')},
  //   {description:'Math Assignment', dueBy:new Date('September 7, 2024 03:24:00')},
  //   {description:'Sem Assignment', dueBy:new Date('September 7, 2024 02:24:00')},
  //   {description:'English Assignment', dueBy:new Date('September 7, 2024 02:24:00')}];
}
function fetchUpcomingSchedulesFromServer() {
  axios.get('http://localhost:8000/fetchschedules?username=Rohan')
  .then(response => {
    console.log(response.data);
  })

  // const xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'http://localhost:8000/fetchschedules?username=Rohan');
  //   xhr.onload = function() {
  //     if (xhr.status === 200) {
  //       console.log(JSON.parse(xhr.responseText));
  //     }
  //   };
  //   xhr.send();

  //http://localhost:8000/fetchschedules?username=Rohan
}
export default App;
