import "./chatList.css";
import { Link, Outlet } from "react-router-dom";

export const ChatList = ({ chats }) => {
	return (
		<>
			<ul className="chats">
				{chats.map((chat) => (
					<li key={chat.id} className="chats-item">
						<Link
							to={`/chats/${chat.id}`}
							className="link"
						>
							{chat.name}
						</Link>
					</li>
				))}
			</ul>

			<Outlet />
		</>
	);
};