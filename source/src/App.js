import React, { useEffect, useState } from 'react';
import './App.css';
import { Advice } from './components/Advice';

function App() {
  const [data, setData] = useState({
    advice: '',
    id: '',
  });
  const [getData, setGetData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.adviceslip.com/advice');
      const result = await data.json();
      console.log(result)
      setData(() => {
        return {
          advice: result.slip.advice,
          id: result.slip.id
        }
      })};

    fetchData().catch(console.error);
  }, [getData]);

  const toggleData = () => {
    
    setGetData(prevValue => !prevValue)
  }






  return (
    <div className="main-body-container">
      <Advice data={data} toggleData={toggleData} />
    </div>
  );
}

export default App;
