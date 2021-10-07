import React from 'react'
import { IFlight } from '../../api/rapidApi'
import './Tickets.scss'
import imageTrace from '../../img/plane_trace.png'
import { filterFlightsFrom, filterFlightsTo } from '../../utills/filterFlightsById'

interface ITicketsProps {
  flights: IFlight | undefined,
}

export const Tickets: React.FC<ITicketsProps> = ({ flights }: ITicketsProps) => (
  (!flights) ? null : (

    <>
      {flights.Quotes.map((item, index) => (

        <div className="ticket" key={item.MinPrice}>
          <div className="card text-center ">
            <div className="card-header">
              Air Company:
              {' '}
              {flights.Carriers[index].Name}

            </div>
            <div className="card-body ">
              <div className="ticket-body">
                <div className="ticket-from info">
                  <p className="info-title">Country</p>
                  <p className="info-value">
                    {filterFlightsFrom(flights, item).CountryName}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.OriginId)[0].CountryName} */}
                  </p>
                  <p className="info-title">City</p>
                  <p className="card-text info-value">
                    {filterFlightsFrom(flights, item).CityName}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.OriginId)[0].CityName} */}
                  </p>
                  <p className="info-title">Station</p>
                  <p className="card-text info-value">
                    {filterFlightsFrom(flights, item).Name}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.OriginId)[0].Name} */}
                  </p>
                </div>
                <div className="ticket-img">

                  <img src={imageTrace} className="img-flight" alt="plane_trace" />

                  <a href="/" className="btn btn-primary">
                    Buy ticket for
                    <br />
                    {flights.Currencies[0].Symbol}

                    {item.MinPrice}

                  </a>
                </div>
                <div className="ticket-to info">
                  <p className="info-title">Country</p>
                  <p className="info-value">
                    {filterFlightsTo(flights, item).CountryName}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.DestinationId)[0].CountryName} */}
                  </p>
                  <p className="info-title">City</p>
                  <p className="card-text info-value">
                    {filterFlightsTo(flights, item).CityName}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.DestinationId)[0].CityName} */}
                  </p>
                  <p className="info-title">Station</p>
                  <p className="card-text info-value">
                    {filterFlightsTo(flights, item).Name}
                    {/* {flights.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.DestinationId)[0].Name} */}
                  </p>
                </div>
              </div>

            </div>
            <div className="card-footer ">
              Departure date:
              {' '}
              {flights.Quotes[index].OutboundLeg.DepartureDate.substring(0, 10)}
            </div>
          </div>
        </div>
      ))}
      {' '}

    </>
  ))
