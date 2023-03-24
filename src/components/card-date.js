import { useState, useEffect } from 'react';

export default function CardDate(props) {
  // Definimos los estados date, hours y options
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState('00:00:00');
  const [options, setOp] = useState({});

  // Se ejecutará cuando se cargue la página.
  useEffect(() => {
    setTimeout(() => {
      const toDate = () => {
        // Validamos si el timestamp de la url viene vacio, si no toma la fecha actual
        const ndate = props.timestamp ? new Date(props.timestamp) : new Date();  
        return ndate;
      }

      const toHours = () => {
        // Validamos si el timestamp de la url viene vacio, si no toma la fecha actual
        const date = props.timestamp ? new Date(props.timestamp).toLocaleTimeString() : new Date().toLocaleTimeString();
        return date;
      }

      setDate(toDate());
      setHours(toHours());
      
      // Opciones para mostrar el formato en español de la fecha
      const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      setOp(options);
      }, 2000);
  });

  return (
    <>
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col col-lg-8 offset-lg-2">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title">Fecha:<small className="text-muted fw-light"> {date.toLocaleDateString('es-ES', options)}</small></h1>
              <h2 className="card-title">Hora:<small className="text-muted fw-light"> {hours}</small></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
