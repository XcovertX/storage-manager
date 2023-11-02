import { Notes, UnitHistory } from "./log"

export type Unit = {
    unitNumber: string
    type:       string
    dementions: Dimensions
    notes:      Notes
    history:    UnitHistory
}

export type Dimensions = {
    width:      number
    length:     number
    height?:    number
    doorWidth?: number
}