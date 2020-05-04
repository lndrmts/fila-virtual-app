import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/zerafilas.svg';
import {
  Container,
  CollumnLeft,
  CollumnRight,
  Brand,
  Content,
  Bottom,
} from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <CollumnLeft>
          <Brand>
            <img src={Logo} alt="ZeraFilas" />
            <p>Atendimento seguro e sem fila!</p>
          </Brand>
        </CollumnLeft>
        <CollumnRight>
          <Content>
            <h1>Login</h1>
            <hr />
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-email-input"
                  label="E-mail"
                  type="email"
                  autoComplete="current-email"
                  variant="outlined"
                />

                <TextField
                  id="outlined-password-input"
                  label="Senha"
                  type="password"
                  variant="outlined"
                />
              </div>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.margin}
              >
                Entrar
              </Button>
            </form>
            <Bottom>
              <p>Ainda não tem cadastro?</p>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                component={Link}
                to="/cadastro"
              >
                Cadastre-se aqui
              </Button>
            </Bottom>
          </Content>
        </CollumnRight>
      </Container>
    </>
  );
}
