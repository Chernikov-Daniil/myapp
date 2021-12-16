import './messages.css'

export const Messages = ({ newMessageList }) => {
	return (
		<div className="wrp">
			{newMessageList.map(({ text, author }) => (
				<div className="message">
					{author}: {text}
				</div>
			))}
		</div>
	)
}