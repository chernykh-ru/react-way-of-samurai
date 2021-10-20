import Post from './Post/Post'
import classes from './MyPosts.module.css'


const MyPosts = () => (
  <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div className={classes.postBlock}>
      <div><textarea></textarea></div>
      <div><button>Add post</button></div>
    </div>
    <div className={classes.posts}>
    <Post message='Hi, how are you?' likeCounter='15' />
    <Post message='My first react post' likeCounter='20' />
    </div>
  </div>
)

export default MyPosts