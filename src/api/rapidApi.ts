import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices'
axios.defaults.headers.common['x-rapidapi-host'] = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
axios.defaults.headers.common['x-rapidapi-key'] = '9545c5caefmshc0af048c575ab1cp118982jsn3c9ab82c4e17'

interface ICurrency {
  Currencies: Array<ICurrencyItem>
}

/// ///// Flights

export interface IOutboundLeg {
  OriginId: number,
  DestinationId: number,
  DepartureDate: string,
}

export interface IQuotesItem {
  QuoteId: number,
  MinPrice: number,
  Direct: boolean,
  OutboundLeg: IOutboundLeg,
  QuoteDateTime: string,
}

export interface IPlacesItem {
  Name: string,
  Type: string,
  PlaceId: number,
  IataCode: string,
  SkyscannerCode: string,
  CityName: string,
  CityId: string,
  CountryName: string,
}
interface ICurrenciesItem {
  Code: string,
  Symbol: string,
  ThousandsSeparator: string,
  DecimalSeparator: string,
  SymbolOnLeft: boolean,
  SpaceBetweenAmountAndSymbol: boolean,
  RoundingCoefficient: number,
  DecimalDigits: number
}
interface ICarriersItem {
  Name: string
  CarrierId: number
}

interface IRoutesItem {
  Price: number,
  QuoteDateTime: string,
  OriginId: number,
  DestinationId: number,
  QuoteIds: [number]
}

export interface IFlight {
  Quotes: Array<IQuotesItem>,
  Carriers: Array<ICarriersItem>,
  Places: Array<IPlacesItem>,
  Currencies: Array<ICurrenciesItem>,
  Routes: Array<IRoutesItem>,
}

/// ///Flights
interface ICities {
  Places: Array<ICityItem>
}

export interface ICityItem {
  PlaceId: string,
  PlaceName: string,
  CountryId: string,
  RegionId: string,
  CityId: string,
  CountryName: string,
}

export interface ICurrencyItem {
  Code: string,
  Symbol: string,
  ThousandsSeparator: string,
  DecimalSeparator: string,
  SymbolOnLeft: boolean,
  SpaceBetweenAmountAndSymbol: boolean,
  RoundingCoefficient: number,
  DecimalDigits: number

}

export async function getFlights(currency: string, from: string, to: string, date: string): Promise<IFlight> {
  const response: AxiosResponse = await axios.get<IFlight>(`/browseroutes/v1.0/US/${currency}/en-US/${from}/${to}/${date}`, {
    params: { inboundpartialdate: date },

  })
  console.log(response.data)
  return response.data
}

export async function getCurrency(): Promise<ICurrency> {
  const response: AxiosResponse = await axios.get<ICurrency>('/reference/v1.0/currencies', {
  })

  return response.data
}

export async function getCity(searchQuery: string): Promise<ICities> {
  const response: AxiosResponse = await axios.get<ICities>('/autosuggest/v1.0/UK/GBP/en-GB/', {
    params: { query: searchQuery },
  })
  return response.data
}
