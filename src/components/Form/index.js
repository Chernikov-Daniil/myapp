import "./form.css";
import { useEffect, useRef, useState } from "react";
import { AUTHORS } from "../../utils/constants";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Form = ({ onAddMessage }) => {
	const [value, setValue] = useState("");

	const inputRef = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		setValue("");
		inputRef.current.focus();
		onAddMessage({
			text: value,
			author: AUTHORS.human,
			id: `msg-${Date.now()}`
		});
	}

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<Box
			component="form"
			onSubmit={handleClick}
			sx={{
				"& > :not(style)": {
					m: 0, marginBottom: 1, padding: 0, width: "95%"
				}
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="filled-basic"
				label="Сообщение..."
				variant="filled"
				value={value}
				ref={inputRef}
				onChange={handleChange}
			/>
			<Button
				type="submit"
				variant="outlined"
				size="small"
				endIcon={<SendIcon />}
			>
				Отправить
			</Button>
		</Box >
	);
};