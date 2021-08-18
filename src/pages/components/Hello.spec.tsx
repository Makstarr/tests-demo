import { render, screen } from '@testing-library/react'
import Hello from './Hello'

fit('Hello world rendering', () => {
	render(<Hello />)
	const myElement = screen.getByText(/Hello/)
	expect(myElement).toBeInTheDocument()
})