'use client'
import {
    Column,
    Table as ReactTable,
    PaginationState,
    ColumnDef,
    OnChangeFn,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { ReactNode, useEffect, useState } from 'react';
// import AddToCartButton from './AddToCartButton';
// import ViewItemButton from './ViewItemButton';
import { Tenant } from '@/models/tenant';

type Props = {
    tenants: Tenant[]
}

type Buttons = {
  buttons: { view: ReactNode, add: ReactNode }
}
type TenantRow = {
    id:         string
    firstName:  string
    lastName:   string
    street:     string
} 

  const columnHelper = createColumnHelper<TenantRow>()
  const columns = [
    columnHelper.accessor('id', {
      header: 'Tenant Id'
    }),
    columnHelper.accessor('firstName', {
        header: 'First Name'
    }),
    columnHelper.accessor('lastName', {
        header: 'Last Name'
    }),
    columnHelper.accessor('street', {
        header: 'Street'
    }),
    // columnHelper.accessor('buttons', {
    //   header: '',
    //   cell: info => {
    //    return (
    //     <div className="flex flex-row gap-4 justify-center">
    //       {info.getValue().view}
    //       {info.getValue().add}
    //     </div>)
        
        
    //   }
    // })
  ]

const AllTenants = ({ tenants }: Props) => {
  const [data, setData] = useState<TenantRow[]>([])
    
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
    
  })
  
  useEffect(() => {
    let data:TenantRow[] = [];
    tenants.map(t => {
    data.push(
      {
        id:         t.tenantId,
        firstName:  t.primaryContact?.firstName,
        lastName:   t.primaryContact?.lastName,
        street:     t.primaryContact?.address?.street
       }
    )})
    setData(data);
    table.setPageSize(20);
  }, [tenants, table])

  // function for alternating row colors  
  function alternateColor(i:number) {
      if(i%2 == 0) {
          return 'bg-sky-200'
      }
      return 'bg-sky-100'
  }

  return(
    <div className=" flex flex-col ">
      <div className="flex flex-row justify-between bg-sky-700 p-5 text-2xl text-white items-center font-bold">
        <h1 className=''>
          All Products Offered
        </h1>
        <h1>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </h1>
      </div>

      <table className='bg-sky-500 text-white shadow-xl'>
        <thead className='bg-sky-900'>
          {table.getHeaderGroups().map((headerGroup, i) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='text-start p-2'>
                {header.isPlaceholder
                  ? null
                  : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i)=> (
            <tr key={row.id}  className={`${alternateColor(i)} text-sky-700`}>
              {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='p-2 text-start'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-center items-center  m-5  ">
        <div className="flex bg-white p-5 rounded-lg shadow-xl gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        </div>
      </div> 
    </div>
    )
}

export default AllTenants