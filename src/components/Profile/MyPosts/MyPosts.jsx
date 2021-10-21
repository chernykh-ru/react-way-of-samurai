import Post from './Post/Post'
import styles from './MyPosts.module.css'

// const posts = [
//   {id: 1, message: 'Hi, how are you?', likeCounter: 15},
//   {id: 2, message: 'My first react post', likeCounter: 25},
//   // {id: 3, message: 'Yo', likeCounter: 5},
// ]


// const postsElements = function PostEl({data, i}) {
//   return data.map(item => (
//     <Post key={i} message={item.message} likeCounter={item.likeCounter} />
//   ))
// }

// const postsElements = ({ data, i }) => data.map(<Post key={i} message={data.message} likeCounter={data.likeCounter} />)

const MyPosts = (props) => {

  const postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} likeCounter={p.likeCounter} />)

  return (
  <div className={styles.postsBlock}>
    <h3>My posts</h3>
    <div className={styles.postBlock}>
      <div><textarea></textarea></div>
      <div><button>Add post</button></div>
    </div>
    <div className={styles.posts}>
      { postsElements }
    </div>
  </div>
)}

export default MyPosts