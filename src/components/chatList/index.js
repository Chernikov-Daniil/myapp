import "./chatList.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const chatList = [
	{ chat: "chat1", id: 1 },
	{ chat: "chat2", id: 2 },
	{ chat: "chat3", id: 3 },
	{ chat: "chat4", id: 4 },
	{ chat: "chat5", id: 5 },
];

export const ChatList = (props) => {
	return (
		<div className="chatList">
			{chatList.map(({ chat, id }) => (
				<List key={id}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary={chat} />
						</ListItemButton>
					</ListItem>
				</List>
			))}
		</div>
	);
};