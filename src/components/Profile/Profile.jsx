import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


const Profile = () => (
  <div>
    <ProfileInfo />
    <MyPosts />
  </div>
)

export default Profile