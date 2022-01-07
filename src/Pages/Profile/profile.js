import { Form } from "../../components/Form/form";
import { withProfileContext } from "../../utils/ProfileContext";
import { store } from "../../store";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { showName } from "../../store/profile/actions";

export const Profile = ({ name, setName }) => {

	const storeData = useSelector((state) => state.showName);
	const dispatch = useDispatch();

	const handleChange = () => {
		dispatch(showName);
	}

	return (
		<div className="profile-form">
			<h3 className="title"> This is Profile</h3>
			<input
				type="checkbox"
				checked={showName}
				onChange={handleChange}
			/>
			{showName && <span>{name}</span>}
			<Form onSubmit={setName} />
		</div>
	);
};

export default withProfileContext(Profile);