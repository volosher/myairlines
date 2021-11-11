export interface IDestinationState {
    from: string,
    to: string,
    loading?:boolean,
    error?: string
}

export enum DestinationActionsTypes {
    GET_FROM = 'GET_FROM',
    GET_TO = 'GET_TO'
}

interface IFromAction {
    type: DestinationActionsTypes.GET_FROM,
    payload: string
}

interface IToAction {
    type: DestinationActionsTypes.GET_TO,
    payload: string
}

export type DestinationAction = IFromAction | IToAction
