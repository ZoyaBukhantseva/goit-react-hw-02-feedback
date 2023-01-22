import PropTypes from 'prop-types';
import styles from "..//Statistic/statistic.module.css"

const Notification =({ message })=> {
  return (
    <>
      <p className={styles.item}>{message}</p>
    </>
  );
}

export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};