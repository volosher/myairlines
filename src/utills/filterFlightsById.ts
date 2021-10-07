import {
  IFlight, IPlacesItem, IQuotesItem,
} from '../api/rapidApi'

export const filterFlightsFrom = (arr:IFlight, item:IQuotesItem): IPlacesItem => {
  const result = arr.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.OriginId)[0]
  return result
}

export const filterFlightsTo = (arr:IFlight, item:IQuotesItem): IPlacesItem => {
  const result = arr.Places.filter((elem) => elem.PlaceId === item.OutboundLeg.DestinationId)[0]
  return result
}
