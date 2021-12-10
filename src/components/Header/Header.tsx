import { Link } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';

import { Layout, Menu, Avatar, Image, Row, Col, Button } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { AppStateType } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import avataaars from '../../assets/images/avataaars.png';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { login, isAuth } = useSelector(({ auth }: AppStateType) => auth);
  const { profile } = useSelector(({ profilePage }: AppStateType) => profilePage);
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
        {isAuth && profile ? (
          <>
            <Col span={2}>
              {/* <Avatar
                alt={login || ''}
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              /> */}
              <Avatar
                icon={
                  <Image
                    src={profile.photos.small !== null ? profile.photos.small : avataaars}
                    style={{ width: 32 }}
                  />
                }
              />
            </Col>
            <Col span={4}>
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
