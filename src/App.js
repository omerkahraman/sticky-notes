import { useEffect, useRef, useState } from "react";
import './App.css';
import LeaveCommentText from "./components/LeaveCommentText";
import MainContext from "./MainContext";

function App() {

  const screen = useRef();
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    screen.current.focus();
  }, [])

  const handleKeyUp = (e) => {
    if(e.key === 'o') {
      setMode(!mode)
    }
  }

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
  }

  const data = {
     position
  }

  return (
    <MainContext.Provider value={data} >

    <div 
      ref={screen} 
      className={`screen ${mode && 'editable'}`} 
      tabIndex={0} 
      onKeyUp={handleKeyUp}
      onMouseMove={handleMouseMove}
      >
      <img src="https://static5.depositphotos.com/1004330/397/i/600/depositphotos_3974070-stock-photo-turkey-map-and-flag.jpg" /> 
      
      {mode && <LeaveCommentText /> }

      {mode && <div>Yorum modu aktif</div>}
    </div>

    </MainContext.Provider>
  );
}

export default App;
