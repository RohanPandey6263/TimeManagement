import logo from './logo.svg';
import './App.css';
import clocklogo from './favicon.ico';
function App() {

  const today = new Date();
  console.log(today.getTime());
  console.log(today.toLocaleTimeString());
  const timenow = today.toLocaleTimeString();
  const schedules = fetchUpcomingSchedules();
  console.log(schedules);
  return (
    <div style={{backgroundColor:'#2f70d1', verticalAlign:'stretch', height:'450px', width:'800px'}} className="App">
      <header className="App-header" style={{marginLeft:'10px'}}>     
        <img src={clocklogo} style={{height:'30px'}}> 
        </img>  
        <strong style={{marginLeft:'10px'}}>
          Time Crunch
        </strong> 
      </header>
      <body style={{backgroundColor:'#2f70d1',marginLeft:'10px'}}>
        <div style={{ display: 'flex',  height:'100px'}} >
          <div className="lightbox-div">
            <div className= "lightbox-div" style={{width:'210px',flexDirection:'column'}}>
              <div className="Box-div" style={{height:'50px', width:'100%'}}>
                <p>{timenow}</p>
              </div>
              <div className="lightbox-div" style={{height:'50px', width:'100%'}}></div>
            </div>
            <div className= "topBox-div" style={{width:'430px', height:'100%', marginLeft:'20px',flexDirection:'column'}}>
              <div  style={{marginTop:'10px',height:'20px',fontSize:'17px'}}>
                Upcoming
                <div className="lightbox-div" style={{float:'right', marginRight:'10px',height:'20px',fontSize:'13px',padding:'5px'}}>View Details -> </div>
                <div className="Box-div" style={{height:'80px', width:'100%', flexDirection:'row',marginTop:'15px',}}>
                  {schedules.filter(a=>timenow-a.dueBy).sort((a,b)=>a.dueBy-b.dueBy).slice(0,5).map(sch => 
                    <div className="lightbox-div" style={{height:'74px',width:'76px',marginLeft:'5px',fontSize:'12px'}}>{sch.description}</div>
                  )
                }
                </div>
              </div>
              <div className="Box-div"></div>
            </div>
          </div> 
        </div>
        <div className="Box-div" style={{marginTop:'30px',height:'30px',marginRight:'10px'}}>Calendar</div>
        <div className="Box-div" style={{height:'200px', marginRight:'10px',marginTop:'10px'}}>hi</div>
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
export default App;
