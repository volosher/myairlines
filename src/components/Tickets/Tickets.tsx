import React from 'react'
import { IFlight } from '../../api/rapidApi'
import './Tickets.scss'

interface ITicketsProps {
    flights: IFlight | undefined,
}

export const Tickets: React.FC<ITicketsProps> = ({ flights }:ITicketsProps) => (!flights ? null : (

  <div className="tickets">

    {flights.Places.map((item) => (
      <span>
        <h2>DESTINATION TICKET</h2>
        <h5>Destination</h5>
        <h4>{item.CityName}</h4>
      </span>
    ))}

  </div>
))
