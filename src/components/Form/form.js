import { useEffect, useState } from "react";
import "./form.css";

export const Form = ({ onAddMessage, newMessageList }) => {
	const [value, setValue] = useState("");

	// useEffect(() => {
	//   console.log("Robot: Сообщение доставлено");
	// }, [newMessageList]);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (newMessageList[newMessageList.lenght - 1]?.author === "HUMAN") {
			setTimeout(() => {
				onAddMessage({ text: "Сообщение доставлено", author: "ROBOT" });
			}, 1000);
		}
		console.log(newMessageList);
	}, [newMessageList, onAddMessage]);

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
			<input
				type="text"
				className="input"
				value={value}
				onChange={handleChange}
				placeholder="Сообщение..."
			></input>
		</form>
	);
};
