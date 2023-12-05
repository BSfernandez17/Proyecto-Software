import { useParams } from 'react-router-dom';
import { resultados } from "./hooks/FetchTorneos";
import { useEffect, useState } from "react";
import '../assets/VerBracket.css'; // Importa tu archivo CSS para estilos

export const VerBracket = () => {
  const { torneoId } = useParams();
  const { resultados: enfrentamientos } = resultados(torneoId);

  // Organizar enfrentamientos por rondas
  const enfrentamientosPorRonda = enfrentamientos.reduce((acc, torneo) => {
    torneo.forEach(enfrentamiento => {
      const ronda = enfrentamiento.Ronda;
      if (!acc[ronda]) {
        acc[ronda] = [];
      }
      acc[ronda].push(enfrentamiento);
    });
    return acc;
  }, {});

  // Calcula el ancho de cada caja de ronda
  const roundWidth = 300;

  const renderBracket = () => {
    let xPosition = 0;
    let yPosition = 0;

    const rondasKeys = Object.keys(enfrentamientosPorRonda);
    const ultimaRonda = rondasKeys[rondasKeys.length - 1];

    return (
      <div className="bracket-container">
        {rondasKeys.map(ronda => {
          const enfrentamientosEnRonda = enfrentamientosPorRonda[ronda];
          const esUltimaRonda = ronda === ultimaRonda;

          const roundComponent = (
            <div
              key={ronda}
              className={`round round-${ronda} ${esUltimaRonda ? 'last-round' : ''}`}
              style={{ transform: `translate(${xPosition}px, ${yPosition}px)` }}
            >
              <div className="round-label">Ronda {ronda}</div>
              {enfrentamientosEnRonda.map((enfrentamiento, enfrentamientoIndex) => (
                <div key={enfrentamientoIndex} className="match">
                  <div className="team-container">
                    <div className={`team ${esUltimaRonda && enfrentamiento['GANADOR'] === enfrentamiento['Participante 1'] ? 'winner' : ''}`}>
                      {enfrentamiento['Participante 1']}
                    </div>
                    <div className="vs">VS</div>
                    <div className={`team ${esUltimaRonda && enfrentamiento['GANADOR'] === enfrentamiento['Participante 2'] ? 'winner' : ''}`}>
                      {enfrentamiento['Participante 2']}
                    </div>
                  </div>
                  <div className="arrow">&#8594;</div>
                </div>
              ))}
            </div>
          );

          // Ajusta las posiciones para la siguiente ronda
          xPosition += roundWidth;

          return roundComponent;
        })}

        {/* Agrega la caja del campeón */}

      </div>
    );
  };

  return (
    <div>
      {renderBracket()}
    </div>
  );
};
