import "./chatList.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export const ChatList = ({ chats }) => {
	return (
		<>
			<ul className="chats">
				{chats.map((chat) => (
					<li key={chat.id} className="chats-item">
						<NavLink
							style={({ isActive }) => ({ color: isActive ? "orange" : "black" })}
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