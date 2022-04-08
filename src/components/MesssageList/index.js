import { Message } from "./Message";

export const MessageList = ({ messages }) => (
  <div className="wrp-chat">
    {messages.map(({ author, text, id }) => (
      <Message key={id} author={author} text={text} />
    ))}
  </div>
);
