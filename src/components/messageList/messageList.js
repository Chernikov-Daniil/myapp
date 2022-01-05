import { useRef } from "react";
import { useEffect } from "react";
import { AUTHORS } from "../../utils/constants";
import "./messageList.css";


export const MessageList = ({ messages }) => {


	return (
		<div className="box">
			{messages.map(({ text, author, id }) => (
				<div
					key={id}
					className={author === AUTHORS.human ? "human" : "bot"}
				>
					{author}: {text}
				</div>
			))}
		</div>
	);
};