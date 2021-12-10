import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';

import { Layout, Menu, Avatar, Row, Col, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AppStateType } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';

// type PropsType = {
//   isAuth: boolean;
//   login: string | null;
//   logout: () => void;
// };

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { login, isAuth } = useSelector(({ auth }: AppStateType) => auth);
  const { Header } = Layout;
  const _logout = () => {
    dispatch(logout());
  };

  return (
    <Header className='header'>
      <div className='logo' />
      <Row>
        <Col span={18}>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link to='/users'>Developers</Link>
            </Menu.Item>
          </Menu>
        </Col>
        {isAuth ? (
          <>
            <Col span={1}>
              <Avatar
                alt={login || ''}
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Col>
            <Col span={5}>
              <Button onClick={_logout}>Log out</Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <Link to={'/Login/'}>Login</Link>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
};

// export default Header;
