import { useState } from "react";
import { AUTHOR } from "../../utils/constants";
import "./form.css";

export const Form = ({ onAddMessage }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValue("");
		onAddMessage({ text: value, author: AUTHOR.human });
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="submit">
				<textarea
					type="text"
					className="input"
					value={value}
					onChange={handleChange}
					placeholder="Сообщение..."
				></textarea>
				<button type="submit" className="btn">Отправить</button>
			</div>
		</form>
	);
};
