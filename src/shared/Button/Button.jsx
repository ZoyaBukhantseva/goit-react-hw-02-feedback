import styles from "./button.module.css"
import PropTypes from "prop-types"


const Button= ({children, onClick, type}) => {
    console.log (children)
        return<button onClick={onClick} className={styles.btn} type={type}>{children}</button>
    }
  
export default Button;

Button.defaultProps = {
    type: "submit",
}

Button.prototypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    children: PropTypes.element.isRequired,}