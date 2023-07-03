import classes from './Button.module.css';

const Button = props => {
    return (<button className={`${classes.button} ${props.isCancel ? classes.isCancel : null}`} type={props.type || 'submit'}>{props.label}</button>)
}

export default Button;