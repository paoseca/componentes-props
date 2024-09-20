import React from 'react'

const Cartao = (props) => {
  return (
    <div class='card'>
        <div className="card-heater text-muted">
            {props.cabecalho}   
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
  )
}

export default Cartao