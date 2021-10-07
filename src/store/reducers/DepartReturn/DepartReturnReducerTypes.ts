export interface IDepartReturnState {
   depart: string,
   return: string,
}

export enum DepartReturnActionsTypes {
    SET_DEPART = 'SET_DEPART',
    SET_RETURN = 'SET_RETURN'
}

interface IDepartAction {
    type: DepartReturnActionsTypes.SET_DEPART,
    payload: string
}

interface IReturnAction {
    type: DepartReturnActionsTypes.SET_RETURN,
    payload: string
}

export type DepartReturnAction = IDepartAction | IReturnAction
