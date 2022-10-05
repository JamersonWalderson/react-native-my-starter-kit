import React, {memo} from 'react';
import { Container, Content, Title, Price, Description, Action } from './style';
import Button from '../../../components/Controllers/Button';

const Service = () => {
  
  return(
    <Container>
      <Content>
        <Description>
          <Title>Lorem ipsum</Title>
          <Price>R$ 10,20</Price>
        </Description>
        <Action>
          <Button onPress={() => console.log("Clicou")}>Agendar</Button>
        </Action>
      </Content>
    </Container>
  )
}

export default memo(Service);