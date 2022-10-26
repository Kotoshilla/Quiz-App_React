import './Button.css'

const Button = props => {

    const cls = [
        'Button',
        [props.type]

    ]

    return (
        <button className={cls.join(' ')}
                onClick={props.onRetry}
                disabled={props.disabled}
                >
                {props.children}
        </button>
    )
}

export default Button