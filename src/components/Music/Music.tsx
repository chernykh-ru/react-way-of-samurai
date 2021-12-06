import styles from './Music.module.css'

const Music: React.FC = () => (
  <div>
    <p>Music</p>
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        Albums #1
      </div>
      <div className={styles.wrapper__item}>
      Albums #2
      </div>
    </div>
  </div>
)

export default Music