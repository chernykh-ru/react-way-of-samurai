// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
// import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';
import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  // debugger;
  componentDidMount() {
    // debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      this.props.setUserProfile(response.data); //получаем response data из response(ответ) data(данные) и диспачим setUserProfile(хардкодим второго пользователя)
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
//profile={this.props.profile} выше передавать не обязательно, мы уже передаем все пропсы целиком через {...this.props}, сделано для наглядности

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
//profile: state.profilePage.profile
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
