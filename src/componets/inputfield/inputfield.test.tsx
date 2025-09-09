import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import InputField from './inputfield'

describe('InputField', () => {
  it('renders with a label and placeholder', () => {
    render(<InputField label="Username" placeholder="Enter username" />)

    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(<InputField label="Email" placeholder="Enter email" onChange={handleChange} />)

    const input = screen.getByLabelText('Email') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test@example.com' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('test@example.com')
  })

  it('shows helper text', () => {
    render(<InputField label="Phone" helperText="We will not share your number" />)
    expect(screen.getByText('We will not share your number')).toBeInTheDocument()
  })

  it('shows error message when invalid', () => {
    render(<InputField label="Password" invalid errorMessage="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('toggles password visibility', () => {
    render(<InputField label="Password" type="password" />)

    const input = screen.getByLabelText('Password') as HTMLInputElement
    expect(input.type).toBe('password')

    const toggleBtn = screen.getByRole('button') // only button in this case
    fireEvent.click(toggleBtn)

    expect(input.type).toBe('text')
  })

  it('clears input when clearable', () => {
    const handleChange = vi.fn()
    render(<InputField label="Search" value="abc" clearable onChange={handleChange} />)

    const clearBtn = screen.getByRole('button')
    fireEvent.click(clearBtn)

    expect(handleChange).toHaveBeenCalled()
    // the mocked event sets value to '' — no actual DOM update because value is controlled externally
  })

  it('shows loading spinner when loading', () => {
    render(<InputField label="Email" loading />)
    expect(screen.getByRole('status', { hidden: true }) || screen.getByLabelText(/loading/i) || screen.getByTestId(/loader/i)).toBeDefined()
    // Above line tries multiple approaches; in your code Loader2 has no aria attributes,
    // you can add data-testid="loader" to Loader2 in InputField for better testing.
  })

  it('disables input when disabled', () => {
    render(<InputField label="Disabled Field" disabled />)
    const input = screen.getByLabelText('Disabled Field') as HTMLInputElement
    expect(input).toBeDisabled()
  })
})
