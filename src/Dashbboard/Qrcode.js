import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { FaQrcode } from 'react-icons/fa';
import {
  Wrapper,
  BarNavigation,
  Container,
  Content,
  Painel,
  InAttendance,
} from './styles';

import Nav from './Nav';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#ffffff',
    marginBottom: 32,
  },
}));

export default function QrCode() {
  const classes = useStyles();
  return (
    <Wrapper>
      <BarNavigation>
        <Avatar className={classes.large}>V</Avatar>
        <p>Veste Bem</p>
        <Nav />
      </BarNavigation>
      <Container>
        <h1 className={classes.title}>Gerar QRCode</h1>
        <Content>
          <Painel>
            <InAttendance onClick={() => {}}>
              <FaQrcode size="72" />
              <Typography variant="overline" display="block">
                Gerar QRCode
              </Typography>
            </InAttendance>
          </Painel>
        </Content>
      </Container>
    </Wrapper>
  );
}
