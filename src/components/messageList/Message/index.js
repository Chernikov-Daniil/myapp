import { shallowEqual, useSelector } from "react-redux";
import { selectUserName } from "../../../store/Profile/selectors";
import { AUTHORS } from "../../../utils/constants";

export const Message = ({ author, text }) => {
  const name = useSelector(selectUserName, shallowEqual);
  return (
    <div className={author === AUTHORS.human ? "human" : "bot"}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};
