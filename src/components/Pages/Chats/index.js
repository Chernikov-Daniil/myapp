import { useEffect } from "react";
import { Form } from "../../Form";
import { MessageList } from "../../messageList";
import "./chats.css";
import { AUTHORS } from "../../../utils/constants";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/Messages/actions";
import { SelectMessages } from "../../../store/Messages/selectors";

export const Chats = () => {
  const { chatId } = useParams();
  const messages = useSelector(SelectMessages);
  const dispatch = useDispatch();

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessage(newMessage, chatId));
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.human, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeout;
    if (
      messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.human
    ) {
      timeout = setTimeout(() => {
        onAddMessage(
          {
            text: "Сообщение доставлено",
            author: AUTHORS.bot,
            id: `msg-${Date.now()}`,
          },
          chatId
        );
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, chatId, onAddMessage]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div className="Chats">
        <MessageList messages={messages[chatId]} />
        <Form onSubmit={handleSubmit} />
      </div>
    </>
  );
};
