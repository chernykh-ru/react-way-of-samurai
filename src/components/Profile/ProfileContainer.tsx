import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import {AppStateType} from '../../redux/redux-store'
import { ProfileType} from '../../types/types'


type MapPropsType = ReturnType<typeof mapStateToProps>//автоматически выводим типы из mSTP

type DispatchPropsType = {
  getUserProfile: (userId: number | null) => void,
  getStatus: (userId: number | null) => void,
  updateStatus: (status: string) => void,
  savePhoto: (photoFile: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>,
  // saveProfile: (profile: ProfileType) => void,
}

type PathParamsType = {
  userId: string,
}//HOC withRouter RouteComponentProps<PathParamsType>

export type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = Number(this.props.match.params.userId); //объявляем переменную userId которой присваиваем значение из пропсов(которые появились там после оборачивания ХОКом withRouter)//userId: number | null = +приводим строку к числу
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
    // if (!userId) {
    //   console.error("ID should exist in URI params or in state ('autorizedUserId')")
    // } else {
    //   this.props.getUserProfile(userId); //TC получения профиля
    //   this.props.getStatus(userId); //TC получения статуса
    // }
  }

  componentDidMount() {
    // console.log('auth', this.props.autorizedUserId);
    // console.log('params', Number(this.props.match.params.userId));
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
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
        saveProfile={this.props.saveProfile} //TC сохранение данных профиля из redux-form
      />
    );
  }
}
//profile={this.props.profile} выше передавать не обязательно, мы уже передаем все пропсы целиком через {...this.props}, сделано для наглядности

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

//connect<MapPropsType, DispatchPropsType, RouteComponentProps<PathParamsType>, AppStateType>
export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
)(ProfileContainer);
