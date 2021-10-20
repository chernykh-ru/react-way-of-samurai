import classes from './ProfileInfo.module.css'


const ProfileInfo = () => (
  <div>
    <div>
      <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' width='1000' height='250' alt='гора Фудзи' />
    </div>
    <div className={classes.descriptionBlock}>
      ava+description
    </div>
  </div>
)

export default ProfileInfo