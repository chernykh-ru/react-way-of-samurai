import styles from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: 'i am teacher',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
        followed: true,
        fullName: 'Vasiliy',
        status: 'i am student',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png',
        followed: false,
        fullName: 'Petro',
        status: 'i am student from ua',
        location: { city: 'Dnepr', country: 'Ukraine' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div className={styles.wrapper} key={user.id}>
          <div>
            <div>
              <img className={styles.userPhoto} src={user.photoUrl} alt='avatar' />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id); //по клику отрабатываем колбэк, берем в пропсах функцию unfollow(вызываем unfollow из контейн комп и передаем туда id)
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id); //в целом если юзер followed(true) подставляем ему кнопку unfollow и наоборот(тернарный)
                  }}>
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.wrapper__item}>
            <div>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
