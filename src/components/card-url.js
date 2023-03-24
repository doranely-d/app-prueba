import { useState, useEffect } from 'react';

export default function CardUrl(props) {
  return (
    <>
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col col-lg-8 offset-lg-2">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title"><small className="text-muted fw-light">{props.url}</small></h1>
            </div>
          </div>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Prueba Automata</h1>
            <p className="fs-5 text-muted">Esto es una prueba para aplicar en la vacante en Nextjs.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
