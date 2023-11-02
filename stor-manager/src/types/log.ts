import { Contact } from "./contact"
import { Tenant } from "./tenant"

export type TenantHistory = TenantHistoryLogItem[]

export type TenantHistoryLogItem = {
    type:   LogType
    unit:   string
    note:   string
    date:   Date
}

export type LogType = string

export type Note = {
    date:   Date
    entry:  string
}

export type Notes = Note[]

export type UnitHistory = UnitHistoryLogItem[]

export type UnitHistoryLogItem = {
    type:       LogType
    tenantId:   string
    fromDate:   Date
    toDate?:    Date
}

export type AuctionHistory = AuctionHistoryLogItem[]

export type AuctionHistoryLogItem = {
    soldDate:       Date
    tenant:         Tenant
    unitNumber:     string
    amount:         number
    buyerContact:   Contact
}

