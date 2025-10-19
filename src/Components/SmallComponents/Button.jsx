import "./button.css"
const Button = ({text,img}) => {
  return (
    <button className="btn">{text} {img}</button>
  )
}

export default Button