import { Col, Avatar, Typography, Progress } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchUserType, SelectedUserType } from './Github';

const { Title, Link } = Typography;

type GithubProfilePropsType = {
  selectedUser: SearchUserType | null;
};

type GithubTimerProps = {
  seconds: number;
  onChange: (seconds: number) => void;
  timerKey: string;
};

const startTimerSeconds = 10;

export const GithubTimer: React.FC<GithubTimerProps> = ({ seconds, onChange, timerKey }) => {
  const [timer, setTimer] = useState(startTimerSeconds);

  useEffect(() => {
    setTimer(seconds);
  }, [seconds]);

  useEffect(() => {
    onChange(timer);
  }, [timer]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }; //cleanup function
  }, [timerKey]); //timerKey искуственно внедренная зависимость для пересоздания setInterval(решение проблемы скачка времени на первой секунде)

  // useEffect(() => {
  //   if (timer > 0)
  //     setTimeout(() => {
  //       setTimer(timer - 1);
  //     }, 1000);
  // }, [timer]);

  return (
    <>
      <Progress type='circle' percent={timer * 10} format={(percent) => `${timer} sec`} />
    </>
  );
};

export const GithubProfile: React.FC<GithubProfilePropsType> = ({ selectedUser }) => {
  const [selectedUserDetails, setSelectedUsersDetails] = useState<SelectedUserType | null>(null); //локальное хранилище профиля юзера
  const [seconds, setSeconds] = useState(startTimerSeconds);

  useEffect(() => {
    if (!!selectedUser)
      axios
        .get<SelectedUserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then((res) => {
          setSeconds(startTimerSeconds); //стартуем вначале таймер на новый профиль
          setSelectedUsersDetails(res.data); //затем сетаем полученного юзера в локальный стейт(при обратном порядке баг микротаски и перерендера пустого профиля)
        });
  }, [selectedUser]); //засисимость от выбранного юзера приходящего из пропсов

  useEffect(() => {
    if (seconds < 1) setSelectedUsersDetails(null);
  }, [seconds]); //очищаем компонент по окончанию таймера

  return (
    <>
      {selectedUserDetails && (
        <Col span={8} offset={2}>
          <GithubTimer
            seconds={seconds}
            onChange={setSeconds}
            timerKey={selectedUserDetails.login}
          />
          <Title level={1}>Profile:</Title>
          <Link href={selectedUserDetails.html_url}>
            <Title level={2}>{selectedUserDetails.login}</Title>
            <Avatar
              src={selectedUserDetails.avatar_url}
              size={{ sm: 40, md: 60, lg: 84, xl: 160, xxl: 220 }}
            />
          </Link>
          <p>User id: {selectedUserDetails.id}</p>
          <p>Followers: {selectedUserDetails.followers}</p>
        </Col>
      )}
    </>
  );
};
