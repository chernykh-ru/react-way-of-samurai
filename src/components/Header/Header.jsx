import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        {/* <img
          src='https://freepngimg.com/thumb/logo/69613-litecoin-bitcoin-cryptocurrency-london-bull-logo.png'
          width='40'
          height='40'
          alt='logo'
        /> */}
      </div>
      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/Login/'}>Login</NavLink>
        )}
      </div>
    </header> //isAuth true - покажем логин, иначе ссылку на залогинивание
  );
};

export default Header;
