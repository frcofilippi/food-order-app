import classes from './Button.module.css';

const Button = props => {
    return (<button onClick={props.onClick} className={`${classes.button} ${props.isCancel ? classes.isCancel : null}`} type={props.type || 'submit'} >{props.label}</button>)
}

export default Button;