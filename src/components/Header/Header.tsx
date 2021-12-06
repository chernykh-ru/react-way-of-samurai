import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  isAuth: boolean,
  login: string | null,
  logout: () => void,
}

const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
  return (
    <header className={styles.header}>
      <div>
      </div>
      <div className={styles.login}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/Login/'}>Login</NavLink>
        )}
      </div>
    </header> //isAuth true - покажем логин, иначе ссылку на залогинивание
  );
};

export default Header;
