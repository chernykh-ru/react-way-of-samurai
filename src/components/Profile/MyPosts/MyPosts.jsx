import Post from './Post/Post'
import classes from './MyPosts.module.css'

const postData = [
  {id: 1, message: 'Hi, how are you?', likeCounter: 15},
  {id: 2, message: 'My first react post', likeCounter: 25},
  {id: 3, message: 'Yo', likeCounter: 5},
]


const MyPosts = () => (
  <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div className={classes.postBlock}>
      <div><textarea></textarea></div>
      <div><button>Add post</button></div>
    </div>
    <div className={classes.posts}>
    <Post message={postData[0].message} likeCounter={postData[0].likeCounter} />
    <Post message={postData[1].message} likeCounter={postData[1].likeCounter} />
    <Post message={postData[2].message} likeCounter={postData[2].likeCounter} />
    </div>
  </div>
)

export default MyPosts