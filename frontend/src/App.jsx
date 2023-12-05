import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTorneo } from './components/CreateTorneo';
import { VerParticipante } from './components/VerParticipante';
import { ShowTorneos } from './components/ShowTorneos'
import { EditTorneo } from './components/EditTorneo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { VerBracket } from './components/VerBracket';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/ShowTorneos' element={<ShowTorneos/>}></Route>
        <Route path="/create" element={<CreateTorneo></CreateTorneo>}></Route>
        <Route path='edit/:id' element={<EditTorneo></EditTorneo>}></Route>
        <Route path='jugar/:torneoId' element={<VerParticipante></VerParticipante>}></Route>
        <Route path='bracket/:torneoId' element={<VerBracket/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
