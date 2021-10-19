import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


const Profile = () => (
  // <div className={classes.content}>
  <div>
    <div>
      <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' width='1000' height='250' alt='гора Фудзи' />
    </div>
    <div>
      ava+description
    </div>
    <MyPosts />
  </div>
)

export default Profile