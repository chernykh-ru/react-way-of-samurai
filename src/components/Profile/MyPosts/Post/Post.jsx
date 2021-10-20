import styles from './Post.module.css'

const Post = (props) => (
  <div className={styles.item}>
    <img src='https://e7.pngegg.com/pngimages/57/256/png-clipart-bender-philip-j-fry-computer-icons-leela-bender-smiley-cartoon.png' width='60' height='60' alt='avatar' />
    <p>{props.message}</p>
    <div className={styles.like}>
      <img src='https://w7.pngwing.com/pngs/49/109/png-transparent-facebook-like-button-giphy-social-network-advertising-facebook-text-hand-rectangle-thumbnail.png' width='15' height='15' alt='like' />
      <span>{props.likeCounter}</span>
    </div>
  </div>
)

export default Post

//props

// const Post = (props) => {
//   console.log(props.message)

//   return (
//   <div className={classes.item}>
//     <img src='https://e7.pngegg.com/pngimages/57/256/png-clipart-bender-philip-j-fry-computer-icons-leela-bender-smiley-cartoon.png' width='60' height='60' alt='avatar' />
//     <p>post</p>
//     <div>
//       <span>like</span>
//     </div>
//   </div>
//   )
// }