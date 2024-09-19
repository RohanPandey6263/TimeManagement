import './layouttest.css'

function LayoutTest(){
    return (
    <div style={{height:'500px', width:'700px', flex:1}} className="LayoutTest">
        <div style={{backgroundColor:'red'}}>
            <div className='TopBox'>1</div>
            <div className='TopBox'>2</div>
            <div className='TopBox'>3</div>
        </div>
        <div style={{backgroundColor:'red'}}>
            <div className='TopBox'>1</div>
            <div className='TopBox'>2</div>
            <div className='TopBox'>3</div>
        </div>
    </div>
);

}



export default LayoutTest;