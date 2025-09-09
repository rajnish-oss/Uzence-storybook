import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DataTable from './datatable'
import type { Column } from './datatable'
import '@testing-library/jest-dom';

interface User {
  id: number
  name: string
  email: string
}

const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' }
]

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
]

describe('DataTable', () => {
  it('renders table with data', () => {
    render(<DataTable<User> data={data} columns={columns} />)

    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()

    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(<DataTable<User> data={data} columns={columns} loading />)
    expect(screen.getByLabelText('Loading data')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(<DataTable<User> data={[]} columns={columns} />)
    expect(screen.getByLabelText('No data available')).toBeInTheDocument()
  })

  it('calls onRowSelect when selectable is true', () => {
    const handleRowSelect = vi.fn()
    render(
      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={handleRowSelect}
      />
    )

    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0]) 

    expect(handleRowSelect).toHaveBeenCalledTimes(1)
    expect(handleRowSelect).toHaveBeenCalledWith([data[0]])
  })

  it('sorts data when clicking on sortable column', () => {
    render(<DataTable<User> data={data} columns={columns} />)

    const nameHeader = screen.getByText('Name')

    fireEvent.click(nameHeader)

    const rows = screen.getAllByRole('row')

    expect(rows[1]).toHaveTextContent('Alice')

    fireEvent.click(nameHeader)
    expect(rows[1]).toHaveTextContent('Bob')
  })
})
