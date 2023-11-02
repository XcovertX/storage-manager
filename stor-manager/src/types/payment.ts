import { Card } from "./card"
import { Rent, Retail } from "./product"

export type PaymentHistory = Payment[]

export type Payment = {
    for:    Rent | Retail
    type:   string
    date:   Date
}

export type AutoPay = {
    rent:           Rent
    withdrawDate:   Date
    card:           Card
    status:         string
}

