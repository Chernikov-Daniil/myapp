import { AUTHORS } from "../../utils/constants";
import "./messages.css";

export const Messages = ({ newMessageList }) => {
	return (
		<div className="box">
			{newMessageList.map(({ author, text, id }) => (
				<div key={id} className={author === AUTHORS.human ? "human" : "bot"}>
					{author}: {text}
				</div>
			))}
		</div>
	);
};
