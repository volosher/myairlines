export interface ITicketsState {
    ticket: string
}

export enum TicketsActionsTypes {
    FIND_TICKETS = 'FIND_TICKETS',

}

interface ITicketsAction {
    type: TicketsActionsTypes.FIND_TICKETS,
    payload: string
}

export type TicketsAction = ITicketsAction
