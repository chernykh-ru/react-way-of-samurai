import styles from './Friends.module.css'

const Friends = () => (
  <div>
    <p>Friends</p>
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        User setings block #1
      </div>
      <div className={styles.wrapper__item}>
        User setings block #2
      </div>
    </div>
  </div>
)

export default Friends