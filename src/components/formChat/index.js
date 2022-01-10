import { useState } from "react";
import "./formChat.css"

export const FormChat = ({ onSubmit }) => {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(value !== '') {
			setValue("");
			onSubmit(value);
		}

	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input className="form-input" type="text" value={value} onChange={handleChange} />
			<input className="form-btn" type="submit" value="Добавить"/>
		</form>
	)
}