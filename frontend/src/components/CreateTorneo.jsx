import React, { useState } from 'react'
import { createTorneo, updateTorneo } from './hooks/UpdateTorneo'
import { useNavigate } from 'react-router-dom'
import '../assets/form.css'

export const CreateTorneo = () => {
  const [nombre,setNombre]=useState('')
  const [fecha,setFecha]=useState('')
  const navigate= useNavigate()
  const store=async(e)=>{
    e.preventDefault()
    await createTorneo({nombre,fecha})
    navigate('/')
  }
  return (
    <>
    <h3>Create Torneo </h3>
    <form  onSubmit={store}>
        <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input 
            value={nombre}
            onChange={ (e)=>setNombre(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>
        <div className='mb-3'>
        <label className='form-label'>Fecha</label>
        <input 
            value={fecha}
            onChange={ (e)=>setFecha(e.target.value)}
            type='date'
            className='form-control'
            />
        </div>
        <button type='submit' className='btn btn-primary'>Crear</button>
    </form>
    </>
  )
}
