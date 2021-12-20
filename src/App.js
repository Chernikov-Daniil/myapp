import { useEffect, useState } from "react";
import { ChatList } from "./components/chatList/index";
import { Form } from "./components/Form/index";
import { Messages } from "./components/messages/index";
import "./App.css";
import { AUTHORS } from "./utils/constants";

export default function App() {
	const [messageList, setMessageList] = useState([]);

	const handleMessage = (newMessage) => {
		setMessageList((prevMessage) => [...prevMessage, newMessage]);
	};

	useEffect(() => {
		let timeout;
		timeout = setTimeout(() => {
			if (messageList[messageList.length - 1]?.author === AUTHORS.human) {
				handleMessage({
					text: "Сообщение доставлено",
					author: AUTHORS.bot,
					id: `msg-${Date.now()}`
				});
			}
		}, 1500);

		return () => {
			clearTimeout(timeout);
		};
	}, [messageList]);

	return (
		<div className="App">
			<ChatList />
			<div className="wrp">
				<Messages newMessageList={messageList} />
				<Form onAddMessage={handleMessage} />
			</div>
		</div>
	);
}