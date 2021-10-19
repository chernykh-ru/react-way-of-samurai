import Post from './Post/Post'
import classes from './MyPosts.module.css'


const MyPosts = () => (
  <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove post</button>
    </div>
    <div className={classes.posts}>
    <Post message='Hi, how are you?' likeCounter='15' />
    <Post message='My first react post' likeCounter='20' />
    </div>
  </div>
)

export default MyPosts