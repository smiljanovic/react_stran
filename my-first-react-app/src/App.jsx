import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title}) => {

  return(
  <div>
  <h2>{title}</h2>
  </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
  
    <Card title="Star Wars" rating={5} isCool={true} actors={[{name : "Actors" }]}/>  
    <Card title="Avatar" />  
    <Card title="American Psycho"/>  
    </div>
  )
}

export default App
