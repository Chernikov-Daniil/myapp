import './App.css';
import { Form } from './components/Form/form';
import { useEffect, useState } from 'react';
import { Messages } from './components/messageList/messages';
import { AUTHOR } from './utils/constants';


function App() {
	const [messageList, setMessageList] = useState([]);

	const handlAddMessage = (newMessage) => {
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	};

	useEffect(() => {
		let timeout;
		if (messageList[messageList.length - 1]?.author === AUTHOR.human) {
			timeout = setTimeout(() => {
				handlAddMessage({ text: "Сообщение доставлено", author: AUTHOR.bot });
			}, 1500)
		}

		return () => {
			clearTimeout(timeout)
		};
	}, [messageList])

	return (
		<div className="App">
			<div className='container'>
				<Messages newMessageList={messageList} />
				<Form onAddMessage={handlAddMessage} />
			</div>
		</div>
	);
}

export default App;