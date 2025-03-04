import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react';

const Card = ({title}) => {
  const [hasLiked, setHasLiked]  = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  });

  return(
  <div className="card">
  <h2>{title}</h2>

  <button onClick={() => setHasLiked(!hasLiked)}>
    
    {hasLiked ? '❤️️' : '🤍'}
    
    </button>

  </div>
  )
}

const App = () => {



  return (
    <div className="card-container">
  
    <Card title="Star Wars" rating={5} isCool={true} />  
    <Card title="Avatar" />  
    <Card title="American Psycho"/>  
    </div>
  )
}

export default App
