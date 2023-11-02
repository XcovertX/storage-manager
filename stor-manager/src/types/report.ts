import { Units } from "@/models/units"
import { Unit } from "./unit"
import { Tenant } from "./tenant"

export type DemandReport = {
    startDate:  Date
    endDate:    Date
    moveIns:    MoveIn[]
    moveOuts:   MoveOut[]
    transfers:  Transfer[]
}

export type MoveIn = {
    tenant:     Tenant
    unit:       Unit
    date:       Date
    demandType: string
}

export type MoveOut = {
    tenant: Tenant
    unit:   Unit
    date:   Date
    reason: string
}

export type Transfer = {
    fromUnit:   Unit
    toUnit:     Unit
    date:       Date
}