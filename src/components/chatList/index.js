import "./chatList.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/Chats/actions";
import { ChatItem } from "./ChatItem";
import { Form } from "../Form";
import { BUTTONNAME } from "../../utils/constants";

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
      <div className="wrp-form">
        <h3 className="title">Название нового чата</h3>
        <Form onSubmit={onAddChat} buttonName={BUTTONNAME.add} />
      </div>

      <ul className="chats">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </ul>
      <Outlet />
    </>
  );
};
