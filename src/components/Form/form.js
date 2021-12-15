import { useEffect, useState } from "react";
import "./form.css";

export const Form = ({ onAddMessage, newMessageList }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setValue("");
		onAddMessage({ text: value, author: "HUMAN" });
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="wrp">
				{newMessageList.map(({ text, author }) => (
					<div className="message">
						{author}: {text}
					</div>
				))}
			</div>
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
