import './Button.css'

const Button = ({label, background, action}) => {
    return      <button
                    className= 'Button'
                    onClick= {action}
                >
                    {label}
                </button>
}

export default Button