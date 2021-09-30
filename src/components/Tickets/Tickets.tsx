import React from 'react'
import { IFlight } from '../../api/rapidApi'
import './Tickets.scss'

interface ITicketsProps {
  flights: IFlight | undefined,
}

export const Tickets: React.FC<ITicketsProps> = ({ flights }: ITicketsProps) => (
  (!flights) ? null : (

    <>
      {flights.Carriers.map((item, index) => (

        <div className="ticket" key={item.Name}>
          <div className="card text-center ">
            <div className="card-header">
              Company:
              {' '}
              {item.Name}

            </div>
            <div className="card-body">
              <h5 className="card-title">Ticket</h5>
              <p className="card-text">
                Boarding:
                { ' '}
                {flights.Places[0].Name}
              </p>
              <p className="card-text">
                Landing:
                { ' '}
                {flights.Places[1].Name}

              </p>
              <a href="/" className="btn btn-primary">
                Buy ticket for
                <br />
                {flights.Currencies[0].Symbol}

                {flights.Quotes[index].MinPrice}

              </a>
            </div>
            <div className="card-footer text-muted">
              Departure date:
              {' '}
              {flights.Quotes[index].OutboundLeg.DepartureDate}
            </div>
          </div>
        </div>
      ))}
      {' '}

    </>
  ))
