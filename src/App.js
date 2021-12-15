import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form/form';
import { useEffect, useState } from 'react';

function App() {
	const [messageList, setMessageList] = useState([]);

	useEffect(() => {
		if (messageList[messageList.length - 1]?.author === "HUMAN") {
			setTimeout(() => {
				handlAddMessage({ text: "Сообщение доставлено", author: "ROBOT" });
			}, 1500)
		}
	})

	const handlAddMessage = (newMessage) => {
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
		// console.log(messageList);
	};

	return (
		<div className="App">
			<Form onAddMessage={handlAddMessage} newMessageList={messageList} />
		</div>
	);
}

export default App;