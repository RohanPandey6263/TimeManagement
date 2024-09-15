import logo from './logo.svg';
import './App.css';
import clocklogo from './favicon.ico';
function App() {

  const today = new Date();
  console.log(today.getTime());
  console.log(today.toLocaleTimeString());
  const timenow = today.toLocaleTimeString();
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
            <div className= "Box-div" style={{width:'430px', height:'100%', marginLeft:'20px'}}>ah</div>
          </div> 
        </div>
      </body>
    </div>
  );
}

export default App;
