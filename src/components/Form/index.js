import "./form.css";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Form = ({ onSubmit }) => {

	const [value, setValue] = useState("");

	const inputRef = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValue("");
		inputRef.current.focus();
		onSubmit(value);
	}

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				"& > :not(style)": {
					m: 0, marginBottom: 1, padding: 0, width: "100%"
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
				inputRef={inputRef}
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