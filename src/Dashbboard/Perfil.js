import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { Wrapper, BarNavigation, Container, Content, Painel } from './styles';

import Nav from './Nav';

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
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#ffffff',
    marginBottom: 32,
  },
  input: {
    display: 'none',
  },
}));

export default function Perfil() {
  const classes = useStyles();
  return (
    <Wrapper>
      <BarNavigation>
        <Avatar className={classes.large}>V</Avatar>
        <p>Veste Bem</p>
        <Nav />
      </BarNavigation>
      <Container>
        <h1 className={classes.title}>Perfil</h1>
        <Content>
          <Painel>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-email-input"
                  label="E-mail"
                  type="email"
                  autoComplete="current-email"
                  variant="outlined"
                  value="contato@vestebem.com"
                  helperText="Não é possivel alterar o e-mail"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="outlined-cnpj-input"
                  label="CNPJ"
                  type="text"
                  autoComplete=""
                  variant="outlined"
                  value="93.339.970/0001-05"
                  helperText="Não é possivel alterar o CNPJ"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Nova Senha"
                  type="password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-confirm-password-input"
                  label="Confirme a nova senha"
                  type="password"
                  variant="outlined"
                />
                <br />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  Imagem de Avatar
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.margin}
              >
                Atualizar
              </Button>
            </form>
          </Painel>
        </Content>
      </Container>
    </Wrapper>
  );
}
