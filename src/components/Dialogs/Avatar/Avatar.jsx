import styles from './../Dialogs.module.css';

const Avatar = (props) => (
  <div className={styles.avatarWrapper}>
    <img className={styles.avatar} src={props.avatar} alt='avatar' />
  </div>
)

export default Avatar;