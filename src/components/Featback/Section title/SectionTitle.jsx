import PropTypes from "prop-types";

import styles from "..//featback.module.css";
const SectionTitle=({children, title})=>{
    return(
        <div className={styles.mainwrapper}>
        <h3 className ={styles.title}> {title}</h3>
       {children} 
        </div>
    )

}
export default SectionTitle;
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired}