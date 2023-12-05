import React, { useEffect } from 'react'
import { fetchTorneoById, updateTorneo } from './hooks/UpdateTorneo'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../assets/form.css'
export const EditTorneo = () => {
    const navigate=useNavigate()
    const {id}= useParams()
    const[nombre,setNombre]=useState('')
    const[fecha,setFecha]=useState('')
    useEffect(() => {
        const getTorneo = async () => {
          try {
            const torneo = await fetchTorneoById(id);
            if (torneo.data) {
              setNombre(torneo.data.nombre);
              setFecha(torneo.data.fecha);
            }
          } catch (error) {
            console.error('Error fetching torneo:', error);
          }
        };
      
        getTorneo();
      }, [id]);
      
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await updateTorneo(id,{nombre,fecha})
        navigate('/')
    }
  return (
    <>
    <h3>Edit Torneo </h3>
    <form  onSubmit={handleSubmit}>
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
        <button type='submit' className='btn btn-primary'>Editar</button>
    </form>
    </>
  )
}
