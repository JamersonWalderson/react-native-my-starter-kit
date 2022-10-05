import styled from 'styled-components/native';

export const Container = styled.View`
  /* background-color: blue; */
  /* border-color: black; */
  /* border: 1px; */
  height: 60px;
  margin-top: 5%;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const Description = styled.View`
  flex: 2;
  /* background-color: green; */
`
export const Action = styled.View`
  flex: 1;
  /* background-color: yellow; */
`

export const Title = styled.Text`
  font-size: ${({theme}) => theme.size.subTitle};
`
export const Price = styled.Text``
