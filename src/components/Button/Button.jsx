import styles from './Button.module.scss';
import clsx from 'clsx'

const Button = ({ type, onClick, disabled, text, className, color }) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.button_primary]: color === 'secondary',
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button;
