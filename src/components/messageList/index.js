import { Message } from "./Message";
import "./messageList.css";

export const MessageList = ({ messages }) => {
  return (
    <div className="box">
      {messages.map(({ text, author, id }) => (
        <Message key={id} author={author} text={text} />
      ))}
    </div>
  );
};
