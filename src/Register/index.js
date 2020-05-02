import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
  Container,
  CollumnLeft,
  CollumnRight,
  Brand,
  Content,
  Bottom,
} from './styles';
import Logo from '../assets/zerafilas.svg';

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

export default function Register() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <CollumnLeft>
          <Brand>
            <img src={Logo} alt="ZeraFilas" />
            <p>Um novo jeito de atender, nada de Covid-19</p>
          </Brand>
        </CollumnLeft>
        <CollumnRight>
          <Content>
            <h1>Cadastre-se</h1>
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
                  id="outlined-cnpj-input"
                  label="CNPJ"
                  type="text"
                  autoComplete=""
                  variant="outlined"
                />
                <TextField
                  id="outlined-password-input"
                  label="Escolha uma Senha"
                  type="password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-confirm-password-input"
                  label="Confirme a senha"
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
                Cadastrar
              </Button>
            </form>
            <Bottom>
              <p>Ja possui um cadastro?</p>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                component={Link}
                to="/login"
              >
                Faça o Login aqui
              </Button>
            </Bottom>
          </Content>
        </CollumnRight>
      </Container>
    </>
  );
}
