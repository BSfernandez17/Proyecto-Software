import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ShowParticipante } from './ShowParticipante'
import { CreateParticipante } from './CreateParticipante'
export const VerParticipante = () => {
  const navigate = useNavigate()
  const {torneoId}= useParams()
  
  return (
    <>
      <div style={{ float:'left',width: '50%' }}>
        <ShowParticipante torneoId={torneoId}></ShowParticipante>
        <Link  to={`/bracket/${torneoId}`} className='btn btn-success btn-lg text-white'>JUGAR</Link>
      </div>
      <div style={{float:'right',width:'50%'}}>
        <CreateParticipante torneo_id={torneoId}></CreateParticipante>
      </div>

    </>
  )
}

