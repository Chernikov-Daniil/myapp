import { useEffect, useRef, useState } from "react";
import { Form } from "../../components/Form/form";
import { MessageList } from "../../components/messageList/messageList";
import "./chats.css";
import { AUTHORS } from "../../utils/constants"
import { Navigate, useParams } from "react-router-dom";

export const Chats = ({ messages, onAddMessage }) => {

	const { chatId } = useParams();

	const handleSubmit = (text) => {
		const newMessage = { text, author: AUTHORS.human, id: `msg-${Date.now()}` };
		onAddMessage(newMessage, chatId);
	}

	useEffect(() => {
		let timeout;
		if (messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.human) {
			timeout = setTimeout(() => {
				onAddMessage(
					{
						text: "Сообщение доставлено",
						author: AUTHORS.bot,
						id: `msg-${Date.now()}`
					},
					chatId
				);
			}, 1500);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [messages]);

	if (!messages[chatId]) {
		return <Navigate to="/chats" replace />;
	}

	return (
		<>
			<div className="Chats">
				<MessageList messages={messages[chatId]} />
				<Form onSubmit={handleSubmit} />
			</div>
		</>
	);
}