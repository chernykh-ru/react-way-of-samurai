// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import store from '../../redux/store';
import React from 'react';
// import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
// import { usersAPI } from '../../api/api';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId; //объявляем переменную userId которой присваиваем значение из пропсов(которые появились там после оборачивания ХОКом withRouter)
    // let userId = this.props.match.params.userId || 20627;
    if (!userId) {
      userId = this.props.autorizedUserId;
      // userId = 20627;//проверка что userId не null или undefined
      if (!userId) {
        this.props.history.push('/login');
      } //если и в autorizedUserId нет userId тогда переадресация на Логин встроенным методом withRouter
    }
    this.props.getUserProfile(userId); //TC получения профиля
    this.props.getStatus(userId); //TC получения статуса
  }

  componentDidMount() {
    // console.log('auth', this.props.autorizedUserId);
    // console.log('params', Number(this.props.match.params.userId));

    // debugger;
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger;
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile(); //сравниваем текущие пропсы userId с прошлыми
    }
  } //с условием избегаем зациклености ререндеров при получении пропсов

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={
          !this.props.match.params.userId ||
          Number(this.props.match.params.userId) === this.props.autorizedUserId
        } //если в строке URL есть Id, значит мы на чужой странице, если нет - на своей и можно будет загрузить аватар или проверим если Id это Id авторизированого юзера то тоже можно загрузить аватар
        savePhoto={this.props.savePhoto}
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
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

//помещаем в withRouter обертку Auth
// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));//add compose
// export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer); //add compose
