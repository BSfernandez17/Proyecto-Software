import React, { useState } from 'react'
import { createParticipante,updateParticipante } from './hooks/UpdateParticipante'
import '../assets/form.css'
import { useNavigate } from 'react-router-dom'
export const CreateParticipante = ({torneo_id}) => {
    const [nombre,setNombre]= useState('')
    const [club_id,setClubId]=useState('')
    const navigate=useNavigate()
    const store = async (e) => {
        e.preventDefault();
        console.log({ nombre, torneo_id, club_id });
        await createParticipante({ nombre, torneo_id, club_id });
        navigate('/');
    }
    
  return (
    <>
    <h3>Añadir participante </h3>
    <form  onSubmit={store} method='POST'>
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
        <label className='form-label'>Club Id</label>
        <input 
            value={club_id}
            onChange={ (e)=>setClubId(e.target.value)}
            type='number'
            className='form-control'
            />
        </div>
        <button type='submit' className='btn btn-primary'>Añadir</button>
    </form>
    </>
    )
}
