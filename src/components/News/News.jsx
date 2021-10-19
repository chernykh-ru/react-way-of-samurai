import classes from './News.module.css'

const News = () => (
  <div>
    <p>News</p>
    <div className={classes.wrapper}>
      <div className={classes.wrapper__item}>
        News #1
      </div>
      <div className={classes.wrapper__item}>
        News #2
      </div>
    </div>
  </div>
)

export default News