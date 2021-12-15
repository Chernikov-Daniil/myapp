import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form/form';
import { useState } from 'react';

function App() {
	const [messageList, setMessageList] = useState([]);

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