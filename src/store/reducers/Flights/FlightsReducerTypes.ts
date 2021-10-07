import { IFlight } from '../../../api/rapidApi'

export interface IFlightState {
    flights:IFlight }

export enum FlightsActionsTypes {
    GET_FLIGHTS = 'GET_FLIGHTS',
}

interface IGetFlightAction {
    type: FlightsActionsTypes.GET_FLIGHTS,
    payload: IFlight
}

export type DepartReturnAction = IGetFlightAction
