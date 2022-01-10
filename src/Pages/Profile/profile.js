import { Form } from "../../components/Form/form";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setName, SET_NAME, toggleName } from "../../store/profile/actions";

export const Profile = () => {

	const showName = useSelector((state) => state.showName);
	const userName = useSelector((state) => state.name);
	const dispatch = useDispatch();

	const handleChange = () => {
		dispatch(toggleName);
	}

	const handleSubmit = (newName) => {
		dispatch(setName(newName));
	}

	return (
		<div className="profile-form">
			<h3 className="title"> This is Profile</h3>
			<input
				type="checkbox"
				checked={showName}
				onChange={handleChange}
			/>
			{showName && <span>{userName}</span>}
			<Form onSubmit={handleSubmit} />
		</div>
	);
};