// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import store from '../../redux/store';
import React from 'react';
// import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
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
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
//profile={this.props.profile} выше передавать не обязательно, мы уже передаем все пропсы целиком через {...this.props}, сделано для наглядности

//вызываем HOC с нужным параметром(передаем ему нужную целевую компоненту), внутри хока создается классовая(или функциональная комп) и возвращается к нам наружу
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);//add compose
// (props) => {
//   if (!this.props.isAuth) return <Redirect to={'/login'} />;
//   return <ProfileContainer {...props} />; //прокидываем все пропсы в целевую компоненту
// };
//эта логика перешла в хок withAuthRedirect
// let mapStateToPropsForRedirect = (state) => ({
//   isAuth: state.auth.isAuth, //вытаскиваем из стейта инфу залогинен или нет
// });

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

//помещаем в withRouter обертку Auth
// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));//add compose
// export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer); //add compose
