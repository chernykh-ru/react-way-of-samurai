import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
// import classes from './Profile.module.css'

const posts = [
  {id: 1, message: 'Hi, how are you?', likeCounter: 15},
  {id: 2, message: 'My first react post', likeCounter: 25},
  // {id: 3, message: 'Yo', likeCounter: 5},
]

const Profile = () => (
  <div>
    <ProfileInfo />
    <MyPosts data={posts} />
  </div>
)

export default Profile