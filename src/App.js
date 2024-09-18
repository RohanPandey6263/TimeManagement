import logo from './logo.svg';
import './App.css';
import clocklogo from './favicon.ico';
import axios from 'axios';

function App() {

  const today = new Date();
  console.log(today.getTime());
  console.log(today.toLocaleTimeString());
  const timenow = today.toLocaleTimeString();
  const schedules = fetchUpcomingSchedules();
  //fetchUpcomingSchedulesFromServer();
  console.log(schedules);
  return (
    <div style={{backgroundColor:'#2f70d1', verticalAlign:'stretch', maxHeight:'500px', width:'800px'}} className="App">
      <header className="App-header" style={{marginLeft:'10px'}}>     
        
        <img src={clocklogo} style={{height:'30px'}}> 
        </img>  
        <strong style={{marginLeft:'10px'}}>
          Time Crunch
        </strong> 
        <div className= "rounded-div" style={{height:'20px',width:'70px',fontSize:'12px',padding:'5px',marginLeft:'470px'}}> 
          <p>{timenow}</p>
        </div>
      </header>
      <body style={{backgroundColor:'#2f70d1',marginLeft:'10px'}}>
        <div style={{ display: 'flex',  height:'150px'}} >
            <div className= "lightbox-div" style={{width:'210px',flexDirection:'column'}}>
              <div className="Box-div" style={{height:'50px', width:'100%'}}>
               y hello
              </div>
              <div style={{display:'flex',flexDirection:'row',marginTop:'5px'}}>
               <div className="rounded-div" style={{height:'50px', width:'50px',}}></div>
              </div>
              <div className="lightbox-div" style={{height:'50px', width:'100%'}}></div>
            </div>
            <div className= "topBox-div" style={{width:'430px', height:'100%', marginLeft:'20px',flexDirection:'column'}}>
              <div  style={{marginTop:'10px',height:'20px',fontSize:'17px'}}>
                Upcoming
                <div className="Box-div" style={{height:'80px', width:'100%', flexDirection:'row',marginTop:'10px',}}>
                  {schedules.sort((a,b)=>a.dueBy-b.dueBy).slice(0,5).map(sch => 
                    <div className="lightbox-div" style={{height:'74px',width:'76px',marginLeft:'5px',fontSize:'12px'}}>{sch.description}</div>
                  )
                }
                </div>
            
            </div>
          </div> 
        </div>
        <div className="Box-div" style={{marginTop:'10px',height:'30px',marginRight:'10px'}}>Calendar</div>
        <div className="Box-div" style={{height:'170px', marginRight:'10px',marginTop:'10px'}}>hi</div>
      </body>
    </div>
  );
}

function fetchUpcomingSchedules() {
  return [{description:'Physics Assignment', dueBy:new Date('September 17, 2024 03:24:00')},
    {description:'Chemistry Assignment', dueBy:new Date('December 17, 1995 03:24:00')} ,
    {description:'CS Assignment', dueBy:new Date('September 25, 2024 03:24:00')},
    {description:'Biology Assignment', dueBy:new Date('September 4, 2024 03:24:00')},
    {description:'Math Assignment', dueBy:new Date('September 7, 2024 03:24:00')},
    {description:'Sem Assignment', dueBy:new Date('September 7, 2024 02:24:00')},
    {description:'English Assignment', dueBy:new Date('September 7, 2024 02:24:00')}];
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
