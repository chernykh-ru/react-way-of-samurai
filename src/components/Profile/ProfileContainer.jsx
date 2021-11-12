// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import store from '../../redux/store';
import React from 'react';
// import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';
// import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  // debugger;
  componentDidMount() {
    // debugger;
    let userId = this.props.match.params.userId;
    // let userId = this.props.match.params.userId || 20627;
    if (!userId) {
      userId = 20627;
    } //проверка что userId не null или undefined
    this.props.getUserProfile(userId); //TC
    this.props.getStatus(userId); //TC
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
//profile={this.props.profile} выше передавать не обязательно, мы уже передаем все пропсы целиком через {...this.props}, сделано для наглядности

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, //начать с initialState
  status: state.profilePage.status, //начать с initialState
});

//помещаем в withRouter обертку Auth
// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));//add compose
// export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer); //add compose
