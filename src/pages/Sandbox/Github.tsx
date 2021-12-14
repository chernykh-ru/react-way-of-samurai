import styles from './Sandbox.module.css';
import { useEffect, useState } from 'react';
import { Row, Col, Divider, Button, Input, Avatar, Typography, Anchor } from 'antd';
import axios from 'axios';

const { Link } = Typography;

type SearchUserType = {
  login: string;
  id: number;
};

type SelectedUserType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: string;
};

type SearchResult = {
  items: SearchUserType[];
};

export const Github = () => {
  console.log('rendering github');
  const { Title } = Typography;
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);
  const [users, setUsers] = useState<SearchUserType[]>([]); //локальное хранилище юзеров
  const [tempSearch, setTempSearch] = useState('chernykh'); //input value
  const [termSearch, setTermSearch] = useState('chernykh'); //value for fetch
  const [selectedUserDetails, setSelectedUsersDetails] = useState<SelectedUserType | null>(null); //локальное хранилище профиля юзера

  // useEffect(() => {
  //   console.log('sync title');
  //   if (selectedUser) document.title = selectedUser.login;
  // }, [selectedUser]);

  // const fetchData = (term: string) => {
  //   axios.get<SearchResult>(`https://api.github.com/search/users?q=${term}`).then((res) => {
  //     setUsers(res.data.items);
  //   }); //сетаем полученных юзеров в локальный стейт
  // };

  useEffect(() => {
    console.log('sync users from api');
    axios.get<SearchResult>(`https://api.github.com/search/users?q=${termSearch}`).then((res) => {
      setUsers(res.data.items); //сетаем полученных юзеров в локальный стейт
    });
  }, [termSearch]); //засисимость от синхронизированого стейта с полем ввода(по кнопке)
  // console.log(users);

  useEffect(() => {
    // console.log('sync users from api');
    if (selectedUser) document.title = selectedUser.login;
    // console.log(selectedUser?.login);
    if (!!selectedUser)
      axios
        .get<SelectedUserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then((res) => {
          setSelectedUsersDetails(res.data); //сетаем полученного юзера в локальный стейт
        });
  }, [selectedUser]); //засисимость от выбранного юзера
  // console.log(users);

  return (
    <div>
      <Title level={2}>GitHub search</Title>
      <Row justify='start'>
        <Col span={8}>
          <Input
            placeholder='search users'
            value={tempSearch} //контроллируемый элемент
            onChange={(e) => {
              setTempSearch(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setTermSearch((termSearch) => (termSearch = tempSearch)); //при нажатии сетаем присвоение временного значения поля ввода поисковому значению для отправки запроса
            }}>
            find
          </Button>
          <ul>
            {users.map((u) => (
              <li
                key={u.id}
                className={selectedUser === u ? styles.selected : ''}
                onClick={() => {
                  setSelectedUser(u);
                }}>
                {u.login}
              </li>
            ))}
          </ul>
        </Col>
        {selectedUserDetails && (
          <Col span={8} offset={2}>
            <Link href={selectedUserDetails.html_url}>
              <Title level={2}>{selectedUserDetails.login}</Title>
              <Avatar
                src={selectedUserDetails.avatar_url}
                size={{ sm: 40, md: 60, lg: 84, xl: 160 }}
              />
            </Link>
            <p>User id: {selectedUserDetails.id}</p>
            <p>Followers: {selectedUserDetails.followers}</p>
          </Col>
        )}
        <Divider />
      </Row>
    </div>
  );
};
