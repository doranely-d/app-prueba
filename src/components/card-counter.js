import { useState, useEffect } from 'react';

export default function CardCounter(props) {
  // Definimos el estado de timer en formato 00:00:00
  const [timer, setTimer] = useState('00:00:00');

  // Se ejecutará cuando se cargue la página.
  useEffect(() => {
    setTimeout(() => {
      const getTime = () => {
        // Validamos si el timestamp de la url viene vacio, si no toma la fecha actual
        const date = props.timestamp ? new Date(props.timestamp).getTime() : new Date().getTime();
        //Obtener la fecha actual  
        const currentDate = new Date(); 
      
        //Diferencia horaria entre la fecha y la actual   
        let dif = date - currentDate;
     
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        if (dif >= 0) {
          seconds = Math.floor((date / 1000) % 60);
          minutes = Math.floor((date / 1000 / 60) % 60);
          hours = Math.floor((date / 1000 / 60 / 60) % 24);
        }

        return { hours, minutes, seconds };
      }

      const startTimer = () => {
        let { hours, minutes, seconds } = getTime();
        setTimer(
          (hours > 9 ? hours : '0' + hours) + ':' +
          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
          )
      }

      startTimer();
    }, 1000);
  });

  return (
    <>
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col col-lg-8 offset-lg-2">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title">Han pasado {timer}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
