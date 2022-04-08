import "./message.css";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../store/Profile/selectors";
import { AUTHORS } from "../../../utils/constants";

export const Message = ({ author, text }) => {
  const name = useSelector(selectUserName);
  console.log(name);
  return (
    <div className={author === AUTHORS.human ? "msg-human" : "msg-bot"}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};
