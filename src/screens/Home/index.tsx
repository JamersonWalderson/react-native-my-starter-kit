import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { api } from "../../services/service";
import Loading from "../Loading";
import Service from "./Service";
import { Container, Content, Header, Title, WelcomeText } from "./style";

const Login = () => {
  const { data, error, isFetching } = useQuery(['service'], api.getService)

  if(isFetching) {
    return <Loading />
  }

  return(
    <Container>
      <Header>
        <WelcomeText>Seja bem-vindo(a)</WelcomeText>
      </Header>
      <Content>
        <Title>Lista de serviços</Title>
        <Service />
        <Service />
        <Service />
      </Content>
    </Container>
  );
}

export default Login;