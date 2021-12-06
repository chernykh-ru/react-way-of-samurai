import styles from './Setings.module.css'

const Setings: React.FC = () => (
  <div>
    <p>Setings</p>
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

export default Setings