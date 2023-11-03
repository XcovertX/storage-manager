export type Rent = {
    name:       string
    dueDate:    Date
    from:       Date
    to:         Date
    amount:     number
    quantity:   number
    taxable:    boolean
}

export type Retail = {
    name:       string
    amount:     number
    quantity:   number
    taxable:    boolean
}