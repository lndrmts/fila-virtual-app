import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {
  Wrapper,
  BarNavigation,
  Container,
  Content,
  Painel,
  Client,
  Number,
  InAttendance,
} from './styles';

import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#ffffff',
    marginBottom: 32,
  },
  secondary: {
    color: '#E10050',
    backgroundColor: '#ffffff',
  },
  current: {
    backgroundColor: '#E10050',
    color: '#ffffff',
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const data = [
  {
    id: 10031,
    position: 31,
    number: '*****5314',
    status: 'current',
  },
  {
    id: 10032,
    position: 32,
    number: '*****5314',
    status: 'next',
  },
  {
    id: 10033,
    position: 33,
    number: '*****1245',
    status: 'wait',
  },
  {
    id: 10034,
    position: 34,
    number: '*****1155',
    status: 'wait',
  },
  {
    id: 10035,
    position: 35,
    number: '*****2414',
    status: 'wait',
  },
  {
    id: 10036,
    position: 36,
    number: '*****1679',
    status: 'wait',
  },
  {
    id: 10037,
    position: 37,
    number: '*****1247',
    status: 'wait',
  },
  {
    id: 10038,
    position: 38,
    number: '*****3347',
    status: 'wait',
  },
  {
    id: 10039,
    position: 39,
    number: '*****9854',
    status: 'wait',
  },
  {
    id: 10040,
    position: 40,
    number: '*****9854',
    status: 'wait',
  },
  {
    id: 10041,
    position: 41,
    number: '*****9854',
    status: 'wait',
  },
  {
    id: 10042,
    position: 42,
    number: '*****9854',
    status: 'wait',
  },
  {
    id: 10043,
    position: 43,
    number: '*****9854',
    status: 'wait',
  },
];

export default function Dashbboard() {
  const classes = useStyles();
  const [clients, setClients] = useState(data);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setClients(data);
    setUpdate(false);
  }, [update]);

  function handleEndService() {
    if (data.length) {
      data.shift();
      if (data[0]) {
        data[0].status = 'current';
      }
      if (data[1]) {
        data[1].status = 'next';
      }
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }
  return (
    <Wrapper>
      <BarNavigation>
        <Avatar className={classes.large}>V</Avatar>
        <p>Veste Bem</p>
        <Nav />
      </BarNavigation>
      <Container>
        <h1 className={classes.title}>Dashboard</h1>
        <Content>
          <Painel size="300px">
            <h3>Fila</h3>
            {clients.length &&
              clients.map((c) => (
                <Client key={c.id} status={c.status}>
                  <Avatar
                    className={`${
                      c.status === 'next' ? classes.secondary : ''
                    }`}
                  >
                    {c.position}
                  </Avatar>
                  <Number status={c.status}>{c.number}</Number>
                </Client>
              ))}
            {clients.length === 1 && <p>Fila vazia</p>}
          </Painel>
          <Painel>
            <h3>Em Atendimento</h3>
            {clients.length && (
              <InAttendance onClick={() => handleEndService()}>
                <Avatar className={classes.current}>
                  {clients.length && clients[0].position}
                </Avatar>
                <Typography variant="overline" display="block">
                  Finalizar Atendimento
                </Typography>
              </InAttendance>
            )}
            {clients.length === 0 && (
              <p>
                Atendeu todos os clientes! <br />
                Que tal lavar as mãos e tomar um café?
              </p>
            )}
          </Painel>
        </Content>
      </Container>
    </Wrapper>
  );
}
