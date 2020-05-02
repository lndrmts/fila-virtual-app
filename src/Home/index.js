import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
  Container,
  CollumnLeft,
  CollumnRight,
  Brand,
  Content,
  Bottom,
  Span,
} from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <CollumnLeft>
          <Brand>
            <h1>Fila Virtual</h1>
            <p>Um novo jeito de atender, nada de Covid-19</p>
          </Brand>
        </CollumnLeft>
        <CollumnRight>
          <Content>
            <hr />
            <h1>
              Plataforma de gerenciamento de fila virtual, é o que seu
              estabelecimento precisa para funcionar.
            </h1>
            <p>
              Sem filas, sem contato, sem Covid-19 e sem fechar. Faça agora o
              seu cadastro e passe a atender seus clientes através do Fila
              Virtual.
            </p>
            <Bottom>
              <small>Isso mesmo que eu quero</small>
              <br />
              <Button
                variant="contained"
                size="large"
                color="secondary"
                component={Link}
                to="/cadastro"
              >
                Cadastre-se aqui
              </Button>
              <Span>
                <small>
                  Já tem cadastro? <Link to="/login">Entrar</Link>
                </small>
              </Span>
            </Bottom>
          </Content>
        </CollumnRight>
      </Container>
    </>
  );
}
