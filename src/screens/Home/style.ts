import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  
`
export const Header = styled.View`
  flex: 1;
  padding: 5% 5% 0% 5%;
`
export const WelcomeText = styled.Text`
  color: white;
  font-weight: 400;
  font-size: ${({theme}) => theme.size.title};
`
export const Content = styled.View`
  flex: 4;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 10% 10%;
  
`
export const Title = styled.Text`
  font-size: ${({theme}) => theme.size.title};
`
