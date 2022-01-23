import "./chatList.css";
import { NavLink, Outlet } from "react-router-dom";
import { FormChat } from "../formChat";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/Chats/actions";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const onAddChat = (newChatName) => {
    const newId = `chat${Date.now()}`;
    const newChat = {
      id: newId,
      name: newChatName,
    };
    dispatch(addChat(newChat));
  };

  return (
    <>
      <h4 className="title">Название нового чата</h4>
      <FormChat className="formChat" onSubmit={onAddChat} />
      <ul className="chats">
        {chats.map((chat) => (
          <li key={chat.id} className="chats-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
              to={`/chats/${chat.id}`}
              className="link"
            >
              {chat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
