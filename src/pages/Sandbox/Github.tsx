import styles from './Sandbox.module.css';
import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Button, Input, Typography, List, Avatar } from 'antd';
import axios from 'axios';
import { GithubProfile } from './GithubProfile';
import Preloader from '../../components/common/preloader/Preloader';

export type SearchUserType = {
  login: string;
  id: number;
};

export type SelectedUserType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: string;
};

type SearchResult = {
  items: SearchUserType[];
};

type GithubSearchPropsType = {
  value: string;
  onSubmit: (fixedValue: string) => void;
};

export const GithubSearch: React.FC<GithubSearchPropsType> = ({ value, onSubmit }) => {
  const [tempSearch, setTempSearch] = useState(''); //input value

  useEffect(() => {
    setTempSearch(value);
  }, [value]);

  return (
    <>
      <Input
        placeholder='search users'
        value={tempSearch} //контроллируемый элемент ввода
        onChange={(e) => {
          setTempSearch(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          onSubmit(tempSearch); //при нажатии колбеком отдаем временное значения поля ввода поисковому значению для отправки запроса
        }}>
        find
      </Button>
    </>
  );
};

type GithubUsersListPropsType = {
  termSearch: string;
  selectedUser: SearchUserType | null;
  onUserSelect: (user: SearchUserType) => void;
};

export const GithubUsersList: React.FC<GithubUsersListPropsType> = ({
  termSearch,
  selectedUser,
  onUserSelect,
}) => {
  const [users, setUsers] = useState<SearchUserType[]>([]); //локальное хранилище юзеров
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios.get<SearchResult>(`https://api.github.com/search/users?q=${termSearch}`).then((res) => {
      setIsloading(false);
      setUsers(res.data.items); //сетаем полученных юзеров в локальный стейт
    });
  }, [termSearch]); //засисимость от синхронизированого стейта с полем ввода(по кнопке)

  if (isloading) {
    return <Preloader />;
  }

  return (
    <>
      {/* <ul>
        {users.map((u) => (
          <li
            key={u.id}
            className={selectedUser === u ? styles.selected : ''}
            onClick={() => {
              onUserSelect(u); //отдаем родителю в колбэк выбранного юзера(которого затем он нам вернет пропсами и мы его подсветим)
            }}>
            {u.login}
          </li>
        ))}
      </ul> */}
      <List
        size='default'
        header={<div>Users list:</div>}
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            className={selectedUser === item ? styles.selected : ''}
            onClick={() => {
              onUserSelect(item); //отдаем родителю в колбэк выбранного юзера(которого затем он нам вернет пропсами и мы его подсветим)
            }}>
            {item.login}
          </List.Item>
        )}
      />
    </>
  );
};

// type GithubTimerProps = {};

// export const GithubTimer: React.FC<GithubTimerProps> = () => {
//   const [timer, setTimer] = useState(10)
//   return <>{timer}</>;
// };

export const Github: React.FC = () => {
  const { Title } = Typography;

  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);
  const [termSearch, setTermSearch] = useState('chernykh'); //value for fetch
  // const [users, setUsers] = useState<SearchUserType[]>([]); //локальное хранилище юзеров
  // const [tempSearch, setTempSearch] = useState('chernykh'); //input value
  // const [selectedUserDetails, setSelectedUsersDetails] = useState<SelectedUserType | null>(null); //локальное хранилище профиля юзера

  useEffect(() => {
    console.log('sync title');
    if (selectedUser) document.title = selectedUser.login;
  }, [selectedUser]);

  // useEffect(() => {
  //   axios.get<SearchResult>(`https://api.github.com/search/users?q=${termSearch}`).then((res) => {
  //     setUsers(res.data.items); //сетаем полученных юзеров в локальный стейт
  //   });
  // }, [termSearch]); //засисимость от синхронизированого стейта с полем ввода(по кнопке)
  // // console.log(users);

  // useEffect(() => {
  //   if (!!selectedUser)
  //     axios
  //       .get<SelectedUserType>(`https://api.github.com/users/${selectedUser.login}`)
  //       .then((res) => {
  //         setSelectedUsersDetails(res.data); //сетаем полученного юзера в локальный стейт
  //       });
  // }, [selectedUser]); //засисимость от выбранного юзера

  return (
    <div>
      <Title level={2}>GitHub search</Title>
      <Row justify='start'>
        <Col span={8}>
          <GithubSearch
            value={termSearch}
            onSubmit={(value: string) => {
              setTermSearch(value);
            }}
          />
          <Button
            onClick={() => {
              setTermSearch('chernykh'); //сброс на дефолтное значение
            }}>
            reset
          </Button>
          <GithubUsersList
            termSearch={termSearch}
            selectedUser={selectedUser}
            // onUserSelect={setSelectedUser}
            onUserSelect={(selectedUser: SearchUserType | null) => {
              setSelectedUser(selectedUser);
            }}
          />
        </Col>
        {selectedUser && <GithubProfile selectedUser={selectedUser} />}
        {/* <Divider /> */}
      </Row>
    </div>
  );
};
