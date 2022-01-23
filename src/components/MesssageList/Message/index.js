import { useSelector } from "react-redux";
import { selectShowName } from "../../../store/Profile/selectors";
import { AUTHORS } from "../../../utils/constants";
import "./message.css";

export const Message = ({ author, text }) => {
  const name = useSelector(selectShowName);
  return (
    <div className={author === AUTHORS.human ? "msg-human" : "msg-bot"}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};
