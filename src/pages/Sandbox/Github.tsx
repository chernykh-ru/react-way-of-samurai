import styles from './Sandbox.module.css';
import { useEffect, useState } from 'react';
import { Row, Col, Divider, Button, Input } from 'antd';
import { Typography } from 'antd';
import axios from 'axios';

type SearchUsertype = {
  login: string;
  id: number;
};

type SearchResult = {
  items: SearchUsertype[];
};

export const Github = () => {
  console.log('rendering github');
  const { Title } = Typography;
  const [selectedUser, setSelectedUser] = useState<SearchUsertype | null>(null);
  const [users, setUsers] = useState<SearchUsertype[]>([]); //локальное хранилище юзеров
  const [tempSearch, setTempSearch] = useState('chernykh'); //input value
  const [termSearch, setTermSearch] = useState('chernykh'); //value for fetch

  useEffect(() => {
    console.log('sync title');
    if (selectedUser) document.title = selectedUser.login;
  }, [selectedUser]);

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
        <Col span={8} offset={2}>
          <Title level={2}>Username</Title>
          <div>Details</div>
        </Col>
        <Divider />
      </Row>
    </div>
  );
};
