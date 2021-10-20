import styles from './../Dialogs.module.css';

const Message = (props) => (
  <div className={styles.message}>{props.message}</div>
)

export default Message;