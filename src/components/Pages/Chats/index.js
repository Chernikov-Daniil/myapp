import "./chats.css";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "../../Form";
import { MessageList } from "../../MesssageList";
import { AUTHORS, BUTTONNAME } from "../../../utils/constants";
import { addMessageWithReply } from "../../../store/Messages/actions";
import {
  SelectMessages,
  selectMessagesByChatId,
} from "../../../store/Messages/selectors";

export const Chats = () => {
  const { chatId } = useParams();
  const messages = useSelector(SelectMessages);
  const dispatch = useDispatch();

  const getMessagesByChatId = useMemo(
    () => selectMessagesByChatId(chatId),
    [chatId]
  );

  const messagesForCurrentChat = useSelector(getMessagesByChatId);

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessageWithReply(newMessage, chatId));
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.human, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div className="Chats">
        <MessageList messages={messagesForCurrentChat} />
        <Form onSubmit={handleSubmit} buttonName={BUTTONNAME.send} />
      </div>
    </>
  );
};
