import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
    <h1 className='text-3xl font-bold bg-blue-300 rounded-lg underline'>This is TailwindCss : {count}</h1>
    <Card name ={"Abdul Sami"} designation= {"Senior Software Engineer"}city= {"Islamabad"}/>
    
    </>
  )
}

export default App
