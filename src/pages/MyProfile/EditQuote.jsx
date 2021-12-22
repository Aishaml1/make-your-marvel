import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { editQuote } from "../../services/characterService"

function EditQuote(props) {
	const navigate = useNavigate()
	const location = useLocation()

	console.log("location.state", location.state)
	const [formData, setFormData] = useState("")

	const handleChange = evt => {
		setFormData(evt.target.value)
	}

	const handleUpdateQuote = async (e) => {
		e.preventDefault()
		try {
			const formatted = {
				content: formData
			}
			await editQuote(location.state.characterId, location.state.quoteId, formatted)
			navigate("/profile")
		} catch (error) {
			throw error
		}
	}

	useEffect(() => {
		console.log("this is firing off")
		setFormData(location.state.content)
	}, [])

	return (
		<>
			<h1>Edit Quote</h1>
			<form autoComplete="off" onSubmit={handleUpdateQuote}>
				<input
					type="text"
					className="form-control"
					id="name-input"
					name="name"
					value={formData}
					required
					onChange={(e) => handleChange(e)}
				/>
				<button
					type="submit"

				>
					Update Quote
				</button>
				<Link to="/">Cancel</Link>
			</form>
		</>
	)
}

export default EditQuote