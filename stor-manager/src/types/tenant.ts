import { Address } from "./address"
import { Card } from "./card"
import { Contact } from "./contact"
import { Notes, TenantHistory } from "./log"
import { AutoPay, PaymentHistory } from "./payment"
import { Rent } from "./product"
import { Unit } from "./unit"

export type Tenant = {
    tenantId:           string
    firstname:          string
    lastname:           string
    address:            Address
    phone:              string
    altPhone?:          string
    altContact:         Contact
    property:           string
    units:              Unit[]
    email:              string
    startDate:          Date
    status:             string
    military:           boolean
    commandingOfficer?: string
    dutyStation?:       string
    paymentHistory:     PaymentHistory 
    historyLog:         TenantHistory
    gateAccess:         string
    altGateAccess?:     string
    notes:              Notes
    unpaidCharges:      Rent[]
    cards:              Card[]
    autopay:            AutoPay[]
}
