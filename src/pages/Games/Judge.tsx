import { useState } from 'react';
import { Row, Col, Divider, Button } from 'antd';
import { Typography } from 'antd';

export const _Judge = () => {
  console.log('rendering calc');
  const { Title } = Typography;

  let [count1gamer, setCount1gamer] = useState(() => 10); //убираем создание иниц значения при последующих рендерах(оптимально для сложных иниц объектов)
  let [count2gamer, setCount2gamer] = useState(() => 10);

  const increment1Handler = () => {
    setCount1gamer((count1gamer) => count1gamer + 1);
  };
  const increment2Handler = () => {
    setCount2gamer((count2gamer) => count2gamer + 1);
  };
  const decrementAllHandler = () => {
    setCount1gamer((count1gamer) => count1gamer - 1);
    setCount2gamer((count2gamer) => count2gamer - 1);
  };
  const resetHandler = () => {
    setCount1gamer((count1gamer = 10));
    setCount2gamer((count2gamer = 10));
  };
  return (
    <div>
      <Title level={2}>Judge calc</Title>
      <Row>
        <Col>
          <div>
            <div>Иван Иванович</div>
            <div>{count1gamer}</div>
            <Button onClick={increment1Handler}>+</Button>
          </div>
        </Col>
        <Divider />
        <Col>
          <div>
            <div>Петр Петрович</div>
            <div>{count2gamer}</div>
            <Button onClick={increment2Handler}>+</Button>
          </div>
        </Col>
        <Divider />
      </Row>
      <Button onClick={decrementAllHandler}>-</Button>
      <Button onClick={resetHandler}>reset</Button>
    </div>
  );
};

export const Judge = () => {
  console.log('rendering calc');
  const { Title } = Typography;

  let [countsGamer, setCountsGamer] = useState({
    c1: 10,
    c2: 10,
  });

  const increment1Handler = () => {
    setCountsGamer((countsGamer) => {
      return { ...countsGamer, c1: countsGamer.c1 + 1 };
    });
  };

  const increment2Handler = () => {
    setCountsGamer((countsGamer) => {
      return { ...countsGamer, c2: countsGamer.c2 + 1 };
    });
  };
  const decrementAllHandler = () => {
    setCountsGamer((countsGamer) => {
      return { ...countsGamer, c1: countsGamer.c1 - 1, c2: countsGamer.c2 - 1 };
    });
  };
  const resetHandler = () => {
    setCountsGamer((countsGamer) => {
      return { ...countsGamer, c1: (countsGamer.c1 = 10), c2: (countsGamer.c2 = 10) };
    });
  };

  return (
    <div>
      <Title level={2}>Judge calc</Title>
      <Row justify='start'>
        <Col span={4}>
          <div>Иван Иванович</div>
          <div>{countsGamer.c1}</div>
          <Button onClick={increment1Handler}>+</Button>
        </Col>
        <Col span={4} offset={2}>
          <div>Петр Петрович</div>
          <div>{countsGamer.c2}</div>
          <Button onClick={increment2Handler}>+</Button>
        </Col>
        <Divider />
      </Row>
      <Row justify='start'>
        <Col span={2} offset={2}>
          <Button onClick={decrementAllHandler}>-</Button>
        </Col>
        <Col span={2}>
          <Button onClick={resetHandler}>reset</Button>
        </Col>
      </Row>
    </div>
  );
};
