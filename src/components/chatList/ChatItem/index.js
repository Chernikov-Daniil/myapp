import "../chatList.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../../store/Chats/actions";
import ClearIcon from "@mui/icons-material/Clear";

export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChat(chat.id));
  };

  return (
    <li className="chats-item">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "orange" : "black",
        })}
        to={`/chats/${chat.id}`}
        className="link"
      >
        {chat.name}
      </NavLink>
      <ClearIcon
        className="iconDelete"
        color="primary"
        sx={{ fontSize: 16 }}
        onClick={handleDelete}
      />
    </li>
  );
};
