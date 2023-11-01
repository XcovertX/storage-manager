type Props = {
    prospects:     number
    unpaidCharges: number
    occupancy:     number
    cashFlow:      number
    retail:        number
}

const ReportsDash = ({ prospects, unpaidCharges, occupancy, cashFlow, retail }: Props) => {
    return (
        <div className='flex flex-row h-full justify-between'>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 h-fit p-2">
              <h1 className='w-32 justify-center'>Prospect</h1>
              <h1 className='flex w-32 justify-center'>{prospects}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 h-fit p-2">
              <h1 className='w-32 justify-center'>Unpaid Charges</h1>
              <h1 className='flex w-32 justify-center'>${unpaidCharges.toFixed(2)}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 h-fit p-2">
              <h1 className='w-32 justify-center'>Occupancy</h1>
              <h1 className='flex w-32 justify-center'>{occupancy.toFixed(2)}%</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 h-fit p-2">
              <h1 className='w-32 justify-center'>Cash Flow</h1>
              <h1 className='flex w-32 justify-center'>${cashFlow.toFixed(2)}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2 h-fit py-5">
              <h1 className='w-32 justify-center'>Demand</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2 h-fit py-5">
              <h1 className='w-32 justify-center'>Competitive</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2 h-fit">
                <h1 className='w-32 justify-center'>Move-In</h1>
                <h1 className='w-32 justify-center'>Move-out</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 h-fit p-2">
              <h1 className='w-32 justify-center'>Retail</h1>
              <h1 className='flex w-32 justify-center'>${retail.toFixed(2)}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2 h-fit py-5">
              <h1 className='w-32 justify-center'>Invoices</h1>
            </button>
        </div>
    )
}
export default ReportsDash