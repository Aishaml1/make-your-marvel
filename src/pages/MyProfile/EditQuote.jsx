import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditQuote(props) {
	const location = useLocation()
	const formElement = useRef()

	const [formData, setFormData] = useState(location.state.quote)

	const [validForm, setValidForm] = useState(true)

	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
		evt.preventDefault()
		props.handleUpdateQuote(formData)
	}

	return (
		<>
			<h1>Edit Quote</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Quote
					</label>
					<input
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						value={formData.name}
						required
						onChange={handleChange}
					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>
						Save Quote
					</button>
				</div>
				<div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditQuote