import { Form } from "../../Form";
import "./profile.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setName, toggleName } from "../../../store/Profile/actions";
import {
  selectShowName,
  selectUserName,
} from "../../../store/Profile/selectors";
import { BUTTONNAME } from "../../../utils/constants";

export const Profile = () => {
  const showName = useSelector(selectShowName, shallowEqual);
  const userName = useSelector(selectUserName, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleName);
  };

  const handleSubmit = (newName) => {
    dispatch(setName(newName));
  };

  return (
    <div className="profile-form">
      <h3 className="title"> This is Profile</h3>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} buttonName={BUTTONNAME.change} />
    </div>
  );
};
