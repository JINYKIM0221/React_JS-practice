import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [value,setValue] = useState(['202202128','202202129','202202130']);
  let [click,setclick] = useState(0);
  let [bad,setbad] = useState(0);
  const onClick = () =>{
    setclick((current) => current +1);
    
  }
  const offClick = () =>{
    setbad((current) => current +1);
    
  }

  function Change(){
    const new2 = [...value];
    new2[2] = "2021-01-30";
    setValue(new2);
  }

  
  return (
    <div className="App">
      <div className='white'>
        <div style={{ color : 'yellow', fontSize:'16px'}}>
          GOGO shoping
          </div>
      </div> 
      <div className='list'>
        <h1 value = {value}>{value[0]} <button onClick={Change}>🎨</button></h1>
        
        <p style={ {fontstyle:"italic"} }>무야호</p>
        <button onClick={onClick}>🎈</button>
        <span>{click}</span>
        <button onClick={offClick}>🥽</button>
        <span>{bad}</span>
        <hr/>
        
      </div> 
      <div className='list'>
        <h1>{value[1]}</h1>
        <p style={ {fontstyle:"italic"} }>무야호</p>
        <hr/>
      </div>
      <div className='list'>
        <h1>{value[2]}</h1>
        <p style={ {fontstyle:"italic"} }>무야호</p>
        <hr/>
      </div> 
      
      
     
     <Modal />



    </div>
  );
}

  function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>    
  )
}
export default App;
