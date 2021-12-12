import "./button.css"

export const Button = ({ title, onButtonClick }) => {
	return (
		<button onClick={() => onButtonClick('Hello world')} className='btn'>{title}</button>
	)
}