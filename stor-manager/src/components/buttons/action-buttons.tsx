type Props = {
    prospects:     number,
    unpaidCharges: number
    occupancy:     number
    cashFlow:      number
}

const ActionButtons = ({ prospects, unpaidCharges, occupancy, cashFlow }: Props) => {
    return (
        <div className='flex flex-row justify-center items-center gap-2'>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2">
              <h1 className='w-32 justify-center'>Prospect</h1>
              <h1 className='flex w-32 justify-center'>{prospects}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2">
              <h1 className='w-32 justify-center'>Unpaid Charges</h1>
              <h1 className='flex w-32 justify-center'>${unpaidCharges.toFixed(2)}</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2">
              <h1 className='w-32 justify-center'>Occupancy</h1>
              <h1 className='flex w-32 justify-center'>{occupancy.toFixed(2)}%</h1>
            </button>
            <button onClick={() => {}} className="flex flex-col bg-neutral-800 p-2">
              <h1 className='w-32 justify-center'>Cash Flow</h1>
              <h1 className='flex w-32 justify-center'>${cashFlow.toFixed(2)}</h1>
            </button>
        </div>
    )
}
export default ActionButtons