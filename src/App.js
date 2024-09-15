import logo from './logo.svg';
import './App.css';
import clocklogo from './favicon.ico';
function App() {
  return (
    <div style={{backgroundColor:'#2f70d1', verticalAlign:'stretch', padding:'20px', height:'100vh'}} className="App">
      <header className="App-header">
        <img src={clocklogo} style={{height:'60px',marginLeft:'20px',}}> 
        </img>
  
        <p style={{marginLeft:'20px'}}>
          Time Crunch
        </p>
      </header>
      <body style={{backgroundColor:'#2f70d1'}}>
        <div style={{marginLeft:'20px', display: 'flex', flexdirection: 'row'}} >
          <div className="Box-div" style={{height:'100px', width:'300px'}}>yo</div>
          <div className="circle-div" style={{height:'100px',width:'100px'}}>oy</div>
          <div className="rounded-div" style={{height:'100px', width:'300px'}}>yo</div>
          <div className="stats-div" >oy</div>
          <div className="Box-div" style={{height:'100px', width:'300px'}}>  
            <div className="lightbox-div" style={{height:'80px', width:'240px'}}>yo</div>
          </div>
          
        </div>
      </body>
    </div>
  );
}

export default App;
