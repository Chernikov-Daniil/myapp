import { AUTHORS } from "../../../utils/constants";
import { withProfileContext } from "../../../utils/ProfileContext";

export const Message = ({ author, text, name }) => {

	return (
		<div
			className={author === AUTHORS.human ? "human" : "bot"}
		>
			{author === AUTHORS.human ? name : author}: {text}
		</div>
	);
};

export default withProfileContext(Message);