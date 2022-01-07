import { Router } from "./components/Router/router";
import "./App.css";
import { ProfileContext } from "./utils/ProfileContext";
import { useState } from "react";
import { Provider } from 'react-redux';
import { store } from "./store";

export default function App() {
	const [name, setName] = useState('default');
	return (
		<Provider store={store}>
			<ProfileContext.Provider value={{ name, setName }}>
				<Router />
			</ProfileContext.Provider >
		</Provider>
	)
}