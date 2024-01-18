import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
    <h1 className='bg-blue-300 rounded-md underline flex-auto'>Creating a card</h1>
    <Card name ={"Abdul Sami"} designation= {"Senior Software Engineer"}city= {"Islamabad"}/>
    <Card name ={"Muhammad Usman"} designation= {"HR Manager"}city= {"Islamabad"}/>
    <Card name ={"Azaad Imran"} designation= {"Project Manager"}city= {"Islamabad"}/>
    
    </>
  )
}

export default App


