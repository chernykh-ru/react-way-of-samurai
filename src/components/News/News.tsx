import styles from './News.module.css'

const News: React.FC = () => (
  <div>
    <p>News</p>
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        News #1
      </div>
      <div className={styles.wrapper__item}>
        News #2
      </div>
    </div>
  </div>
)

export default News